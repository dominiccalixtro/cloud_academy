import { curriculum } from "../data/curriculum";
import type { Lesson, Module } from "../types";
import { addNotification } from "../../notifications/services/notification.service";

const STORAGE_KEY = "cloud-academy-courses";

function readCourses(): Module[] {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(curriculum));
    return curriculum;
  }

  return JSON.parse(stored) as Module[];
}

function writeCourses(courses: Module[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
}

// This interface is intentionally synchronous while storage is local. An API
// implementation can keep these same operations and make them asynchronous later.
export const courseRepository = {
  getAll: (): Module[] => readCourses(),

  getLessons: (): Lesson[] => readCourses().flatMap((module) => module.lessons),

  getLessonById: (lessonId: string): Lesson | undefined =>
    courseRepository.getLessons().find((lesson) => lesson.id === lessonId),

  getSummary: (): { moduleCount: number; lessonCount: number } => {
    const courses = readCourses();

    return {
      moduleCount: courses.length,
      lessonCount: courses.reduce((total, module) => total + module.lessons.length, 0),
    };
  },

  exportCourses: (): string => {
    const courses = readCourses();

    return JSON.stringify(
      {
        storageKey: STORAGE_KEY,
        exportedAt: new Date().toISOString(),
        courses,
      },
      null,
      2,
    );
  },

  importCourses: (payload: string): void => {
    const parsed = JSON.parse(payload) as { courses?: Module[] } | Module[];
    const courses = Array.isArray(parsed) ? parsed : parsed.courses;

    if (!Array.isArray(courses)) {
      throw new Error("Invalid course payload");
    }

    const normalizedCourses: Module[] = courses.map((module) => ({
      id: String(module.id ?? crypto.randomUUID()),
      title: String(module.title ?? "Untitled module"),
      description: String(module.description ?? "No description yet."),
      lessons: Array.isArray(module.lessons)
        ? module.lessons.map((lesson) => ({
            id: String(lesson.id ?? crypto.randomUUID()),
            week: Number(lesson.week ?? 1),
            day: Number(lesson.day ?? 1),
            title: String(lesson.title ?? "Untitled lesson"),
            duration: String(lesson.duration ?? "30 min"),
            description: String(lesson.description ?? ""),
            objectives: Array.isArray(lesson.objectives)
              ? lesson.objectives.map((objective) => String(objective))
              : [],
            presentation: String(lesson.presentation ?? ""),
            powerpoint: String(lesson.powerpoint ?? ""),
            status:
              lesson.status === "completed" ||
              lesson.status === "available" ||
              lesson.status === "locked"
                ? lesson.status
                : "available",
          }))
        : [],
    }));

    writeCourses(normalizedCourses);
  },

  addLesson: (moduleId: string, lesson: Lesson): void => {
    const courses = readCourses();
    const module = courses.find((item) => item.id === moduleId);

    if (!module) return;

    module.lessons.push(lesson);
    writeCourses(courses);
    addNotification({
      id: crypto.randomUUID(),
      title: "New Lesson Available",
      message: `${lesson.title} is now available.`,
      type: "lesson",
      read: false,
      createdAt: new Date().toISOString(),
    });
  },

  updateModule: (moduleId: string, updatedModule: Pick<Module, "id" | "title" | "description">): void => {
    const courses = readCourses();
    const module = courses.find((item) => item.id === moduleId);

    if (!module) return;

    module.title = updatedModule.title;
    module.description = updatedModule.description;
    writeCourses(courses);
  },

  updateLesson: (moduleId: string, updatedLesson: Lesson): void => {
    const courses = readCourses();
    const module = courses.find((item) => item.id === moduleId);

    if (!module) return;

    module.lessons = module.lessons.map((lesson) =>
      lesson.id === updatedLesson.id ? updatedLesson : lesson,
    );
    writeCourses(courses);
  },

  reorderLessons: (moduleId: string, orderedLessonIds: string[]): void => {
    const courses = readCourses();
    const module = courses.find((item) => item.id === moduleId);

    if (!module) return;

    const lessonMap = new Map(module.lessons.map((lesson) => [lesson.id, lesson]));
    const reordered = orderedLessonIds
      .map((lessonId) => lessonMap.get(lessonId))
      .filter((lesson): lesson is Lesson => Boolean(lesson));

    const missingLessons = module.lessons.filter(
      (lesson) => !orderedLessonIds.includes(lesson.id),
    );

    module.lessons = [...reordered, ...missingLessons];
    writeCourses(courses);
  },

  deleteLesson: (moduleId: string, lessonId: string): void => {
    const courses = readCourses();
    const module = courses.find((item) => item.id === moduleId);

    if (!module) return;

    module.lessons = module.lessons.filter((lesson) => lesson.id !== lessonId);
    writeCourses(courses);
  },
};

export const getCourses = courseRepository.getAll;
export const getAllLessons = courseRepository.getLessons;
export const getLessonById = courseRepository.getLessonById;
export const getSummary = courseRepository.getSummary;
export const exportCourses = courseRepository.exportCourses;
export const importCourses = courseRepository.importCourses;

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

  updateLesson: (moduleId: string, updatedLesson: Lesson): void => {
    const courses = readCourses();
    const module = courses.find((item) => item.id === moduleId);

    if (!module) return;

    module.lessons = module.lessons.map((lesson) =>
      lesson.id === updatedLesson.id ? updatedLesson : lesson,
    );
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

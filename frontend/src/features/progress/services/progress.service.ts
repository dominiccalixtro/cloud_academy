import { curriculum } from "../../bootcamp/data/curriculum";

const STORAGE_KEY = "cloud-academy-progress";

function getStoredLessons(): string[] {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return [];
  }

  return JSON.parse(data);
}

function saveLessons(lessons: string[]) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(lessons)
  );
}

export function getCompletedLessons() {
  return getStoredLessons();
}

export function isLessonCompleted(id: string) {
  return getStoredLessons().includes(id);
}

export function toggleLessonCompletion(id: string) {
  const completed = getStoredLessons();

  if (completed.includes(id)) {
    saveLessons(
      completed.filter(
        (lessonId) => lessonId !== id
      )
    );
  } else {
    completed.push(id);

    saveLessons(completed);
  }
}

export function clearProgress() {
  localStorage.removeItem(STORAGE_KEY);
}

export function getProgress() {
  const lessons = curriculum.flatMap(
    (module) => module.lessons
  );

  const total = lessons.length;

  const completed =
    getCompletedLessons().length;

  return {
    total,
    completed,
    percentage:
      total === 0
        ? 0
        : Math.round(
            (completed / total) * 100
          ),
  };
}

export function getLessonStatus(id: string) {
  return isLessonCompleted(id)
    ? "completed"
    : "available";
}

export function getNextLesson() {
  const lessons = curriculum.flatMap(
    (module) => module.lessons
  );

  const completed = getCompletedLessons();

  return (
    lessons.find(
      (lesson) =>
        !completed.includes(lesson.id)
    ) ?? null
  );
}
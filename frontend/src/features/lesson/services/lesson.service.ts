import { curriculum } from "../../bootcamp/data/curriculum";

export function getAllLessons() {
  return curriculum.flatMap((module) => module.lessons);
}

export function getLessonById(id: string) {
  return getAllLessons().find((lesson) => lesson.id === id);
}
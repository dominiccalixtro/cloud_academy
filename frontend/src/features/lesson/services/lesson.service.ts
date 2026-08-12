import {
  getAllLessons as getStoredLessons,
  getLessonById as findLessonById,
} from "../../bootcamp/services/course.repository";

export function getAllLessons() {
  return getStoredLessons();
}

export function getLessonById(id: string) {
  return findLessonById(id);
}

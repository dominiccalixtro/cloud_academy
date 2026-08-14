import type { Lesson, Module } from "../../bootcamp/types";
import { courseRepository } from "../../bootcamp/services/course.repository";

export const getCourses = (): Module[] => courseRepository.getAll();
export const getSummary = (): { moduleCount: number; lessonCount: number } =>
  courseRepository.getSummary();
export const exportCourses = (): string => courseRepository.exportCourses();
export const importCourses = (payload: string): void => courseRepository.importCourses(payload);
export const addLesson = (moduleId: string, lesson: Lesson): void =>
  courseRepository.addLesson(moduleId, lesson);
export const updateModule = (
  moduleId: string,
  updatedModule: Pick<Module, "id" | "title" | "description">,
): void => courseRepository.updateModule(moduleId, updatedModule);
export const updateLesson = (moduleId: string, lesson: Lesson): void =>
  courseRepository.updateLesson(moduleId, lesson);
export const reorderLessons = (moduleId: string, orderedLessonIds: string[]): void =>
  courseRepository.reorderLessons(moduleId, orderedLessonIds);
export const deleteLesson = (moduleId: string, lessonId: string): void =>
  courseRepository.deleteLesson(moduleId, lessonId);

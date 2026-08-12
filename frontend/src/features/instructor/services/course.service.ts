import type { Lesson, Module } from "../../bootcamp/types";
import { courseRepository } from "../../bootcamp/services/course.repository";

export const getCourses = (): Module[] => courseRepository.getAll();
export const addLesson = (moduleId: string, lesson: Lesson): void =>
  courseRepository.addLesson(moduleId, lesson);
export const updateLesson = (moduleId: string, lesson: Lesson): void =>
  courseRepository.updateLesson(moduleId, lesson);
export const deleteLesson = (moduleId: string, lessonId: string): void =>
  courseRepository.deleteLesson(moduleId, lessonId);

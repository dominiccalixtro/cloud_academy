import { beforeEach, describe, expect, it } from "vitest";

import { login } from "../../auth/services/auth.service";
import { addNotification, getNotifications } from "../../notifications/services/notification.service";
import { courseRepository } from "./course.repository";

describe("courseRepository", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("seeds courses and exposes the seeded lessons", () => {
    const courses = courseRepository.getAll();

    expect(courses).toHaveLength(1);
    expect(courseRepository.getLessons()).toHaveLength(4);
  });

  it("persists lesson edits for all consumers", () => {
    const [course] = courseRepository.getAll();
    const [lesson] = course.lessons;

    courseRepository.updateLesson(course.id, {
      ...lesson,
      title: "Updated cloud foundations",
    });

    expect(courseRepository.getLessonById(lesson.id)?.title).toBe(
      "Updated cloud foundations",
    );
  });

  it("updates module metadata and reorders lessons", () => {
    const [course] = courseRepository.getAll();
    const [firstLesson, secondLesson, ...remainingLessons] = course.lessons;

    courseRepository.updateModule(course.id, {
      ...course,
      title: "Updated Module",
      description: "Updated description",
    });

    courseRepository.reorderLessons(course.id, [
      secondLesson.id,
      firstLesson.id,
      ...remainingLessons.map((lesson) => lesson.id),
    ]);

    const updatedCourse = courseRepository.getAll().find((item) => item.id === course.id);

    expect(updatedCourse?.title).toBe("Updated Module");
    expect(updatedCourse?.description).toBe("Updated description");
    expect(updatedCourse?.lessons.map((lesson) => lesson.id)).toEqual([
      secondLesson.id,
      firstLesson.id,
      ...remainingLessons.map((lesson) => lesson.id),
    ]);
  });

  it("exports and imports the course catalog and tracks total counts", () => {
    const originalCourses = courseRepository.getAll();
    const exported = courseRepository.exportCourses();

    expect(exported).toContain("cloud-academy-courses");
    expect(exported).toContain(originalCourses[0].title);

    const nextCourses = [
      {
        ...originalCourses[0],
        id: "imported-module",
        title: "Imported Module",
        description: "Imported description",
        lessons: originalCourses[0].lessons.map((lesson) => ({
          ...lesson,
          id: `${lesson.id}-imported`,
          title: `${lesson.title} (Imported)`,
        })),
      },
    ];

    courseRepository.importCourses(JSON.stringify(nextCourses, null, 2));

    expect(courseRepository.getAll()).toHaveLength(1);
    expect(courseRepository.getAll()[0].title).toBe("Imported Module");
    expect(courseRepository.getSummary()).toEqual({
      moduleCount: 1,
      lessonCount: nextCourses[0].lessons.length,
    });
  });

  it("stores lesson notifications in the student bucket even when an instructor creates them", () => {
    login("dominic@dccloudacademy.com");

    addNotification({
      id: "notification-1",
      title: "New Lesson Available",
      message: "Week 3 is now available.",
      type: "lesson",
      read: false,
      createdAt: new Date().toISOString(),
    });

    expect(JSON.parse(localStorage.getItem("cloud-academy-notifications-student") ?? "[]")).toHaveLength(1);
    expect(getNotifications()).toHaveLength(1);
    expect(localStorage.getItem("cloud-academy-notifications-user-001")).toBeNull();
  });
});

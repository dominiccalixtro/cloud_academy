import { beforeEach, describe, expect, it } from "vitest";

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
});

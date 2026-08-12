import { beforeEach, describe, expect, it } from "vitest";

import type { Quiz } from "../types";
import { quizRepository } from "./quiz.repository";

describe("quizRepository", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("seeds quizzes and persists additions", () => {
    const quiz: Quiz = {
      id: "quiz-custom",
      title: "Custom quiz",
      description: "A managed quiz",
      questions: [],
    };

    const seededCount = quizRepository.getAll().length;
    quizRepository.add(quiz);

    expect(quizRepository.getAll()).toHaveLength(seededCount + 1);
    expect(quizRepository.getById(quiz.id)).toEqual(quiz);
  });
});

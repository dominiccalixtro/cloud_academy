import {
  getProgress,
} from "../../progress/services/progress.service";

import {
  getQuizProgress,
} from "../../quiz/services/quiz.service";

interface Achievement {
  id: string;
  title: string;
  description: string;
  unlocked: boolean;
}

export function getAchievements(): Achievement[] {
  const progress = getProgress();

  const quizProgress = getQuizProgress();

  return [
    {
      id: "first-lesson",
      title: "🏆 First Lesson Complete",
      description:
        "Completed your first lesson.",
      unlocked:
        progress.completed >= 1,
    },

    {
      id: "first-quiz",
      title: "🏆 First Quiz Passed",
      description:
        "Completed your first assessment.",
      unlocked:
        quizProgress.completed >= 1,
    },

    {
      id: "halfway",
      title: "🏆 Halfway There",
      description:
        "Reached 50% learning progress.",
      unlocked:
        progress.percentage >= 50,
    },

    {
      id: "foundations",
      title:
        "🏆 Cloud Foundations Complete",
      description:
        "Completed all foundation lessons.",
      unlocked:
        progress.percentage === 100,
    },
  ];
}
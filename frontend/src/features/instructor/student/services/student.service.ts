import { users } from "../../../auth/data/users";
import { getAllLessons } from "../../../bootcamp/services/course.repository";

export function getStudents() {
  return users.filter((user) => user.role === "student");
}

export function getStudentProgress(userId: string) {
  const lessons = localStorage.getItem(`cloud-academy-progress-${userId}`);
  const quizzes = localStorage.getItem(`cloud-academy-quiz-results-${userId}`);
  const completedLessons = lessons ? (JSON.parse(lessons) as string[]).length : 0;
  const completedQuizzes = quizzes
    ? Object.keys(JSON.parse(quizzes) as Record<string, number>).length
    : 0;
  const totalLessons = getAllLessons().length;

  return {
    lessons: completedLessons,
    totalLessons,
    quizzes: completedQuizzes,
    completionRate:
      totalLessons === 0 ? 0 : Math.round((completedLessons / totalLessons) * 100),
  };
}

export function resetStudentProgress(userId: string) {
  localStorage.removeItem(`cloud-academy-progress-${userId}`);
  localStorage.removeItem(`cloud-academy-quiz-results-${userId}`);
}

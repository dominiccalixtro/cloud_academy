import { getAllLessons } from "../../bootcamp/services/course.repository";
import { getCurrentUser } from "../../auth/services/auth.service";
import { addNotification } from "../../notifications/services/notification.service";

function getStorageKey() {

  const user = getCurrentUser();

  if (!user) {
    return "cloud-academy-progress";
  }

  return `cloud-academy-progress-${user.id}`;
}



function getStoredLessons(): string[] {

  const data =
    localStorage.getItem(
      getStorageKey()
    );


  if (!data) {
    return [];
  }


  return JSON.parse(data);
}



function saveLessons(
  lessons: string[]
) {

  localStorage.setItem(
    getStorageKey(),
    JSON.stringify(lessons)
  );

}



export function getCompletedLessons() {

  return getStoredLessons();

}



export function isLessonCompleted(
  id: string
) {

  return getStoredLessons()
    .includes(id);

}



export function toggleLessonCompletion(id: string) {
  const completed = getStoredLessons();

  if (completed.includes(id)) {
    saveLessons(completed.filter((lessonId) => lessonId !== id));
    return;
  }

  completed.push(id);
  saveLessons(completed);

  const lesson = getAllLessons().find((item) => item.id === id);

  if (!lesson) {
    return;
  }

  addNotification({
    id: crypto.randomUUID(),
    title: "Lesson Completed",
    message: `You completed ${lesson.title}.`,
    type: "lesson",
    read: false,
    createdAt: new Date().toISOString(),
  });

  addNotification({
    id: crypto.randomUUID(),
    title: "Quiz Available",
    message: `The quiz for ${lesson.title} is now available.`,
    type: "quiz",
    read: false,
    createdAt: new Date().toISOString(),
  });

  window.dispatchEvent(new Event("lessonCompleted"));
}



export function clearProgress() {

  localStorage.removeItem(
    getStorageKey()
  );

}



export function getProgress() {

  const lessons = getAllLessons();


  const total =
    lessons.length;


  const completed =
    getCompletedLessons()
      .length;



  return {

    total,

    completed,

    percentage:
      total === 0
        ? 0
        :
        Math.round(
          (completed / total) * 100
        ),

  };

}



export function getLessonStatus(
  id: string
) {

  return isLessonCompleted(id)
    ? "completed"
    : "available";

}



export function getNextLesson() {

  const lessons = getAllLessons();


  const completed =
    getCompletedLessons();



  return (
    lessons.find(
      (lesson) =>
        !completed.includes(
          lesson.id
        )
    ) ?? null
  );

}

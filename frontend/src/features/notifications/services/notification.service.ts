import { getCurrentUser } from "../../auth/services/auth.service";
import type { Notification } from "../types/notification.types";

const STORAGE_KEY = "cloud-academy-notifications";

function getStudentStorageKey() {
  const currentUser = getCurrentUser();

  if (currentUser && currentUser.role === "student") {
    return `${STORAGE_KEY}-${currentUser.id}`;
  }

  return `${STORAGE_KEY}-student`;
}

export function getNotifications(): Notification[] {
  const data = localStorage.getItem(getStudentStorageKey());

  if (!data) {
    return [];
  }

  try {
    return JSON.parse(data) as Notification[];
  } catch {
    return [];
  }
}

export function addNotification(notification: Notification) {
  const notifications = getNotifications();
  notifications.unshift(notification);

  localStorage.setItem(getStudentStorageKey(), JSON.stringify(notifications));

  window.dispatchEvent(new Event("notificationsUpdated"));

  if (notification.type === "lesson") {
    window.dispatchEvent(new Event("lessonCreated"));
  }

  if (notification.type === "quiz") {
    window.dispatchEvent(new Event("quizCompleted"));
  }
}

export function markNotificationsAsRead() {
  const notifications = getNotifications();

  const updated = notifications.map((notification) => ({
    ...notification,
    read: true,
  }));

  localStorage.setItem(getStudentStorageKey(), JSON.stringify(updated));
  window.dispatchEvent(new Event("notificationsUpdated"));
}

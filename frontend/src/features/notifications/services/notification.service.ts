import type {
  Notification,
} from "../types/notification.types";


const STORAGE_KEY =
  "cloud-academy-notifications";



export function getNotifications(): Notification[] {

  const data =
    localStorage.getItem(
      STORAGE_KEY
    );


  if (!data) {

    return [];

  }


  return JSON.parse(data);

}





export function addNotification(
  notification: Notification
) {

  const notifications =
    getNotifications();



  notifications.unshift(
    notification
  );



  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(
      notifications
    )
  );

}





export function markNotificationsAsRead() {

  const notifications =
    getNotifications();



  const updated =
    notifications.map(
      notification => ({

        ...notification,

        read: true,

      })
    );



  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(
      updated
    )
  );


}
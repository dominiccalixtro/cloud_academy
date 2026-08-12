import {
  useEffect,
  useState,
} from "react";

import {
  getNotifications,
  markNotificationsAsRead,
} from "../services/notification.service";



export function useNotifications() {


  const [
    notifications,
    setNotifications
  ] =
  useState(
    getNotifications()
  );




  useEffect(() => {


    function refreshNotifications() {

      setNotifications(
        getNotifications()
      );

    }



    window.addEventListener(
      "quizCompleted",
      refreshNotifications
    );



    window.addEventListener(
      "lessonCreated",
      refreshNotifications
    );



    return () => {

      window.removeEventListener(
        "quizCompleted",
        refreshNotifications
      );


      window.removeEventListener(
        "lessonCreated",
        refreshNotifications
      );

    };


  }, []);






  const unreadCount =
    notifications.filter(
      notification =>
        !notification.read
    ).length;






  function clearNotifications() {


    markNotificationsAsRead();



    setNotifications(
      getNotifications()
    );

  }






  return {

    notifications,

    unreadCount,

    markAllAsRead:
      clearNotifications,

  };

}
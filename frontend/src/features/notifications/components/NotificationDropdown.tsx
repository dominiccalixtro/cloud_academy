import {
  useState,
} from "react";

import {
  Bell,
  BookOpen,
  CheckCircle,
} from "lucide-react";


import {
  useNotifications,
} from "../hooks/useNotifications";



export function NotificationDropdown() {


  const [
    open,
    setOpen,
  ] = useState(false);



  const {
    notifications,
    unreadCount,
    markAllAsRead,
  } = useNotifications();




  function handleOpen() {

    setOpen(
      !open
    );


    markAllAsRead();

  }




  return (

    <div
      className="
        relative
      "
    >


      {/* Bell Button */}

      <button
        onClick={handleOpen}
        className="
          relative
          rounded-lg
          p-2
          text-slate-300
          transition
          hover:bg-slate-800
        "
      >

        <Bell size={18} />



        {
          unreadCount > 0 && (

            <span
              className="
                absolute
                -right-1
                -top-1
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-full
                bg-orange-500
                text-xs
                font-bold
                text-slate-900
              "
            >
              {unreadCount}
            </span>

          )
        }


      </button>





      {
        open && (

          <div
            className="
              absolute
              right-0
              mt-3
              w-80
              rounded-xl
              border
              border-slate-800
              bg-slate-900
              p-4
              shadow-xl
              z-50
            "
          >


            <h3
              className="
                mb-4
                text-sm
                font-semibold
                text-white
              "
            >
              Notifications
            </h3>




            {
              notifications.length === 0 ? (

                <p
                  className="
                    text-sm
                    text-slate-400
                  "
                >
                  No notifications
                </p>


              ) : (


                <div
                  className="
                    space-y-3
                  "
                >


                  {
                    notifications.map(
                      notification => (

                        <div

                          key={
                            notification.id
                          }

                          className="
                            flex
                            gap-3
                            rounded-lg
                            bg-slate-950
                            p-3
                          "

                        >


                          {/* Icon */}

                          <div>

                            {
                              notification.type === "lesson" ? (

                                <BookOpen
                                  size={18}
                                  className="
                                    text-orange-400
                                  "
                                />


                              ) : (

                                <CheckCircle
                                  size={18}
                                  className="
                                    text-green-400
                                  "
                                />

                              )
                            }

                          </div>





                          {/* Content */}

                          <div>

                            <p
                              className="
                                text-sm
                                font-semibold
                                text-white
                              "
                            >
                              {
                                notification.title
                              }
                            </p>


                            <p
                              className="
                                mt-1
                                text-xs
                                text-slate-400
                              "
                            >
                              {
                                notification.message
                              }
                            </p>


                            <p
                              className="
                                mt-2
                                text-xs
                                text-slate-500
                              "
                            >
                              {
                                notification.createdAt
                              }
                            </p>


                          </div>


                        </div>

                      )
                    )

                  }


                </div>

              )

            }


          </div>

        )
      }


    </div>

  );

}
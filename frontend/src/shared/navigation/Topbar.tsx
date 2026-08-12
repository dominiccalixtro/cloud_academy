import {
  Search,
} from "lucide-react";

import { useAuth } from "../../features/auth/context/AuthContext";

import {
  NotificationDropdown,
} from "../../features/notifications/components/NotificationDropdown";


export function Topbar() {

  const {
    user,
  } = useAuth();


  return (

    <header
      className="
        flex
        items-center
        justify-between
        border-b
        border-slate-800
        bg-slate-900
        px-6
        py-4
      "
    >


      {/* Left */}

      <div>

        <h2
          className="
            text-lg
            font-semibold
            text-orange-400
          "
        >
          Cloud Academy
        </h2>

      </div>




      {/* Right */}

      <div
        className="
          flex
          items-center
          gap-3
        "
      >


        {/* Search */}

        <button
          className="
            rounded-lg
            p-2
            text-slate-300
            transition
            hover:bg-slate-800
          "
        >
          <Search size={18} />
        </button>




        {/* Notifications */}

        <NotificationDropdown />





        {/* User Profile */}

        {user && (

          <div
            className="
              flex
              items-center
              gap-3
              rounded-lg
              border
              border-slate-800
              bg-slate-950
              px-3
              py-2
            "
          >


            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-orange-500
                font-semibold
                text-slate-900
              "
            >
              {user.avatar}
            </div>




            <div>

              <p
                className="
                  text-sm
                  font-medium
                  text-white
                "
              >
                {user.name}
              </p>


              <p
                className="
                  text-xs
                  capitalize
                  text-slate-400
                "
              >
                {user.role}
              </p>


            </div>


          </div>

        )}


      </div>


    </header>

  );

}
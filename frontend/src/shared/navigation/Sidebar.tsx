import {
  BookOpen,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  User,
  BookMarked,
  ClipboardList,
  Users,
  type LucideIcon,
} from "lucide-react";

import { NavigationItem } from "./NavigationItem";

import { useAuth } from "../../features/auth/context/AuthContext";


interface Navigation {
  label: string;
  icon: LucideIcon;
  href: string;
}



const studentNavigation: Navigation[] = [

  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },

  {
    label: "Bootcamp",
    icon: GraduationCap,
    href: "/bootcamp",
  },

  {
    label: "Resources",
    icon: BookOpen,
    href: "/resources",
  },

  {
    label: "Profile",
    icon: User,
    href: "/profile",
  },

];



const instructorNavigation: Navigation[] = [

  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },

  {
    label: "Courses",
    icon: BookMarked,
    href: "/course-management",
  },

  {
    label: "Quizzes",
    icon: ClipboardList,
    href: "/quiz-management",
  },

  {
    label: "Students",
    icon: Users,
    href: "/student-management",
  },

  {
    label: "Profile",
    icon: User,
    href: "/profile",
  },

];



export function Sidebar() {

  const {
    user,
    signOut,
  } = useAuth();



  const navigation =
    user?.role === "instructor"
      ? instructorNavigation
      : studentNavigation;



  return (

    <aside
      className="
        fixed
        left-0
        top-0
        flex
        h-screen
        w-64
        flex-col
        border-r
        border-slate-800
        bg-slate-950
      "
    >


      {/* Logo */}

      <div
        className="
          border-b
          border-slate-800
          p-6
        "
      >

        <h1
          className="
            text-2xl
            font-bold
            tracking-tight
            text-orange-400
          "
        >
          Cloud Academy
        </h1>


        <p
          className="
            mt-1
            text-xs
            uppercase
            tracking-widest
            text-slate-400
          "
        >
          Learn • Build • Deploy
        </p>


      </div>




      {/* Navigation */}

      <nav
        className="
          flex-1
          px-4
          py-6
        "
      >

        <div
          className="
            space-y-2
          "
        >

          {
            navigation.map((item) => (

              <NavigationItem

                key={item.label}

                label={item.label}

                icon={item.icon}

                href={item.href}

              />

            ))
          }


        </div>


      </nav>




      {/* Logout */}

      <div
        className="
          border-t
          border-slate-800
          p-4
        "
      >

        <button

          onClick={signOut}

          className="
            flex
            w-full
            items-center
            gap-3
            rounded-xl
            px-4
            py-3
            text-red-400
            transition
            hover:bg-red-500/10
          "

        >

          <LogOut size={18}/>

          Logout


        </button>


      </div>


    </aside>

  );

}
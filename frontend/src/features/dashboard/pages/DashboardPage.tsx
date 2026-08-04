import { useAuth } from "../../auth/context/AuthContext";

import { StudentDashboard } from "../../student/pages/StudentDashboard";
import { InstructorDashboard } from "../../instructor/pages/InstructorDashboard";


export function DashboardPage() {

  const {
    user,
  } = useAuth();


  if (!user) {
    return (
      <div className="
        rounded-2xl
        border
        border-slate-800
        bg-slate-900
        p-6
      ">
        <p className="text-slate-400">
          No user logged in.
        </p>
      </div>
    );
  }


  if (user.role === "instructor") {
    return (
      <InstructorDashboard />
    );
  }


  return (
    <StudentDashboard />
  );
}
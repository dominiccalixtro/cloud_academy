import { useAuth } from "../../auth/context/AuthContext";


export function WelcomeCard() {

  const {
    user,
  } = useAuth();


  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

      <h1 className="text-3xl font-bold">
        Welcome back, {user?.name ?? "User"} 👋
      </h1>


      <p className="mt-2 text-slate-400">
        {user?.role === "instructor"
          ? "Manage your Cloud Academy courses and students."
          : "Continue your Cloud Learning journey."
        }
      </p>

    </div>
  );
}
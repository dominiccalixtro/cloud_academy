import { useAuth } from "../../auth/context/AuthContext";


export function ProfileHeader() {

  const { user } = useAuth();


  if (!user) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-slate-400">
          No user logged in.
        </p>
      </div>
    );
  }


  const avatarIsImage = typeof user.avatar === "string" && user.avatar.includes(".");

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <div className="flex items-center gap-5">


        <div
          className="
            flex
            h-20
            w-20
            items-center
            justify-center
            overflow-hidden
            rounded-full
            border-2
            border-orange-500/60
            bg-orange-500
            text-3xl
            font-bold
            text-slate-950
          "
        >
          {avatarIsImage ? (
            <img
              src={user.avatar}
              alt={user.name}
              className="h-full w-full object-cover"
            />
          ) : (
            user.avatar
          )}
        </div>


        <div>

          <h1 className="text-3xl font-bold text-white">
            {user.name}
          </h1>


          <p className="mt-1 font-medium text-orange-400 capitalize">
            {user.role}
          </p>


          <p className="mt-1 text-slate-400">
            {user.email}
          </p>


          <p className="mt-2 text-sm text-slate-500">
            Member since August 2026
          </p>


        </div>


      </div>

    </div>
  );
}
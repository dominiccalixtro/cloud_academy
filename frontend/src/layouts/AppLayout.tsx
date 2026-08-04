import { Outlet } from "react-router-dom";

import { Sidebar } from "../shared/navigation/Sidebar";
import { Topbar } from "../shared/navigation/Topbar";


export function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">

      {/* Sidebar */}
      <Sidebar />


      {/* Main Content */}
      <div className="ml-64 flex min-h-screen flex-col">


        {/* Top Navigation */}
        <Topbar />


        {/* Page Content */}
        <main className="flex-1 p-8">

          <Outlet />

        </main>


      </div>


    </div>
  );
}
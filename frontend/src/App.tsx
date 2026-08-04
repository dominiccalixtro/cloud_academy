import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { AppLayout } from "./layouts/AppLayout";

import { DashboardPage } from "./features/dashboard/pages/DashboardPage";
import { BootcampPage } from "./features/bootcamp/pages/BootcampPage";
import { LessonPage } from "./features/lesson/pages/LessonPage";

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          <Route path="/dashboard" element={<DashboardPage />} />

          <Route path="/bootcamp" element={<BootcampPage />} />

          <Route path="/lesson/:lessonId" element={<LessonPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
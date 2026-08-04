import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { AppLayout } from "./layouts/AppLayout";

import { DashboardPage } from "./features/dashboard/pages/DashboardPage";
import { BootcampPage } from "./features/bootcamp/pages/BootcampPage";
import { LessonPage } from "./features/lesson/pages/LessonPage";
import { QuizPage } from "./features/quiz/pages/QuizPage";
import { ProfilePage } from "./features/profile/pages/ProfilePage";
import { LoginPage } from "./features/auth/pages/LoginPage";

import { CourseManagementPage } from "./features/instructor/pages/CourseManagementPage";

import { ProtectedRoute } from "./features/auth/components/ProtectedRoute";


function App() {

  return (

    <BrowserRouter>

      <Routes>


        {/* Public Routes */}

        <Route
          path="/login"
          element={<LoginPage />}
        />



        {/* Protected Application Routes */}

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >



          <Route
            index
            element={
              <Navigate
                to="/dashboard"
                replace
              />
            }
          />



          <Route
            path="dashboard"
            element={<DashboardPage />}
          />



          <Route
            path="bootcamp"
            element={<BootcampPage />}
          />



          <Route
            path="lesson/:lessonId"
            element={<LessonPage />}
          />



          <Route
            path="quiz/:quizId"
            element={<QuizPage />}
          />



          <Route
            path="profile"
            element={<ProfilePage />}
          />




          {/* Instructor Routes */}

          <Route
            path="instructor/courses"
            element={<CourseManagementPage />}
          />



        </Route>





        {/* Fallback */}

        <Route
          path="*"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />


      </Routes>


    </BrowserRouter>

  );
}


export default App;
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";


import { AppLayout } from "./layouts/AppLayout";


// Student pages
import { DashboardPage } from "./features/dashboard/pages/DashboardPage";
import { BootcampPage } from "./features/bootcamp/pages/BootcampPage";
import { LessonPage } from "./features/lesson/pages/LessonPage";
import { QuizPage } from "./features/quiz/pages/QuizPage";
import { ProfilePage } from "./features/profile/pages/ProfilePage";


// Auth
import { LoginPage } from "./features/auth/pages/LoginPage";
import { ProtectedRoute } from "./features/auth/components/ProtectedRoute";


// Instructor pages
import { CourseManagementPage } from "./features/instructor/pages/CourseManagementPage";
import { QuizManagementPage } from "./features/instructor/quiz/pages/QuizManagementPage";
import { StudentManagementPage } from "./features/instructor/student/pages/StudentManagementPage";



function App() {

  return (

    <BrowserRouter>

      <Routes>


        {/* Public Route */}

        <Route
          path="/login"
          element={
            <LoginPage />
          }
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






          {/* =====================
              Student Routes
          ====================== */}


          <Route

            path="dashboard"

            element={
              <DashboardPage />
            }

          />



          <Route

            path="bootcamp"

            element={
              <BootcampPage />
            }

          />



          <Route

            path="lesson/:lessonId"

            element={
              <LessonPage />
            }

          />



          <Route

            path="quiz/:quizId"

            element={
              <QuizPage />
            }

          />



          <Route

            path="profile"

            element={
              <ProfilePage />
            }

          />






          {/* =====================
              Instructor Routes
          ====================== */}



          <Route

            path="course-management"

            element={
              <CourseManagementPage />
            }

          />



          <Route

            path="quiz-management"

            element={
              <QuizManagementPage />
            }

          />



          <Route

            path="student-management"

            element={
              <StudentManagementPage />
            }

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
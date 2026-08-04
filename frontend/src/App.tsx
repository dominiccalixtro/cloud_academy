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
import { ResourcesPage } from "./features/resources/pages/ResourcesPage";


// Auth
import { LoginPage } from "./features/auth/pages/LoginPage";
import { ProtectedRoute } from "./features/auth/components/ProtectedRoute";
import { RoleProtectedRoute } from "./features/auth/components/RoleProtectedRoute";



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








        {/* Protected Application */}


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
              Shared Routes
          ====================== */}



          <Route

            path="dashboard"

            element={

              <DashboardPage />

            }

          />





          <Route

            path="profile"

            element={

              <ProfilePage />

            }

          />





          <Route

            path="resources"

            element={

              <ResourcesPage />

            }

          />









          {/* =====================
              Student Routes
          ====================== */}



          <Route

            path="bootcamp"

            element={

              <RoleProtectedRoute

                role="student"

              >

                <BootcampPage />

              </RoleProtectedRoute>

            }

          />






          <Route

            path="lesson/:lessonId"

            element={

              <RoleProtectedRoute

                role="student"

              >

                <LessonPage />

              </RoleProtectedRoute>

            }

          />








          <Route

            path="quiz/:quizId"

            element={

              <RoleProtectedRoute

                role="student"

              >

                <QuizPage />

              </RoleProtectedRoute>

            }

          />









          {/* =====================
              Instructor Routes
          ====================== */}





          <Route

            path="course-management"

            element={

              <RoleProtectedRoute

                role="instructor"

              >

                <CourseManagementPage />

              </RoleProtectedRoute>

            }

          />








          <Route

            path="quiz-management"

            element={

              <RoleProtectedRoute

                role="instructor"

              >

                <QuizManagementPage />

              </RoleProtectedRoute>

            }

          />








          <Route

            path="student-management"

            element={

              <RoleProtectedRoute

                role="instructor"

              >

                <StudentManagementPage />

              </RoleProtectedRoute>

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
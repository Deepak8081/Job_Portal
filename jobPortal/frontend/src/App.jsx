import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import JobDescription from "./components/JobDescription";
import Companies from "./components/admin/Companies";
import CompanyCreate from "./components/admin/CompanyCreate";
import CompanySetup from "./components/admin/CompanySetup";
import AdminJobs from "./components/admin/AdminJobs";
import PostJob from "./components/admin/PostJob";
import EditJob from "./components/admin/EditJob";
import Applicants from "./components/admin/Applicants";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import { ThemeProvider } from "./components/ThemeProvider";
// import ProtectedRoute from './components/ProtectRoute'
import ProtectRoute from "./components/ProtectRoute";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },

  // Protected user routes
  {
    element: <ProtectRoute />,
    children: [
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/description/:id",
        element: <JobDescription />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },

      // Admin routes
      {
        path: "/admin/companies",
        element: <Companies />,
      },
      {
        path: "/admin/companies/create",
        element: <CompanyCreate />,
      },
      {
        path: "/admin/companies/:id",
        element: <CompanySetup />,
      },
      {
        path: "/admin/jobs",
        element: <AdminJobs />,
      },
      {
        path: "/admin/jobs/create",
        element: <PostJob />,
      },
      {
      path:"/admin/jobs/edit/:id",
        element:<EditJob />
      },
      {
        path: "/admin/jobs/:id/applicants",
        element: <Applicants />,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={appRouter} />
      </ThemeProvider>
    </div>
  );
}

export default App;

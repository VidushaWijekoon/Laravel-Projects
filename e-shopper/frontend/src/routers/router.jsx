import { createBrowserRouter } from "react-router-dom";

// Frontend Pages
import GuestLayout from "../layouts/GuestLayout";
import Login from "../pages/frontend/Login/Login";
import Register from "../pages/frontend/Register/Register";
import FrontendHomePage from "../pages/frontend/Home/Home";
import ProtectedLayout from "../layouts/ProtectedLayout";

// Protected Routers in Dashboard
import DashboardHomePage from "../pages/dashboard/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        index: true,
        element: <FrontendHomePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <ProtectedLayout />,
    children: [
      {
        index: true,
        element: <DashboardHomePage />,
      },
    ],
  },
]);

export default router;

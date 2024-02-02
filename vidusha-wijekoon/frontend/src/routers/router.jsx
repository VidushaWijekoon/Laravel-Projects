import { createBrowserRouter } from "react-router-dom";

import AdminDashboard from "../layouts/admin_dashboard";
import GuestLayout from "../layouts/guess_layout";

import GuestHomePage from "../pages/guest/home/Home";
import AdminHomePage from "../pages/admin/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        index: true,
        element: <GuestHomePage />,
      },
    ],
  },
  {
    path: "admin/dashboard",
    element: <AdminDashboard />,
    children: [
      {
        index: true,
        element: <AdminHomePage />,
      },
    ],
  },
]);

export default router;

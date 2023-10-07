import { createBrowserRouter } from "react-router-dom";

import FrontendMainLayout from "../layouts/frontend/FrontendMainLayout";
import FrontendHomePage from "../pages/frontend/Home/Home";

import DashboardMainLayout from "../layouts/dashboard/DashboardMainLayout";
import DashboardHomePage from "../pages/dashboard/Home/Home";
import NotFound from "../pages/frontend/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontendMainLayout />,
    children: [
      {
        index: true,
        element: <FrontendHomePage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <DashboardMainLayout />,
    children: [
      {
        index: true,
        element: <DashboardHomePage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;

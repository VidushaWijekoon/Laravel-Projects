import { createBrowserRouter } from "react-router-dom";

// Frontend Pages
import GuestLayout from "../layouts/GuestLayout";
import Login from "../pages/frontend/Login/Login";
import Register from "../pages/frontend/Register/Register";
import FrontendHomePage from "../pages/frontend/Home/Home";
import ProtectedLayout from "../layouts/ProtectedLayout";
import Cart from "../pages/frontend/Cart/Cart";
import Wishlist from "../pages/frontend/Wishlist/Wishlist";

// Protected Routers in Dashboard
import DashboardHomePage from "../pages/dashboard/Home/Home";
import NotFound from "../pages/frontend/NotFound/NotFound";

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
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "*",
        element: <NotFound />,
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

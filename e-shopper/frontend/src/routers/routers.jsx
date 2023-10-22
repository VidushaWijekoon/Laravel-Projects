import { createBrowserRouter } from "react-router-dom";

// Layouts
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

// Frontend Pages
import FrontendHomePage from "../pages/frontend/Home/Home";
import Products from "../pages/frontend/Products/Products";
import Category from "../pages/frontend/Category/Category";
import AboutUs from "../pages/frontend/AboutUs/AboutUs";
import ReturnPolicy from "../pages/frontend/ReturnPolicy/ReturnPolicy";
import ContactUs from "../pages/frontend/ContactUs/ContactUs";
import TermAndConditions from "../pages/frontend/TermAndConditions/TermAndConditions";
import Cart from "../pages/frontend/Cart/Cart";
import Wishlist from "../pages/frontend/Wishlist/Wishlist";
import SellWithUs from "../pages/frontend/SellWithUs/SellWithUs";
import NotFound from "../pages/frontend/NotFound/NotFound";

// Dashboard
import AdminDashboardHomePage from "../pages/dashboard/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <FrontendHomePage />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/return-policy",
        element: <ReturnPolicy />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/term-and-conditions",
        element: <TermAndConditions />,
      },
      {
        path: "/sell-with-us",
        element: <SellWithUs />,
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
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <AdminDashboardHomePage />,
      },
    ],
  },
]);

export default router;

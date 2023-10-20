import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Products from "../pages/Products/Products";
import AboutUs from "../pages/AboutUs/AboutUs";
import ReturnPolicy from "../pages/ReturnPolicy/ReturnPolicy";
import Cart from "../pages/Cart/Cart";
import ContactUs from "../pages/ContactUs/ContactUs";
import TermAndConditions from "../pages/TermAndConditions/TermAndConditions";
import SellWithUs from "../pages/SellWithUs/SellWithUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
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
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home/Home";
import Register from "@/pages/home/Register/Register";
import CategoryPage from "@/pages/home/CategoryPage/CategoryPage";
import PromotionalOffer from "@/pages/home/PromotionalOffer/PromotionalOffer";
import Vip from "@/pages/home/Vip/Vip";
import Referral from "@/pages/home/Referral/Referral";
import Login from "@/pages/home/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/category/:category",
        element: <CategoryPage />,
      },
      {
        path: "/promotional-offer",
        element: <PromotionalOffer />,
      },
      {
        path: "/vip",
        element: <Vip />,
      },
      {
        path: "/referral",
        element: <Referral />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;

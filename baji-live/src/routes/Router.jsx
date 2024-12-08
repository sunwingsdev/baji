import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home/Home";
import Register from "@/pages/home/Register/Register";
import CategoryPage from "@/pages/home/CategoryPage/CategoryPage";
import PromotionalOffer from "@/pages/home/PromotionalOffer/PromotionalOffer";
import Vip from "@/pages/home/Vip/Vip";
import Referral from "@/pages/home/Referral/Referral";
import Login from "@/pages/home/Login/Login";
import Profile from "@/pages/home/Profile/Profile";
import Deposit from "@/pages/home/Deposit/Deposit";
import ProfileHome from "@/pages/home/ProfileHome/ProfileHome";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "@/layouts/DashboardLayout";

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
      {
        path: "/profile",
        element: <Profile />,
        children: [
          {
            path: "",
            element: (
              <PrivateRoute>
                <ProfileHome />
              </PrivateRoute>
            ),
          },
          {
            path: "deposit",
            element: <Deposit />,
          },
        ],
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;

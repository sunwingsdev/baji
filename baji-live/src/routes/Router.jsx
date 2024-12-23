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
import Users from "@/pages/dashboard/users/Users";
import DashboardDeposits from "@/pages/dashboard/DashboardDeposits/DashboardDeposits";
import WithdrawsHistory from "@/pages/dashboard/WithdrawsHistory/WithdrawsHistory";
import AdminRoute from "./AdminRoute";
import DashboardHome from "@/components/dashboard/DashboardHome";
import AgentTree from "@/pages/dashboard/AgentTree/AgentTree";
import Affilitors from "@/pages/dashboard/Affilitor/Affilitors";
import Games from "./../pages/dashboard/Games/Games";
import GamesApi from "@/pages/dashboard/GamesApi/GamesApi";
import HomeControl from "@/pages/dashboard/HomeControl/HomeControl";
import AdminLogin from "@/pages/home/AdminLogin/AdminLogin";
import AllUsers from "@/pages/dashboard/users/AllUsers";
import UserProfile from "@/pages/dashboard/UserProfile/UserProfile";
import AgentProfile from "@/pages/dashboard/AgentProfile/AgentProfile";
import GameCategories from "@/pages/dashboard/GameCategori/GameCategories";
import FontendSlider from "@/pages/dashboard/Fontend/FontendSlider";

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
    element: (
      <AdminRoute>
        <DashboardLayout />
      </AdminRoute>
    ),
    children: [
      {
        path: "",
        element: <DashboardHome />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "userProfile",
        element: <UserProfile />,
      },
      {
        path: "agentProfile",
        element: <AgentProfile />,
      },
      {
        path: "allusers",
        element: <AllUsers />,
      },
      {
        path: "gameCategories",
        element: <GameCategories />,
      },
      {
        path: "agent",
        element: <AgentTree />,
      },
      {
        path: "affilitors",
        element: <Affilitors />,
      },
      {
        path: "games",
        element: <Games />,
      },
      {
        path: "gamesApi",
        element: <GamesApi />,
      },
      {
        path: "deposits",
        element: <DashboardDeposits />,
      },
      {
        path: "withdraws",
        element: <WithdrawsHistory />,
      },
      {
        path: "fontendslider",
        element: <FontendSlider />,
      },
      {
        path: "home-controls",
        element: <HomeControl />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin-login",
    element: <AdminLogin />,
  },
]);

export default router;

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
import Checkout from "@/pages/home/Checkout/Checkout";
import AllUsers from "@/pages/dashboard/users/AllUsers";
import UserProfile from "@/pages/dashboard/UserProfile/UserProfile";
import AgentProfile from "@/pages/dashboard/AgentProfile/AgentProfile";
import GameCategories from "@/pages/dashboard/GameCategori/GameCategories";
import FontendSlider from "@/pages/dashboard/Fontend/FontendSlider";
import PromotionsOffer from "@/pages/dashboard/Fontend/PromotionsOffer";
import Transection from "@/pages/Transections/Transection";
import DemoGame from "@/pages/home/DemoGame/DemoGame";
import Notice from "@/pages/dashboard/Fontend/Notice";
import Sponshorship from "@/pages/dashboard/Fontend/Sponshorship";
import ExchangeLayout from "@/layouts/ExchangeLayout";
import ExchangeMiddleContent from "@/components/exchange-page/ExchangeMiddleContent";
import InPlay from "@/pages/home/ExchangePage/InPlay";
import MultiMarkets from "@/pages/home/ExchangePage/MultiMarkets";
import Cricket from "@/pages/home/ExchangePage/Cricket";
import Soccer from "@/pages/home/ExchangePage/Soccer";
import Tennis from "@/pages/home/ExchangePage/Tennis";
import Esoccer from "@/pages/home/ExchangePage/Esoccer";
import BblWinner from "@/pages/home/ExchangePage/BblWinner";
import Kabaddi from "@/pages/home/ExchangePage/Kabaddi";
import Result from "@/pages/home/ExchangePage/Result";

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
        path: "/category/demo/:id",
        element: <DemoGame />,
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
        path: "/exchange-page",
        element: <ExchangeLayout />,
        children: [
          { path: "", element: <ExchangeMiddleContent /> },
          { path: "in-play", element: <InPlay /> },
          { path: "multi-markets", element: <MultiMarkets /> },
          { path: "cricket", element: <Cricket /> },
          { path: "soccer", element: <Soccer /> },
          { path: "tennis", element: <Tennis /> },
          { path: "e-soccer", element: <Esoccer /> },
          { path: "bbl-winner", element: <BblWinner /> },
          { path: "kabaddi", element: <Kabaddi /> },
          { path: "result", element: <Result /> },
        ],
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
          {
            path: "transaction",
            element: <Transection />,
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
        element: <AllUsers />,
      },
      {
        path: "userProfile",
        element: <UserProfile />,
      },
      {
        path: "agentProfile",
        element: <AgentProfile />,
      },
      // {
      //   path: "allusers",
      //   element: <AllUsers />,
      // },
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
        path: "gamesApi/:id",
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
        path: "promotionsoffer",
        element: <PromotionsOffer />,
      },
      {
        path: "notice",
        element: <Notice />,
      },
      {
        path: "sponsorship",
        element: <Sponshorship />,
      },
      {
        path: "home-controls",
        element: <HomeControl />,
      },
    ],
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <AdminLogin />,
  },
]);

export default router;

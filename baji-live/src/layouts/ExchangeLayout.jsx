import ExchangeLeftSideMenu from "@/components/exchange-page/ExchangeLeftSideMenu";
import ExchangeRightSideContent from "@/components/exchange-page/ExchangeRightSideContent";
import ExchangeTopMenu from "@/components/exchange-page/ExchangeTopMenu";
import { Outlet } from "react-router-dom";

const ExchangeLayout = () => {
  return (
    <div>
      <ExchangeTopMenu />

      <div className="flex gap-4 px-4 mt-0.5 h-screen bg-[#eee]">
        <ExchangeLeftSideMenu />
        <div className="w-[60%]">
          <Outlet />
        </div>

        <ExchangeRightSideContent />
      </div>
    </div>
  );
};

export default ExchangeLayout;

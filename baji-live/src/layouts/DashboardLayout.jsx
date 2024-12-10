import DashboardMobilMenu from "@/components/dashboard/dashboardSidebar/DashboardMobilMenu";
import DashboardSidebar from "@/components/dashboard/dashboardSidebar/DashboardSidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex">
      {/* DashboardSidebar */}
      <DashboardSidebar open={open} setOpen={setOpen} />
      <div
        className={`flex-1 h-screen overflow-y-auto flex flex-col duration-300 ${
          !open ? "md:pl-20" : "md:pl-72"
        }`}
      >
        <DashboardMobilMenu open={open} />
        <div className="mt-[62px] md:mt-20">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

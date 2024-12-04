import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";
import { useEffect, useState } from "react";
import MenuMobile from "@/components/home/MenuMobile/MenuMobile";

const MainLayout = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hideCommonComponents = isMobile && location.pathname === "/register";

  return (
    <div className="relative">
      {!hideCommonComponents && <Navbar />}
      <Outlet />
      {!hideCommonComponents && <Footer />}
      {!hideCommonComponents && <MenuMobile />}
    </div>
  );
};

export default MainLayout;

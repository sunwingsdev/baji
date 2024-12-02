import { Link, Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { LuUserCircle2 } from "react-icons/lu";
import { PiWallet } from "react-icons/pi";
import { RiIdCardLine } from "react-icons/ri";
import { IoMdHome } from "react-icons/io";

const MainLayout = () => {
  const { token, user } = useSelector((state) => state.auth);
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Listen for window resize to update mobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hideCommonComponents = isMobile && location.pathname === "/register";

  const authenticatedRoutes = [
    { icon: IoMdHome, title: "হোম", route: "/" },
    { icon: RiIdCardLine, title: "প্রমোশন", route: "" },
    { icon: PiWallet, title: "ডিপোজিট", route: "" },
    { icon: LuUserCircle2, title: "মাই একাউন্ট", route: "" },
  ];

  return (
    <div className="relative">
      {!hideCommonComponents && <Navbar />}
      <Outlet />
      {!hideCommonComponents && <Footer />}
      {!hideCommonComponents && (
        <div
          className={`${
            user && token ? "justify-between px-6 py-2" : ""
          } sticky z-50 bottom-0 md:hidden bg-black text-white flex flex-row items-center justify-center font-bold`}
        >
          {!user && !token ? (
            <>
              <Link
                className="w-1/2 bg-[#14805e] py-4 text-center text-white"
                to="/login"
              >
                <button className="">লগ ইন</button>
              </Link>
              <Link
                className="w-1/2 bg-[#ffdf1a] py-4 text-center"
                to="/register"
              >
                <button className="">সাইন আপ</button>
              </Link>
            </>
          ) : (
            <>
              {authenticatedRoutes.map(({ icon: Icon, title }) => (
                <div
                  className="flex flex-col font-normal gap-1 items-center justify-center"
                  key={title}
                >
                  <Icon className="text-2xl" />
                  <p className="text-sm">{title}</p>
                </div>
              ))}{" "}
             
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default MainLayout;

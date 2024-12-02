import { Link, Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";
import { useEffect, useState } from "react";

const MainLayout = () => {
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

  return (
    <div className="relative">
      {!hideCommonComponents && <Navbar />}
      <Outlet />
      {!hideCommonComponents && <Footer />}
      {!hideCommonComponents && (
        <div className="sticky z-50 bottom-0 md:hidden flex flex-row items-center justify-center font-bold">
          <Link
            className="w-1/2 bg-[#14805e] py-4 text-center text-white"
            to="/login"
          >
            <button className="">লগ ইন</button> 
          </Link>
          <Link className="w-1/2 bg-[#ffdf1a] py-4 text-center" to="/register">
            <button className="">সাইন আপ</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MainLayout;

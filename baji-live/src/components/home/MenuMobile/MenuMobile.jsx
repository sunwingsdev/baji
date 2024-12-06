import { useEffect, useState } from "react";
import { LuUserCircle2 } from "react-icons/lu";
import { PiWallet } from "react-icons/pi";
import { RiIdCardLine } from "react-icons/ri";
import { IoMdHome } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AccountDetailsMobile from "../AccountDetailsMobile/AccountDetailsMobile";

const MenuMobile = () => {
  const { token, user } = useSelector((state) => state.auth);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isDrawerOpen]);

  const authenticatedRoutes = [
    { icon: IoMdHome, title: "হোম", route: "/" },
    { icon: RiIdCardLine, title: "প্রমোশন", route: "" },
    { icon: PiWallet, title: "ডিপোজিট", route: "" },
    {
      icon: LuUserCircle2,
      title: "মাই একাউন্ট",
      route: "",
      onClick: () => setDrawerOpen(true),
    },
  ];

  return (
    <div
      className={`sticky bottom-0 z-50 flex flex-row items-center justify-center bg-black text-white font-bold md:hidden ${
        user && token ? "justify-between px-3 py-2" : ""
      }`}
    >
      {!user && !token ? (
        <>
          <Link
            className="w-1/2 bg-[#14805e] py-4 text-center text-white"
            to="/login"
          >
            লগ ইন
          </Link>
          <Link className="w-1/2 bg-[#ffdf1a] py-4 text-center" to="/register">
            সাইন আপ
          </Link>
        </>
      ) : (
        <>
          {authenticatedRoutes.map(({ icon: Icon, title, onClick }) => (
            <div
              key={title}
              className="flex flex-col items-center justify-center gap-1"
              onClick={onClick}
            >
              <Icon className="text-2xl" />
              <p className="text-sm">{title}</p>
            </div>
          ))}
        </>
      )}

      {/* Full-Height Drawer */}
      {isDrawerOpen && <AccountDetailsMobile setDrawerOpen={setDrawerOpen} />}
    </div>
  );
};

export default MenuMobile;

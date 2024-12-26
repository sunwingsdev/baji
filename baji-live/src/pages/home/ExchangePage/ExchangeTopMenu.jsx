import { IoIosSettings } from "react-icons/io";
import ExchangePageMenu from "./ExchangePageMenu";

const ExchangeTopMenu = () => {
  const menuItems = [
    { id: "home", label: "Home" },
    { id: "In-Play", label: "In-Play" },
    { id: "Multi Markets", label: "Multi Markets" },
    { id: "Cricket", label: "Cricket", badge: 2 },
    { id: "Soccer", label: "Soccer", badge: 6 },
    { id: "Tennis", label: "Tennis", badge: 22 },
    { id: "E-Soccer", label: "E-Soccer", badge: 2 },
    { id: "BBL Winner", label: "BBL Winner" },
    { id: "Kabaddi", label: "Kabaddi", badge: 1 },
    { id: "Result", label: "Result" },
  ];
  return (
    <div className="flex justify-between items-center gap-2 px-4 bg-[#434343]">
      <ExchangePageMenu menuItems={menuItems} />
      <div className="">
        <p className="flex items-center gap-2 text-white font-semibold">
          Setting <IoIosSettings />
        </p>
      </div>
    </div>
  );
};

export default ExchangeTopMenu;

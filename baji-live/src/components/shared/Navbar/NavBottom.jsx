import { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "../Container";
import { IoHomeSharp } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";
import MegaMenu from "@/components/home/MegaMenu/MegaMenu";

const NavBottom = ({ navItems }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-[#2d2d2d] text-white md:block hidden relative">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center overflow-x-auto">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-1 justify-center py-2 text-2xl hover:text-[#25775d] transition-colors ease-linear duration-200 ${
                  isActive ? "text-[#25775d]" : ""
                }`
              }
            >
              <p className="py-1 px-5 border-r-[1px]">
                <IoHomeSharp />
              </p>
            </NavLink>

            <NavLink
              to="https://play.google.com/store/apps/details?id=com.ahsan.imeverifiedai&hl=en"
              target="_blank"
              className={({ isActive }) =>
                `flex items-center gap-1 justify-center py-4 text-2xl hover:text-[#25775d] transition-colors ease-linear duration-200 ${
                  isActive
                    ? "text-[#25775d] border-b-[4px] border-b-[#ffb300]"
                    : ""
                }`
              }
            >
              <p className="py-1 px-5 border-r-[1px]">
                <FaMobileAlt />
              </p>
            </NavLink>

            {/* Sport NavLink with Megamenu */}
            <div
              className=""
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <NavLink
                className={`text-sm flex items-center gap-1 justify-center py-4 hover:text-[#25775d] transition-colors ease-linear duration-200 hover:border-b-[4px] hover:border-b-[#ffb300] hover:pb-[12px]`}
              >
                <p className="py-1 px-5 border-r-[1px]">স্পোর্ট</p>
              </NavLink>

              {/* Megamenu */}
              <div
                className={`absolute left-0 top-full w-full bg-[#313131] z-20 text-black p-5 transform transition-transform duration-300 ease-in-out ${
                  isHovered
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-10 opacity-0 pointer-events-none"
                }`}
              >
                <Container>
                  <MegaMenu />
                </Container>
              </div>
            </div>

            {navItems.map(({ title, route }) => (
              <NavLink
                to={route}
                className={({ isActive }) =>
                  `text-sm flex items-center gap-1 justify-center py-4 hover:text-[#25775d] transition-colors ease-linear duration-200 hover:border-b-[4px] hover:border-b-[#ffb300] hover:pb-[12px] ${
                    isActive
                      ? "text-[#25775d] border-b-[4px] border-b-[#ffb300] pb-[12px]"
                      : ""
                  }`
                }
                key={title}
              >
                <p className="py-1 px-5 border-r-[1px]">{title}</p>
              </NavLink>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBottom;

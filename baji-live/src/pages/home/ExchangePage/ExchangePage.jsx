import { Link } from "react-router-dom";
import ExchangeTopMenu from "./ExchangeTopMenu";
import { RiSubtractFill } from "react-icons/ri";
import Marquee from "react-fast-marquee";
import { AiOutlineAudio } from "react-icons/ai";
import KV from "../../../assets/KV.jpg";
import { FaChrome } from "react-icons/fa";
import { IoLogoFirefox } from "react-icons/io5";

const ExchangePage = () => {
  return (
    <div>
      <ExchangeTopMenu />
      <div className="flex gap-4 px-4 mt-0.5 h-screen bg-[#eee]">
        <div className="w-[16%] bg-[#333333]">
          <Link>
            <div className="px-4 py-1 text-sm font-semibold text-[#d8d8d8] hover:text-white bg-[#333333] hover:bg-[#15805e] duration-300 border-b border-[#e0e6e6]">
              Sports
            </div>
          </Link>
          <Link>
            <div className="px-4 py-1 text-sm font-semibold text-[#d8d8d8] hover:text-white bg-[#333333] hover:bg-[#15805e] duration-300 border-b border-[#e0e6e6]">
              Sports
            </div>
          </Link>
          <Link>
            <div className="px-4 py-1 text-sm font-semibold text-[#d8d8d8] hover:text-white bg-[#333333] hover:bg-[#15805e] duration-300 border-b border-[#e0e6e6]">
              Sports
            </div>
          </Link>
          <Link>
            <div className="px-4 py-1 text-sm font-semibold text-[#d8d8d8] hover:text-white bg-[#333333] hover:bg-[#15805e] duration-300 border-b border-[#e0e6e6]">
              Sports
            </div>
          </Link>
          <Link>
            <div className="px-4 py-1 text-sm font-semibold text-[#d8d8d8] hover:text-white bg-[#333333] hover:bg-[#15805e] duration-300 border-b border-[#e0e6e6]">
              Sports
            </div>
          </Link>
          <Link>
            <div className="px-4 py-1 text-sm font-semibold text-[#d8d8d8] hover:text-white bg-[#333333] hover:bg-[#15805e] duration-300 border-b border-[#e0e6e6]">
              Sports
            </div>
          </Link>
        </div>
        <div className="w-[60%]">
          <div className="bg-[#2a3a43] opacity-90 text-white w-full py-0.5 border-b border-white">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 pl-1">
                <AiOutlineAudio className="text-xl" />
                <p>News</p>
              </div>
              <Marquee className="text-xs">
                (Date :- 26/12/2024) .. Event : South Africa v Pakistan :
                Market: 50 Over PAK Adv {"'"}whole market voided because wrong
                Market offered by mistake Sorry for the Inconvenience Caused
              </Marquee>
            </div>
          </div>
          <div className="">
            <img className="w-full h-72" src={KV} alt="" />
          </div>
          <div className="mt-8">
            <div className="flex gap-1 w-12 m-auto text-gray-400">
              <FaChrome size={20} />
              <IoLogoFirefox size={20} />
            </div>
            <p className="text-center w-[600px] m-auto">
              Our website works best in the newest and last prior version of
              these browsers: Google Chrome. Firefox
            </p>
          </div>
        </div>
        <div className="w-[24%] bg-white">
          <div className="flex justify-between items-center gap-2 px-2 py-0.5 text-white bg-[#243d4c]">
            <p>Bet Slip</p>
            <div className="flex justify-center items-center w-4 h-3 border border-white">
              <RiSubtractFill className="text-white" />
            </div>
          </div>
          <p className="text-sm font-semibold text-center py-6 text-black">
            Click on the odds to add selections to the betslip.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExchangePage;

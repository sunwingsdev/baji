import Marquee from "react-fast-marquee";
import { AiOutlineAudio } from "react-icons/ai";
import { FaChrome } from "react-icons/fa";
import { IoLogoFirefox } from "react-icons/io5";
import kvImg from "../../assets/KV.jpg";

const ExchangeMiddleContent = () => {
  return (
    <>
      <div className="bg-[#2a3a43] opacity-90 text-white w-full py-0.5 border-b border-white">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 pl-1">
            <AiOutlineAudio className="text-xl" />
            <p>News</p>
          </div>
          <Marquee className="text-xs">
            (Date :- 26/12/2024) .. Event : South Africa v Pakistan : Market: 50
            Over PAK Adv {"'"}whole market voided because wrong Market offered
            by mistake Sorry for the Inconvenience Caused
          </Marquee>
        </div>
      </div>
      <div className="">
        <img className="w-full h-72" src={kvImg} alt="" />
      </div>
      <div className="mt-8">
        <div className="flex gap-1 w-12 m-auto text-gray-400">
          <FaChrome size={20} />
          <IoLogoFirefox size={20} />
        </div>
        <p className="text-center w-[600px] m-auto">
          Our website works best in the newest and last prior version of these
          browsers: Google Chrome. Firefox
        </p>
      </div>
    </>
  );
};

export default ExchangeMiddleContent;

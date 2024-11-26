import PrimaryButton from "@/components/shared/Buttons/PrimaryButton";
import SecondaryButton from "@/components/shared/Buttons/SecondaryButton";
import { IoTimeOutline } from "react-icons/io5";

const OfferCard = ({ offer }) => {
  const { image, title, subtitle, time } = offer;
  return (
    <div className="bg-[#8e8e8e] rounded-md">
      <img className="rounded-t-md" src={image} alt="" />
      <div className={""}>
        <div className="pb-2 relative">
          <div className="border-dashed absolute -top-4 w-full h-4 border-t-4 border-[#8E8E8E]"></div>
          <div className="text-white flex items-center justify-between border-s-4 border-[#FFE22B] px-4 my-3">
            <h2 className="text-xl">{title}</h2>
            <p className="text-[#ffdf18] bg-[#14805e] py-2 px-3 text-xs md:text-sm rounded">
              দীর্ঘ মেয়াদী
            </p>
          </div>
          <div className="px-4 text-sm text-[#1C1C1C] space-y-2">
            <p>{subtitle}</p>
            <div className="flex items-center gap-2">
              <IoTimeOutline className="text-xl" />
              <p>{time}</p>
            </div>
            <div className="flex items-center gap-4">
              <PrimaryButton to="/register">সাইন আপ</PrimaryButton>
              <SecondaryButton to="/details">বিস্তারিত</SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;

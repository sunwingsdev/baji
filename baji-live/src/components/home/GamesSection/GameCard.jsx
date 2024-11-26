import PrimaryButton from "@/components/shared/Buttons/PrimaryButton";
import { Link } from "react-router-dom";

const GameCard = ({ image, title }) => {
  return (
    <Link to="/" className="rounded-md">
      <div className="relative rounded-md group overflow-hidden bg-[#333]">
        {/* Gradient background with reduced opacity */}
        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"></div>

        {/* Image */}
        <img
          className="w-full h-28 sm:h-auto object-cover rounded-t-md z-0"
          src={image}
          alt=""
        />

        {/* Black overlay that appears on hover */}
        <div className="absolute w-full h-full top-0 left-0 bg-black opacity-0 z-20 transition-opacity duration-300 group-hover:opacity-70 rounded-[20px] lg:rounded-xl"></div>

        {/* Play button */}
        <Link to="/" className="hidden sm:block">
          <div className="absolute whitespace-nowrap text-xs top-1/2 left-1/2 transform -translate-x-1/2 translate-y-16 opacity-0 transition-transform duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-30">
            <PrimaryButton>প্লে গেম</PrimaryButton>
          </div>
        </Link>

        {/* Title */}
        <div className="md:absolute bottom-0 text-white z-30">
          <h2 className="font-semibold text-sm p-2 px-2 whitespace-nowrap overflow-hidden">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;

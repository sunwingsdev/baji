import Modal from "@/components/shared/Modal";
import { useState } from "react";
import exchange1 from "@/assets/megamenu/exchange_bdt_01.png";
import exchange2 from "@/assets/megamenu/exchange_bdt_02.png";
import exchange3 from "@/assets/megamenu/exchange_bdt_03.png";
import iSports1 from "@/assets/megamenu/i-sports_bdt_02.png";
import iSports2 from "@/assets/megamenu/i-sports_bdt_03.png";
import sbo1 from "@/assets/megamenu/sbobet_bdt_03.png";
import sbo2 from "@/assets/megamenu/sbobet_bdt_02.png";

const MegaMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const options = [
    {
      title: "Exchange",
      image1: exchange3,
      image2: exchange2,
    },
    {
      title: "SBO Sports",
      image1: iSports1,
      image2: iSports2,
    },
    {
      title: "I Sports",
      image1: sbo1,
      image2: sbo2,
    },
  ];

  return (
    <div className="flex justify-between gap-4">
      {options.map((option) => (
        <div
          onClick={() => setIsModalOpen(true)}
          className="relative h-56 w-full cursor-pointer"
          key={option.title}
        >
          <h2 className="text-white px-6 font-medium text-lg border-s-4 border-yellow-500">
            {option.title}
          </h2>
          {/* Centered Background Image */}
          <img
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-auto object-contain"
            src={exchange1}
            alt="Background"
          />

          {/* Foreground Images */}
          <img
            className="w-[70%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-auto object-contain"
            src={option.image1}
            alt={`${option.title} image1`}
          />
          <img
            className="w-[70%] absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/2 h-auto object-contain"
            src={option.image2}
            alt={`${option.title} image2`}
          />
        </div>
      ))}

      {/* Modal */}
      <Modal
        title={"Oops!!!"}
        isOpen={isModalOpen}
        onOpenChange={() => setIsModalOpen(false)}
      >
        <p>Please contact your developer team to connect API!!!</p>
      </Modal>
    </div>
  );
};

export default MegaMenu;

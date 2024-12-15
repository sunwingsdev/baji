import Modal from "@/components/shared/Modal";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import SliderUploadForm from "./SliderUploadForm";

const SliderUploadSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div>
        <div className="flex items-center justify-between border-2 bg-gray-400 rounded-lg">
          <p className="text-lg md:text-xl font-semibold px-3">
            Upload Home Slider Image
          </p>
          <Button
            className="bg-[#14805e] text-[#fde047]"
            onClick={() => setIsModalOpen(true)}
          >
            <IoAdd /> Add
          </Button>
        </div>
      </div>
      <Modal
        title={"Uplaod Slider Image"}
        isOpen={isModalOpen}
        onOpenChange={() => setIsModalOpen(false)}
      >
        <SliderUploadForm closeModal={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
};

export default SliderUploadSection;

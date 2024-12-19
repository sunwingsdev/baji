import LogoSelectionSection from "@/components/dashboard/LogoSelectionSection/LogoSelectionSection";
import LogoUploadSection from "@/components/dashboard/LogoUploadSection/LogoUploadSection";
import SliderSelectionSection from "@/components/dashboard/SliderSelectionSection/SliderSelectionSection";
import SliderUploadSection from "@/components/dashboard/SliderUploadSection/SliderUploadSection";

const HomeControl = () => {
  return (
    <div className="">
      <LogoUploadSection />
      <LogoSelectionSection />
      <SliderUploadSection />
      <SliderSelectionSection />
    </div>
  );
};

export default HomeControl;

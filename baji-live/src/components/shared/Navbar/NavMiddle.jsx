import { useState } from "react";
import Modal from "../Modal";
import PrimaryButton from "../Buttons/PrimaryButton";
import Container from "../Container";
import { RiMenu2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { MdOutlineExitToApp, MdOutlineHelpCenter } from "react-icons/md";
import LoginForm from "../auth/LoginForm";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

const NavMiddle = ({ navItems }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const sponsors = [
    {
      id: 1,
      image: "https://www.baji.live/images/web/sponsor/deccan-gladiators.png",
    },
    {
      id: 2,
      image:
        "https://www.baji.live/images/web/sponsor/sunrisers-eastern-cape.png",
    },
    {
      id: 3,
      image: "https://www.baji.live/images/web/sponsor/quetta-gladiators.png",
    },
    {
      id: 4,
      image: "https://www.baji.live/images/web/sponsor/bologna-fc-1909.png",
    },
  ];

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSaveChanges = () => {
    setIsModalOpen(false);
  };

  const closeSheet = () => {
    setIsSheetOpen(false);
  };

  return (
    <div className="bg-black md:bg-gradient-to-b from-[#1aaa7c] to-[#14815f] py-3">
      <Container>
        <div className="flex items-center justify-between text-[#14815f]">
          {/* Menu for mobile */}
          <div className="md:hidden z-40">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <RiMenu2Line
                  className="text-4xl cursor-pointer"
                  onClick={() => setIsSheetOpen(true)}
                />
              </SheetTrigger>
              <SheetContent side="left" className="p-4 bg-black text-white">
                <div className="">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <img
                      className="w-12"
                      src="https://img.b112j.com/bj/h5/assets/images/logo.png?v=1727170388190&source=mcdsrc"
                      alt=""
                    />
                    <h2 className=""> ফ্রন্ট অফ শার্ট পার্টনার </h2>
                    <img
                      className="w-16"
                      src="https://img.b112j.com/bj/h5/assets/images/sponsor/afc-bournemouth.png?v=1727170388190&source=mcdsrc"
                      alt=""
                    />
                  </div>
                  <hr className="my-3" />
                  <Link
                    to={"/category/sport"}
                    className="flex items-center gap-2 border-b border-b-slate-700 px-4 py-3 text-sm"
                    onClick={closeSheet}
                  >
                    <img
                      className="size-9"
                      src={
                        "https://img.b112j.com/bj/h5/assets/images/icon-set/theme-icon/icon-home.png?v=1726575604702"
                      }
                      alt=""
                    />
                    <span>স্পোর্ট</span>
                  </Link>
                  {navItems && navItems.length > 0 ? (
                    navItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.route}
                        className="flex items-center gap-2 border-b border-b-slate-700 px-4 py-3 text-sm"
                        onClick={closeSheet}
                      >
                        <img className="size-9" src={item.image} alt="" />
                        <span>{item.title}</span>
                      </Link>
                    ))
                  ) : (
                    <p className="text-black">No items available</p>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo and sponsors */}
          <div className="flex items-center gap-5">
            <img
              className="w-10 md:w-16"
              src="https://www.baji.live/images/web/logo.png"
              alt="Logo"
            />
            <div className="flex gap-1 md:gap-2">
              {sponsors.map((sponsor) => (
                <img
                  key={sponsor.id}
                  className="w-6 md:w-8"
                  src={sponsor.image}
                  alt="Sponsor"
                />
              ))}
            </div>
          </div>

          {/* Desktop navigation and buttons */}
          <div className="md:flex items-center gap-8 text-white hidden">
            <p
              className="px-7 py-1 hover:border-[#ffb405] hover:border rounded cursor-pointer"
              onClick={handleModalOpen}
            >
              লগ ইন
            </p>
            <Link to="/register">
              <PrimaryButton>সাইন আপ</PrimaryButton>
            </Link>
          </div>

          {/* Icons for app and help in mobile */}
          <div className="flex items-center gap-4 sm:gap-8 md:hidden text-xl sm:text-3xl">
            <div className="flex items-center justify-center flex-col gap-1">
              <MdOutlineExitToApp />
              <span className="text-sm">App</span>
            </div>
            <div className="flex items-center justify-center flex-col gap-1">
              <MdOutlineHelpCenter />
              <span className="text-sm">Help</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Reusable modal instance */}
      <Modal
        isOpen={isModalOpen}
        onOpenChange={handleModalClose}
        title="Baji এ আপনাকে স্বাগতম"
        onSave={handleSaveChanges}
      >
        {/* Modal form content */}
        <LoginForm />
      </Modal>
    </div>
  );
};

export default NavMiddle;

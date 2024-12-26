import { useState, useEffect } from "react";
import NavBottom from "./NavBottom";
import NavMiddle from "./NavMiddle";
import NavTop from "./NavTop";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    // {
    //   title: "স্পোর্ট",
    //   image: "https://img.b112j.com/bj/h5/assets/images/icon-set/theme-icon/icon-home.png?v=1726575604702",
    //   route: "/category/sport",
    // },
    {
      title: "ক্যাসিনো",
      image:
        "https://img.b112j.com/bj/h5/assets/images/icon-set/theme-icon/icon-home.png?v=1726575604702",
      route: "/category/casino",
    },
    {
      title: "স্লট",
      image:
        "https://img.b112j.com/bj/h5/assets/images/icon-set/theme-icon/icon-home.png?v=1726575604702",
      route: "/category/slot",
    },
    {
      title: "টেবিল",
      image:
        "https://img.b112j.com/bj/h5/assets/images/icon-set/theme-icon/icon-home.png?v=1726575604702",
      route: "/category/table",
    },
    {
      title: "ফিশিং",
      image:
        "https://img.b112j.com/bj/h5/assets/images/icon-set/theme-icon/icon-home.png?v=1726575604702",
      route: "/category/fishing",
    },
    {
      title: "ক্রাশ",
      image:
        "https://img.b112j.com/bj/h5/assets/images/icon-set/theme-icon/icon-home.png?v=1726575604702",
      route: "/category/crush",
    },
    {
      title: "আর্কেড",
      image:
        "https://img.b112j.com/bj/h5/assets/images/icon-set/theme-icon/icon-home.png?v=1726575604702",
      route: "/category/arcade",
    },
    {
      title: "লটারি",
      image:
        "https://img.b112j.com/bj/h5/assets/images/icon-set/theme-icon/icon-home.png?v=1726575604702",
      route: "/category/lottery",
    },
    {
      title: "প্রমোশনাল অফার",
      image:
        "https://img.b112j.com/bj/h5/assets/images/icon-set/theme-icon/icon-home.png?v=1726575604702",
      route: "/promotional-offer",
    },
    {
      title: "ভিআইপি",
      image:
        "https://img.b112j.com/bj/h5/assets/images/icon-set/theme-icon/icon-home.png?v=1726575604702",
      route: "/vip",
    },
    {
      title: "রেফারেল",
      image:
        "https://img.b112j.com/bj/h5/assets/images/icon-set/theme-icon/icon-home.png?v=1726575604702",
      route: "/referral",
    },
  ];

  const handleScroll = () => {
    if (window.scrollY > 120) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`transition-all duration-500 ease-in-out ${
        isScrolled ? "fixed top-0 left-0 z-50 w-full" : ""
      }`}
    >
      <NavTop />
      <NavMiddle navItems={navItems} />
      <NavBottom navItems={navItems} />
    </div>
  );
};

export default Navbar;

import { useState } from "react";
import Container from "@/components/shared/Container";
import { IoSearch } from "react-icons/io5";
import GameCard from "./GameCard";
import aviatorImage from "@/assets/games/aviator.png";

const GamesSection = () => {
  // State to manage checked status
  const [checkedState, setCheckedState] = useState({});

  const games = [
    {
      id: 1,
      image: aviatorImage,
      title: "Aviator",
      subtitle: "Crazy",
      demo: "https://demo.spribe.io/launch/aviator?currency=BDT&lang=EN",
    },
    {
      id: 2,
      image:
        "https://upload.4rabetsite25.com/storage/235913/Super-Burning-Wins_Playson.jpg",
      title: "Super Burning Wins",
      subtitle: "Crazy",
      demo: "https://www.jopi.com/gam/summer-maze/",
    },
    {
      id: 3,
      image:
        "https://img.b112j.com/upload/game/AWCMSEXY/MX-LIVE-001_SEXY_1.png?v=1725529632354",
      title: "Sexy Baccarat Classic-SEXY hall-Table1",
      subtitle: "Crazy",
      demo: "https://www.jopi.com/gam/pixel-mini-golf/",
    },
    {
      id: 4,
      image:
        "https://img.b112j.com/upload/game/EVO/monopoly@Monopoly00000001.png?v=1717404282418",
      title: "Evolution Monopoly Live",
      subtitle: "Crazy",
      demo: "https://www.jopi.com/gam/neon-bricks/",
    },
    {
      id: 5,
      image:
        "https://img.b112j.com/upload/game/EVO/roulette@48z5pjps3ntvqc1b.png?v=1717401497320",
      title: "Evolution Auto-Roulette",
      subtitle: "Crazy",
    },
    {
      id: 6,
      image:
        "https://img.b112j.com/upload/game/EVO/crazytime@CrazyTime0000001.png?v=1717402263065",
      title: "Evolution Crazy Time",
      subtitle: "Crazy",
    },
    {
      id: 7,
      image:
        "https://img.b112j.com/upload/game/EVO/funkytime@FunkyTime0000001.png?v=1717403238250",
      title: "Evolution Funky Time",
      subtitle: "Crazy",
    },
    {
      id: 8,
      image:
        "https://img.b112j.com/upload/game/EVO/monopoly@Monopoly00000001.png?v=1717404282418",
      title: "Evolution Monopoly Live",
      subtitle: "Crazy",
    },
    {
      id: 9,
      image:
        "https://img.b112j.com/upload/game/EVO/sicbo@SuperSicBo000001.png?v=1717463157508",
      title: "Evolution Super Sic Bo",
      subtitle: "Crazy",
    },
    {
      id: 10,
      image:
        "https://img.b112j.com/upload/game/EVO/roulette@48z5pjps3ntvqc1b.png?v=1717401497320",
      title: "Evolution Auto-Roulette",
      subtitle: "Crazy",
    },
    {
      id: 11,
      image:
        "https://img.b112j.com/upload/game/EVO/monopoly@Monopoly00000001.png?v=1717404282418",
      title: "Evolution Monopoly Live",
      subtitle: "Crazy",
    },
    {
      id: 12,
      image:
        "https://img.b112j.com/upload/game/EVO/sicbo@SuperSicBo000001.png?v=1717463157508",
      title: "Evolution Super Sic Bo",
      subtitle: "Crazy",
    },
    {
      id: 13,
      image:
        "https://img.b112j.com/upload/game/EVO/roulette@48z5pjps3ntvqc1b.png?v=1717401497320",
      title: "Evolution Auto-Roulette",
      subtitle: "Crazy",
    },
    {
      id: 14,
      image:
        "https://img.b112j.com/upload/game/EVO/sicbo@SuperSicBo000001.png?v=1717463157508",
      title: "Evolution Super Sic Bo",
      subtitle: "Crazy",
    },
    {
      id: 15,
      image:
        "https://img.b112j.com/upload/game/EVO/roulette@48z5pjps3ntvqc1b.png?v=1717401497320",
      title: "Evolution Auto-Roulette",
      subtitle: "Crazy",
    },
    {
      id: 16,
      image:
        "https://img.b112j.com/upload/game/AWCMSEXY/MX-LIVE-001_SEXY_1.png?v=1725529632354",
      title: "Sexy Baccarat Classic-SEXY hall-Table1",
      subtitle: "Crazy",
    },
    {
      id: 17,
      image:
        "https://img.b112j.com/upload/game/EVO/funkytime@FunkyTime0000001.png?v=1717403238250",
      title: "Evolution Funky Time",
      subtitle: "Crazy",
    },
    {
      id: 18,
      image:
        "https://img.b112j.com/upload/game/AWCMSEXY/MX-LIVE-001_SEXY_1.png?v=1725529632354",
      title: "Sexy Baccarat Classic-SEXY hall-Table1",
      subtitle: "Crazy",
    },
    {
      id: 19,
      image:
        "https://img.b112j.com/upload/game/EVO/funkytime@FunkyTime0000001.png?v=1717403238250",
      title: "Evolution Funky Time",
      subtitle: "Crazy",
    },
  ];

  const subcategories = [
    {
      categoryValue: "sport",
      subcategoryValue: "exchange",
      title: "এক্সচেঞ্জ",
      image:
        "https://img.b112j.com/bj/h5/assets/images/icon-set/sports-icon/icon-exchange.svg?v=1727170388190",
    },
    {
      categoryValue: "sport",
      subcategoryValue: "i-sports",
      title: "I-Sports",
      image:
        "https://img.b112j.com/bj/h5/assets/images/icon-set/sports-icon/icon-sportbook.svg?v=1727170388190",
    },
    {
      categoryValue: "sport",
      subcategoryValue: "sbo-sports",
      title: "SBO Sports",
      image:
        "https://img.b112j.com/bj/h5/assets/images/icon-set/sports-icon/icon-sbov2.svg?v=1727170388190",
    },
    {
      categoryValue: "sport",
      subcategoryValue: "e1-sport",
      title: "E1Sports",
      image:
        "https://img.b112j.com/bj/h5/assets/images/icon-set/sports-icon/icon-awcme1sport.svg?v=1727170388190",
    },
    {
      categoryValue: "sport",
      subcategoryValue: "horse-book",
      title: "ঘোড়া বই",
      image:
        "https://img.b112j.com/bj/h5/assets/images/icon-set/sports-icon/icon-horsebook.svg?v=1727170388190",
    },
    {
      categoryValue: "crush",
      subcategoryValue: "e1-sports",
      title: "E1 Sports",
      image:
        "https://img.b112j.com/bj/h5/assets/images/icon-set/sports-icon/icon-sbov2.svg?v=1727170388190",
    },
    {
      categoryValue: "casino",
      subcategoryValue: "evolution",
      title: "Evolution",
      image:
        "https://img.b112j.com/bj/h5/assets/images/brand/white/provider-evo.png?v=1727170388190&source=mcdsrc",
    },
    {
      categoryValue: "casino",
      subcategoryValue: "sexy",
      title: "Sexy",
      image:
        "https://img.b112j.com/bj/h5/assets/images/brand/white/provider-awcmsexy.png?v=1727170388190&source=mcdsrc",
    },
    {
      categoryValue: "casino",
      subcategoryValue: "pragmatic-play",
      title: "Pragmatic Play",
      image:
        "https://img.b112j.com/bj/h5/assets/images/brand/white/provider-awcmpp.png?v=1727170388190&source=mcdsrc",
    },
    {
      categoryValue: "casino",
      subcategoryValue: "play-tech",
      title: "Playtech",
      image:
        "https://img.b112j.com/bj/h5/assets/images/brand/white/provider-awcmpt.png?v=1727170388190&source=mcdsrc",
    },
    {
      categoryValue: "casino",
      subcategoryValue: "hot-road",
      title: "HotRoad",
      image:
        "https://img.b112j.com/bj/h5/assets/images/brand/white/provider-awcmhotroad.png?v=1727170388190&source=mcdsrc",
    },
    {
      categoryValue: "lottery",
      subcategoryValue: "e1-sports",
      title: "E1 Sports",
      image:
        "https://img.b112j.com/bj/h5/assets/images/icon-set/sports-icon/icon-sbov2.svg?v=1727170388190",
    },
  ];

  const handleCheckboxChange = (value) => {
    setCheckedState((prevState) => ({
      ...prevState,
      [value]: !prevState[value],
    }));
  };

  return (
    <div className="">
      <Container>
        {/* Search & Filter Section */}
        <div className="hidden md:flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex items-center gap-2">
            <IoSearch className="text-[#666666] text-3xl" />
            <input
              type="text"
              id="text"
              placeholder="গেমস অনুসন্ধান করুন"
              className="px-4 py-2 rounded border-none focus:outline-none text-white bg-[#f2f2f2]"
            />
          </div>
          <div className="flex items-center gap-2 text-[#666666] text-sm">
            <p>শ্রেণীবিভক্ত করা：</p>
            <button className="text-sm flex items-center gap-1 justify-center py-4 hover:text-[#25775d] transition-colors ease-linear duration-200 hover:border-b-[4px] hover:border-b-[#25775d] hover:pb-[12px] ">
              <p className="py-1 px-5 border-r-[1px]">সুপারিশ করা</p>
            </button>
            <button className="text-sm flex items-center gap-1 justify-center py-4 hover:text-[#25775d] transition-colors ease-linear duration-200 hover:border-b-[4px] hover:border-b-[#25775d] hover:pb-[12px] ">
              <p className="py-1 px-5 border-r-[1px]">সর্বশেষ</p>
            </button>
            <button className="text-sm flex items-center gap-1 justify-center py-4 hover:text-[#25775d] transition-colors ease-linear duration-200 hover:border-b-[4px] hover:border-b-[#25775d] hover:pb-[12px] ">
              <p className="py-1 px-5 border-r-[1px]">A-Z</p>
            </button>
          </div>
        </div>
      </Container>
      <div className="bg-[#041d3c] md:bg-[#137556]">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex md:flex-wrap md:flex-row items-center gap-2 py-2 text-white overflow-x-auto w-full">
              {subcategories?.map((subcategory) => (
                <div
                  key={subcategory.id}
                  className={`flex min-w-16 rounded bg-[#262626] md:bg-transparent items-center px-4 py-3 md:hover:bg-yellow-400 hover:opacity-70 ${
                    checkedState[subcategory.subcategoryValue]
                      ? "border-[#137556] border-2"
                      : ""
                  }`}
                >
                  {/* For mobile devices: Show only the image */}
                  <div className="block md:hidden">
                    <img
                      src={subcategory.image}
                      alt={subcategory.title}
                      onClick={() =>
                        handleCheckboxChange(subcategory.subcategoryValue)
                      }
                      className={`cursor-pointer w-8 h-8`}
                    />
                  </div>

                  {/* For larger devices: Show only checkbox and text */}
                  <div className="hidden md:flex items-center">
                    <div className="relative">
                      <input
                        type="checkbox"
                        id={subcategory.subcategoryValue}
                        checked={!!checkedState[subcategory.subcategoryValue]}
                        onChange={() =>
                          handleCheckboxChange(subcategory.subcategoryValue)
                        }
                        className="w-6 h-6 appearance-none border-2 border-white rounded bg-white focus:outline-none checked:bg-white"
                      />
                      <div
                        className={`absolute -top-1 inset-0 flex items-center justify-center pointer-events-none ${
                          checkedState[subcategory.subcategoryValue]
                            ? "text-yellow-400"
                            : "text-transparent"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="4"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <label
                      htmlFor={subcategory.subcategoryValue}
                      className={`ps-3 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                        checkedState[subcategory.subcategoryValue]
                          ? "text-yellow-400"
                          : ""
                      }`}
                    >
                      {subcategory.title}
                    </label>
                  </div>
                </div>
              ))}
            </div>

            <button className="hidden md:block text-[#ffdf18] text-sm px-6 py-4 bg-gradient-to-b hover:bg-gradient-to-t from-[#17966e] hover: to-[#0f6046] transition-all ease-linear duration-200">
              আরও ফিল্টার
            </button>
          </div>
        </Container>
      </div>
      <div className="bg-[#041d3c] md:bg-[#4e4e4e]">
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3  py-6 ">
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default GamesSection;

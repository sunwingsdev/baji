import { Link } from "react-router-dom";

const FooterBottom = () => {
  const routes = [
    {
      id: 1,
      title: "অ্যাফিলিয়েট",
      route: "/",
    },
    {
      id: 2,
      title: "দায়িত্বশীল গেমিং",
      route: "/",
    },
    {
      id: 3,
      title: "আমাদের সম্পর্কে",
      route: "/",
    },
  ];
  return (
    <div className="py-4 text-[#dedede]">
      <hr />
      <div className="flex items-center justify-between py-4">
        <img
          className="w-10 md:w-16"
          src="https://www.baji.live/images/web/logo.png"
          alt=""
        />
        <div className="flex flex-col items-end justify-center">
          <div className="flex items-center">
            {routes.map(({ title, route }) => (
              <Link
                to={route}
                className="text-sm flex items-center gap-1 justify-center py-4 hover:text-[#25775d] transition-colors ease-linear duration-200"
                key={title}
              >
                <p className="py-1 px-5 border-r-[1px]">{title}</p>
              </Link>
            ))}
          </div>
          <p className="text-xs text-[#999]">© 2024 Baji কপিরাইট। সমস্ত অধিকার সংরক্ষিত</p>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;

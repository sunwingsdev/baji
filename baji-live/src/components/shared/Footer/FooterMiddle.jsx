import { Link } from "react-router-dom";
import HeadingContent from "../HeadingContent";
import HeadingImageContent from "../HeadingImageContent";
import image1 from "@/assets/images/deccan-gladiators.png";
import image2 from "@/assets/images/sunrisers-eastern-cape.png";
import image3 from "@/assets/images/quetta-gladiators.png";
import image4 from "@/assets/images/bologna-fc-1909.png";
import service1 from "@/assets/images/icon-24hr.png";
import service2 from "@/assets/images/icon-book.png";
import service3 from "@/assets/images/icon-ambassador.png";
import service4 from "@/assets/images/android-bn.png";
import safe1 from "@/assets/images/safe1.png";
import safe2 from "@/assets/images/safe2.png";
import safe3 from "@/assets/images/safe3.png";
import method1 from "@/assets/images/pay16.png";
import method2 from "@/assets/images/pay22.png";
import method3 from "@/assets/images/pay33.png";
import method4 from "@/assets/images/pay34.png";
import method5 from "@/assets/images/pay45.png";
import method6 from "@/assets/images/pay59.png";
import method7 from "@/assets/images/pay60.png";
import method8 from "@/assets/images/pay61.png";
import method9 from "@/assets/images/pay47.png";
import method10 from "@/assets/images/pay91.png";
import community1 from "@/assets/images/FaceBook.png";
import community2 from "@/assets/images/Instagram.png";
import community3 from "@/assets/images/Pinterest.png";
import community4 from "@/assets/images/Youtube.png";
import community5 from "@/assets/images/Telegram.png";
import community6 from "@/assets/images/Twitter.png";
import brand1 from "@/assets/images/mia-k.png";
import brand2 from "@/assets/images/kevin-pietersen-signature.png";
import brand3 from "@/assets/images/amy-jacson.png";
import brand4 from "@/assets/images/hansika-signature.png";
import license from "@/assets/images/gaming_license.png";

const FooterMiddle = () => {
  const services = [
    {
      id: 1,
      image: service1,
      title: "কাস্টমার সাপোর্ট",
      subtitle: "২৪/৭ আপনাদের সেবায় নিয়োজিত",
    },
    {
      id: 2,
      image: service2,
      title: "নতুন সদস্যদের জন্যে গাইড",
      subtitle: "বহুল আলোচিত প্রশ্ন সমুহ এবং সাহায্যকারী গাইড",
      button: "এখনই এক্সপ্লোর করুণ",
      route: "/explore",
    },
    {
      id: 3,
      image: service3,
      title: "ব্র্যান্ড অ্যাম্বাসেডর",
      subtitle: "সেলিব্রিটির সাথে খেলুন",
      button: "এখনই মজা করুন",
      route: "/explore",
    },
    {
      id: 4,
      image: service4,
      imageRoute: "/download-app",
    },
  ];

  const gamingContents = [
    {
      id: 1,
      image: safe1,
    },
    {
      id: 2,
      image: safe2,
    },
    {
      id: 3,
      image: safe3,
    },
  ];

  const paymentMethods = [
    {
      id: 1,
      image: method1,
      route: "/",
    },
    {
      id: 2,
      image: method2,
      route: "/",
    },
    {
      id: 3,
      image: method3,
      route: "/",
    },
    {
      id: 4,
      image: method4,
      route: "/",
    },
    {
      id: 5,
      image: method5,
      route: "/",
    },
    {
      id: 6,
      image: method6,
      route: "/",
    },
    {
      id: 7,
      image: method7,
      route: "/",
    },
    {
      id: 8,
      image: method8,
      route: "/",
    },
    {
      id: 9,
      image: method9,
      route: "/",
    },
    {
      id: 10,
      image: method10,
      route: "/",
    },
  ];

  const communities = [
    {
      id: 1,
      image: community1,
      route: "/",
    },
    {
      id: 2,
      image: community2,
      route: "/",
    },
    {
      id: 3,
      image: community3,
      route: "/",
    },
    {
      id: 4,
      image: community4,
      route: "/",
    },
    {
      id: 5,
      image: community5,
      route: "/",
    },
    {
      id: 6,
      image: community6,
      route: "/",
    },
  ];

  const sponsors = [
    {
      id: 1,
      image: image1,
    },
    {
      id: 2,
      image: image2,
    },
    {
      id: 3,
      image: image3,
    },
    {
      id: 4,
      image: image4,
    },
  ];

  const brandAmbassadors = [
    {
      id: 1,
      image: brand1,
      title: "Mia Khalifa",
      route: "/mia-khalifa",
    },
    {
      id: 2,
      image: brand2,
      title: "Kevin Pietersen",
      route: "/mia-khalifa",
    },
    {
      id: 3,
      image: brand3,
      title: "Amy Jackson",
      route: "/mia-khalifa",
    },
    {
      id: 4,
      image: brand4,
      title: "Hansika Motwani",
      route: "/mia-khalifa",
    },
  ];
  return (
    <div className="relative flex flex-col">
      <div className="md:flex items-center justify-between gap-3 hidden">
        {services.map((service) => (
          <div className="flex items-center gap-4" key={service.id}>
            {service.imageRoute ? (
              <Link to={service.imageRoute}>
                <img src={service.image} alt="" />
              </Link>
            ) : (
              <img className="w-16" src={service.image} alt="" />
            )}
            <div className="flex flex-col items-start text-[#dedede] gap-3">
              <h2>{service.title}</h2>
              <p className="text-[#999] text-[12px]">{service.subtitle}</p>
              <Link to={service.route}>
                <p className="hover:text-blue-500 hover:underline">
                  {service.button}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="order-3 flex flex-col-reverse md:flex-row items-start md:gap-16">
        <HeadingContent heading="দায়িত্বশীল গেমিং" contents={gamingContents} />
        <HeadingContent
          heading="পেমেন্ট পদ্ধতি"
          contents={paymentMethods}
          contentWidth={80}
          wrap={true}
        />
      </div>
      <div className="order-4">
        <HeadingContent heading="কমিউনিটি ওয়েবসাইট" contents={communities} />
      </div>
      <div className="order-1">
        <HeadingImageContent
          heading="স্পন্সরশিপ"
          contents={sponsors}
          contentWidth={60}
        />
      </div>
      <div className="order-2">
        <HeadingImageContent
          heading="ব্র্যান্ড অ্যাম্বাসেডর'স"
          contents={brandAmbassadors}
          contentWidth={30}
        />
      </div>

      <div className="absolute right-5 bottom-5 space-y-3 text-sm hidden md:block">
        <h2 className="text-[#dedede] font-semibold">গেইমিংয়ের লাইসেন্স</h2>
        <img className="w-32" src={license} alt="" />
      </div>
    </div>
  );
};

export default FooterMiddle;

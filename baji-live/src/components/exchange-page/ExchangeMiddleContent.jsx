import ExchangeMarquee from "./ExchangeMarquee";
import ExchangeBanner from "./ExchangeBanner";
import KvImage from "../../assets/KV.jpg";
import ExchangeFooter from "./ExchangeFooter";

const ExchangeMiddleContent = () => {
  return (
    <>
      <ExchangeMarquee />
      <ExchangeBanner img={KvImage} />
      <ExchangeFooter />
    </>
  );
};

export default ExchangeMiddleContent;

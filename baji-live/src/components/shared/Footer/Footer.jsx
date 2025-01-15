import Container from "../Container";
import FooterBottom from "./FooterBottom";
import FooterMiddle from "./FooterMiddle";
import FooterTop from "./FooterTop";

const Footer = () => {
  return (
    <div className="bg-[#041d3c] md:bg-[#041d3c] ">
      <Container>
        <FooterTop />
        <FooterMiddle />
        <FooterBottom />
      </Container>
    </div>
  );
};

export default Footer;

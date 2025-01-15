import { BannerSlider } from "@/components/home/BannerSlider/BannerSlider";
import { CardSlider } from "@/components/home/CardSlider/CardSlider";
import Container from "@/components/shared/Container";
import cardImage1 from "@/assets/card-slider/1.jpg";
import cardImage2 from "@/assets/card-slider/2.jpg";
import CategoryMobileMenu from "@/components/home/CategoryMobileMenu/CategoryMobileMenu";
import HomeGames from "@/components/home/HomeGames/HomeGames";

const Home = () => {
  const cardSliders = [
    { id: 1, image: cardImage1 },
    { id: 2, image: cardImage2 },
  ];
  return (
    <div className="md:bg-[#4e4e4e] bg-[#041d3c]">
      <BannerSlider />

      <Container>
        <CategoryMobileMenu />
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 py-6">
          <div className="md:w-1/2 rounded-lg">
            <CardSlider cards={cardSliders} />
          </div>
          <div className="md:w-1/2 rounded-lg">
            <CardSlider cards={cardSliders} />
          </div>
        </div>
        <HomeGames />
      </Container>
    </div>
  );
};

export default Home;

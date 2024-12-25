import Container from "@/components/shared/Container";
import { useParams } from "react-router-dom";

const games = [
  {
    id: 1,
    image:
      "https://img.b112j.com/upload/game/EVO/crazytime@CrazyTime0000001.png?v=1717402263065",
    title: "Evolution Crazy Time",
    subtitle: "Crazy",
    demo: "https://demo.spribe.io/launch/aviator?currency=BDT&lang=EN",
  },
  {
    id: 2,
    image:
      "https://img.b112j.com/upload/game/EVO/sicbo@SuperSicBo000001.png?v=1717463157508",
    title: "Evolution Super Sic Bo",
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
const DemoGame = () => {
  const { id } = useParams();

  const selectedGame = games?.find((game) => game.id == id);

  return (
    <div className="bg-[#4e4e4e]">
      <Container>
        <iframe
          className="w-full max-h-[700px] h-[700px]"
          src={selectedGame?.demo}
          frameBorder="0"
        ></iframe>
      </Container>
    </div>
  );
};

export default DemoGame;
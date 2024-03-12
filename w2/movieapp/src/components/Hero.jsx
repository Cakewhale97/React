import { TypeAnimation } from "react-type-animation";
import FetchRandomMoviePoster from "../FetchRandomMoviePoster";
import "../styles/Hero.css";
import "@fontsource/roboto";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ScrollToContent from "./ScrollToContent";

export default function Hero() {
  return (
    <div className="Hero">
      <div className="HeroMain">
        <div className="HeroText">
          <h1 className="HeroTitle">HUB</h1>
          <TypeAnimation
            sequence={[
              "Welcome to Hub",
              2000,
              "The Perfect Place For Your Favourite Movies & Shows",
              2000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "2.5em",
              display: "inline-block",
              fontFamily: "Roboto, sans-serif",
              fontWeight: "bold",
              margin: "0",
            }}
            repeat={Infinity}
            className="TypeAnimation"
          />
          <h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit iusto
            aspernatur quas veritatis dignissimos ea impedit doloremque
            molestiae autem beatae. Sed{" "}
          </h3>
        </div>
        <div className="HeroImage">
          <FetchRandomMoviePoster />
        </div>
        <ScrollToContent />
      </div>
    </div>
  );
}

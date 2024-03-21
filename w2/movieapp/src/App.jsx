import "./App.css";
import Header from "./components/Header";
import MovieApi from "./MovieApi";
import Hero from "./components/Hero";
import "./styles/Main.css";
import ScrollToContent from "./components/ScrollToContent";
import "./styles/Hero.css";
import MoviePage from "./components/MoviePage";
import { Movie } from "@mui/icons-material";
import MovieFilter from "./components/MovieFilter";
import "../src/styles/MovieFilter.css";
import Footer from "./components/Footer";
import "./styles/Footer.css";

function App() {
  return (
    <div className="App">
      <div className="AppHeader">
      </div>

      <div className="MainHero">
        <Hero />
      </div>
      <MoviePage />

      <Footer />
    </div>
  );
}

export default App;

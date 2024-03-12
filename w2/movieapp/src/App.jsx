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

function App() {
  return (
    <div className="App">
      <div className="AppHeader">
        <Header />
      </div>

      <div className="MainHero">
        <Hero />
      </div>
      <MoviePage />

      
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "../Hero/Hero";
import Menu from "../Menu/Menu";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
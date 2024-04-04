import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AddCard from "./pages/AddCard.jsx";

function App() {
  return (
    <div className="App">
      <header className="AppHeader">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-card" element={<AddCard />}  />
        </Routes>
      </header>
    </div>
  );
}

export default App;

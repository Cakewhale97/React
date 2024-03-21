import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Tickets from "./Tickets";
import Events from "./Events";
import Buy from "./Buy";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Events />} />
          <Route path="/Buy" element={<Buy />} />
          <Route path="/Tickets" element={<Tickets />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

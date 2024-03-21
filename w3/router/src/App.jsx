import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { routes } from "./routes/RouterMap";
import "./App.css";

function App() {
  return (
    <div className="Header">
      <Router>
        <nav className="nav-bar">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Meme Generator
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/MemeList" className="nav-link">
                Meme List
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

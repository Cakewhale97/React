import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "../Hero";
import Menu from "../Menu";
import Cart from "../Cart"

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
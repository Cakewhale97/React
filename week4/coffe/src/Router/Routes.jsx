import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import the components for each of your routes
import Hero from "../Hero";
import Menu from "../Menu";
import Cart from "../Cart";
import Nav from "../Nav"
import OrderStatus from "../OrderStatus";

//Define a component for your apps router. 
const AppRouter = () => {
    return (
        // Wrap eveything in a Router component.  This sets up the context for routing. 
        <Router>
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/orderstatus" element={<OrderStatus />} />
                <Route path="/nav" element={<Nav />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
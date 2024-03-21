import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Movie from "../Movie";
import Series from "../Series";
import Header from "../components/Header";
import App from "../App";
import Book from "../components/Book";

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/movie" element={<Movie />} />
        <Route path="/series" element={<Series />} />
        <Route path="/" element={<App />} />
        <Route path="/book/:bookId" element={<Book />} />
      </Routes>
    </Router>
  );
}
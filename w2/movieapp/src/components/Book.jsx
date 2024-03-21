import "../styles/Book.css";
import { useNavigate, useLocation, useParams } from "react-router-dom";

export default function Book() {
    const { title } = useParams();

    const location = useLocation();
    const navigate = useNavigate();

    if (!location.state) {
        navigate("/movie"); 
        return null; 
      }


      const book = location.state.book;


    return (
        <div className="BookInfo">
            <div className="backBtn">
                <button onClick={() => navigate(-1)}>Back</button>
            </div>
            <div className="BigBook">
                <div className="line"></div>
                <div className="bookdetails">
                    <h1>{book.title}</h1>
                    <p>{book.author}</p>
                </div>
            </div>
            <div className="BookDesc">
                <h1>{book.title}</h1>
                <p>By {book.author}</p>
                <p>{book.plot}</p>
                <div className="BookDescBox">
                    <p>{book.audience}</p>
                    <p>Pages: {book.pages}</p>
                </div>
            </div>
        </div>
    );
}
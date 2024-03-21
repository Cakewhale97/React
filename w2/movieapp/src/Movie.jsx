import { useState, useEffect } from "react";
import "./styles/Movie.css";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import Grid from "@mui/material/Grid";

export default function Movie() {
  const [bookList, setBookList] = useState([]);
  const navigate = useNavigate();

  const handleBookList = () => {
    axios
      .get(
        "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books"
      )
      .then((response) => {
        setBookList(response.data);
        console.log(response.data);
      });
  };

  useEffect(() => {
    handleBookList();
  }, []);

  const handleClick = (book) => {
    const title = book.title.replace(/\s+/g, "-").toLowerCase(); 
    navigate(`/Book/${title}`, { state: { book } });
  };

  return (
    <div className="BookContainer">
      <div className="BookTitle">
        <div className="Title">
          <h1>8 Classic Children Books</h1>
        </div>

        <Grid container spacing={2}>
          {bookList.map((book, index) => (
            <Grid item xs={3} key={index}>
              <div
                className={`book book-${index}`}
                onClick={() => handleClick(book)}
              >
                <h2>{book.title}</h2>
                <p>{book.author}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

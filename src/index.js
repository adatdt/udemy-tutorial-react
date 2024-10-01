import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { books } from "./books";
import Book from "./Book";

const BookList = () => {
  return (
    <>
      <h1>amazon Best Saller</h1>
      <section className="bookList">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} index={index + 1}></Book>;
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

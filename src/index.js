import React from "react";
import ReactDOM from "react-dom/client";

import './index.css'
const BookList = () =>{
  return (<section className="bookList">
    <Book />
    <Book />
    <Book />
    <Book />

  </section>);
}

const Book = () =>{
  return (<article className="book">
    <Image />
    <Title />
    <Author />
  </article>);
}

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/71KTwO53SnL._AC_UL381_SR381,381_.jpg" 
alt="Good Energy: The Surprising Connection Between Metabolism and Limitless Health"/>;
const Title = () => <h2>Good Energy: The Surprising Connection Between Metabolism and Limitless Health</h2>;
const Author = () => {
  return <h4> Casey Means MD</h4>;
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList/>);

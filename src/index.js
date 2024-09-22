import React from "react";
import ReactDOM from "react-dom/client";

import './index.css'

const books = [
  {
    title : "Casey Means MD",
    img: "/images/img1.jpg" ,
    author : "sarah",
    id:1
  },
  {
    title : "Casey Means MD 2",
    img: "/images/img1.jpg",
    author : "jhon",
    id:2 
  }
]

const BookList = () =>{
  return (<section className="bookList">
    {books.map((book) => {
      return <Book {...book} key={book.id}>
    </Book>
    })}    

  </section>);
}

const Book = (props) =>{
  const {img, title, author} = props
  return (<article className="book">
    <img src={img} 
    alt="Good Energy: The Surprising "/>
    <h2>{title}</h2>
    <h4>{author}</h4>

  </article>
  
  );
}

const Image = () => <img src="/images/img1.jpg" 
alt="Good Energy: The Surprising "/>;
const Title = () => <h2>Good Energy: The Surprising </h2>;
const Author = () => {
  const inlineHeadingStyles = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.5rem',
  };
  return <h4 style={inlineHeadingStyles} > Casey Means MD</h4>;
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList/>);

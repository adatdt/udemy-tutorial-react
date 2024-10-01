const Book = (props) => {
  /////console.log(props);
  const { img, title, author, index } = props;

  return (
    <article className="book">
      <img src={img} alt="Good Energy: The Surprising " />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span className="number">{`#${index}`}</span>
    </article>
  );
};

export default Book;

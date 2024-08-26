import React from "react";
import ReactDOM from "react-dom/client";
function Greeting() {
  return <h3>My First Component</h3>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting></Greeting>);

import React from "react";
import ReactDOM from "react-dom/client";

console.log("React script");

const header = React.createElement(
  "h1",
  { id: "header" },
  "Hello World using React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(header);

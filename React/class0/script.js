// Creating an element using DOM
const body = document.querySelector("body");

const h1 = document.createElement("h1");
h1.textContent = "Created by DOM";

body.append(h1);
console.log("D", h1);

// Creating an element using React
const rh1 = React.createElement(
  "h1",
  {
    "data-created-by": "react",
  },
  "Created by REACT",
);
console.log("R", rh1);

const div = document.querySelector("#root");
// const root = ReactDOM.createRoot(div).render(rh1);

const anotherElem = React.createElement("div", {}, [
  React.createElement("h1", {}, React.createElement("span", {}, "I am span")),
  React.createElement("h2", {}, "I am H2"),
]);

const root1 = ReactDOM.createRoot(div).render(anotherElem);

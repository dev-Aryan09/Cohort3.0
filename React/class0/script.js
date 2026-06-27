// Using DOM
const body = document.querySelector("body");

const h1 = document.createElement("h1");
h1.textContent = "Created by DOM";

body.append(h1);
console.log("D", h1);

// Using React
const rh1 = React.createElement(
  "h1",
  {
    "data-created-by": "react",
  },
  "Created by REACT",
);
console.log("R", rh1);

const div = document.querySelector("#root");
const root = ReactDOM.createRoot(div).render(rh1);

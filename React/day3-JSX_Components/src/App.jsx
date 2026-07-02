import React from "react";
import About from "./About";

function App() {
  //React.createElement returns a plain JavaScript object — a React element:
  // let ui = React.createElement("div", null, [
  //   React.createElement("h1", null, "hello"),
  //   React.createElement("h2", null, "bye"),
  //   React.createElement("h3", null, "vaps aao"),
  // ]);
  // return ui;

  // BTS Babel transpiles this JSX to JS as above.
  return (
    <div>
      {/* can also pass an element directly via props */}
      <About name="Aryan" element={<h1>Hello</h1>}>
        <h2>Profile Title</h2>
        <p>This paragraph is passed as a child element.</p>
        <button>Click Me</button>
      </About>
    </div>
  );
}

export default App;

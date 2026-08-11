import React from "react";
import Home from "./Home";

const About = ({ users }) => {
  console.log("About rendering...", performance.now());
  return (
    <div>
      <h1>About rendering...</h1>
    </div>
  );
};

export default React.memo(About);

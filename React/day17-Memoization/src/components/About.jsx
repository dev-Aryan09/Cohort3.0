import React from "react";
import Home from "./Home";

const About = () => {
  console.log("About rendering...", performance.now());
  return (
    <div>
      <h1>About this side</h1>
    </div>
  );
};

export default React.memo(About);

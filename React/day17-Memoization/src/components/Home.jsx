import React from "react";

const Home = () => {
  console.log("Home rendring...", performance.now());
  return (
    <div>
      <h1>Home this side</h1>
    </div>
  );
};

export default React.memo(Home);

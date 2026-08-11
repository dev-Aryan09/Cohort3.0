import React from "react";

const Home = React.memo(() => {
  console.log("Home rendring...", performance.now());
  return (
    <div>
      <h1>Home this side</h1>
    </div>
  );
});

export default Home;

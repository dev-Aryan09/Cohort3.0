import React, { useEffect } from "react";

const About = () => {
  console.log("About rendering...", performance.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Fetching live updates...");
    }, 1000);

    // This is clean-up fn
    // this will be running when a component is UNmounting
    // avoids memory leaks
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div>About page</div>;
};

export default About;

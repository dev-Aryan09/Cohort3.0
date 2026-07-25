import React from "react";
import { Outlet } from "react-router";

const About = () => {
  return (
    <div>
      <h1>This is About Page</h1>
      <Outlet />
    </div>
  );
};

export default About;

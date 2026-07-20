import React, { useState } from "react";
import C1 from "./C1";

const TestComponent = () => {
  const [data, setData] = useState("This is test data");
  return (
    <div>
      <h1>TestComponent</h1>
      <C1 data ={data} />
    </div>
  );
};

export default TestComponent;

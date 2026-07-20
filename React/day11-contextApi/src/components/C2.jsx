import React from "react";
import C3 from "./C3";

const C2 = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>This is component C2</h1>
      <C3 data={data} />
    </div>
  );
};

export default C2;

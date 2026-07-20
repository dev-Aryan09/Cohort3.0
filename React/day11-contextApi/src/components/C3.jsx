import React from "react";
import C4 from "./C4";

const C3 = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>This is component C3</h1>
      <C4 data={data} />
    </div>
  );
};

export default C3;

import React from "react";
import C2 from "./C2";

const C1 = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h2>This is component C1</h2>
      <C2 data={data} />
    </div>
  );
};

export default C1;

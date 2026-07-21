import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const C4 = () => {
  const data = useContext(MyStore);
  console.log(data);
  return <div>This is component C4</div>;
};

export default C4;

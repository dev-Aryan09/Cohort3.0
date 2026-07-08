import React from "react";
import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import UserCard from "./components/UserCard";

const App = () => {
  const [flag, setFlag] = useState(false);
  const [users, setUsers] = useState([]);
  console.log("users", users);

  return (
    <div className="bg-gray-300 h-screen flex justify-center items-center">
      {flag ? (
        <Login setFlag={setFlag} />
      ) : (
        <Register setFlag={setFlag} setUsers={setUsers} />
      )}
      <UserCard/>
    </div>
  );
};

export default App;

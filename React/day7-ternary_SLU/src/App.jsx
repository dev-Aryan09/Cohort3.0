import React from "react";
import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import UserCard from "./components/UserCard";

const App = () => {
  const [flag, setFlag] = useState(false);
  const [users, setUsers] = useState([]);

  return (
    <div className="bg-gray-300 h-screen ">
      <Register setFlag={setFlag} setUsers={setUsers} />

      <div className="flex gap-4">
        {users.map((user, idx) => {
          return <UserCard user={user} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default App;

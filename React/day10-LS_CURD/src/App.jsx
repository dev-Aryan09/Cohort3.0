import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });
  // console.log("users", users);

  const [updatedUser, setUpdatedUser] = useState({});

  const deleteUser = (id) => {
    let filteredUsers = users.filter((user) => {
      return user.id !== id;
    });
    console.log(filteredUsers);
    setUsers(filteredUsers);
    localStorage.setItem("users", JSON.stringify(filteredUsers));
  };

  return (
    <div className="p-3 min-h-screen bg-[#FFE8B4] flex flex-col gap-4 ">
      <Navbar toggle={toggle} setToggle={setToggle} />
      {toggle ? (
        <div className="flex gap-4 flex-wrap">
          {users.length !== 0 ? (
            users.map((user, idx) => {
              return (
                <UserCard
                  deleteUser={deleteUser}
                  key={idx}
                  user={user}
                  setToggle={setToggle}
                  setUpdatedUser={setUpdatedUser}
                />
              );
            })
          ) : (
            <h2 className="m-auto text-white text-4xl font-extrabold">
              No user added yet
            </h2>
          )}
        </div>
      ) : (
        <div className="self-center">
          <Form
            users={users}
            setUsers={setUsers}
            setToggle={setToggle}
            updatedUser={updatedUser}
            setUpdatedUser={setUpdatedUser}
          />
        </div>
      )}
    </div>
  );
};

export default App;

import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="w-fit p-4 border-gray-400 rounded bg-white flex flex-col gap-4 mt-5">
      <div className="w-50 h-60 rounded-2xl overflow-hidden">
        <img className="w-full h-full" src={user.image} alt="" />
      </div>
      <div>
        <h1>{user.username}</h1>
        <p>{user.email}</p>
      </div>
      <button>Delete</button>
    </div>
  );
};

export default UserCard;

import React from "react";

const UserCard = ({ user, setToggle, index, deleteUser }) => {
  return (
    <div className="h-fit w-50 p-2 border-white rounded bg-[#5E244E] flex flex-col gap-3">
      <div className="h-50 flex justify-center">
        <img
          className=" rounded h-full w-full object-cover"
          src={user.image}
          alt=""
        />
      </div>
      <div className="text-white flex flex-col gap-1">
        <h1 className="font-semibold">{user.name}</h1>
        <p className="text-sm">{user.email}</p>
        <p className="text-sm">{user.mobile}</p>
      </div>
      <div className="text-white flex justify-between">
        <button
          onClick={() => {
            setToggle((prev) => !prev);
          }}
          className="px-2 py-1 bg-green-700 rounded text-sm cursor-pointer"
        >
          Update
        </button>
        <button
          onClick={() => deleteUser(index)}
          className="px-2 py-1 bg-red-700 rounded text-sm cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;

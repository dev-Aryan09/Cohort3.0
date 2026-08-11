import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-neutral-100 shadow-sm rounded-lg p-6 max-w-sm mx-auto border border-gray-400">
      {/* Header */}
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gray-100 text-gray-700 flex items-center justify-center border border-gray-400 rounded-full text-xl font-semibold">
          {user.name.firstname[0].toUpperCase()}
        </div>
        <div className="ml-4">
          <h2 className="text-lg font-medium text-gray-900">
            {user.name.firstname} {user.name.lastname}
          </h2>
          <p className="text-gray-500 text-sm">@{user.username}</p>
        </div>
      </div>

      {/* Body */}
      <div className="space-y-2 text-gray-700 text-sm">
        <p>
          <span className="font-medium">Email:</span> {user.email}
        </p>
        <p>
          <span className="font-medium">Phone:</span> {user.phone}
        </p>
        <p>
          <span className="font-medium">Address:</span> {user.address.number},{" "}
          {user.address.street}, {user.address.city}, {user.address.zipcode}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-6 flex justify-end space-x-3">
        <button className="px-3 py-1 border-2 border-blue-400 rounded-md text-gray-600 hover:bg-gray-100 transition cursor-pointer">
          Edit
        </button>
        <button className="px-3 py-1 border-2 border-red-400 rounded-md text-gray-600 hover:bg-gray-100 transition cursor-pointer">
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;

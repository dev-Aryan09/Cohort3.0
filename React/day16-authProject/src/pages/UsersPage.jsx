import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";

const UsersPage = () => {
  console.log("Users page rendering...", performance.now());

  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUsersData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/users");
      setUsersData(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log("Users api error", error);
    }
  };

  useEffect(() => {
    getUsersData();
  }, []);

  if (isLoading)
    return <h1 className="text-3xl font-bold">Loading Users...</h1>;

  return (
    <div className="grid grid-cols-4 gap-4">
      {usersData.map((user) => {
        return <UserCard key={user.id} user={user} />;
      })}
    </div>
  );
};

export default UsersPage;

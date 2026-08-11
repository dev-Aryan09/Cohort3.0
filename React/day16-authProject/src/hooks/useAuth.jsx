import React, { useContext } from "react";
import { AuthStore } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

const useAuth = () => {
  const { setLoggedInUser, registeredUsers, setRegisteredUsers } =
    useContext(AuthStore);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const loginFormSubmit = (data) => {
    // 'data' is coming from login page,
    // using this 'data' finding the user inside our registered users
    const user = registeredUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
    });

    if (!user) {
      alert("Invalid access, Please enter valid credentials");
      reset();
      return;
    }

    setLoggedInUser(user);
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    reset();
    navigate("/main");
  };

  const registerFormSubmit = (data) => {
    let arr = [...registeredUsers, data];
    setRegisteredUsers(arr);
    alert("user registered successfully");
    localStorage.setItem("registeredUsers", JSON.stringify(arr));

    reset();
  };

  return {
    register,
    handleSubmit,
    errors,
    navigate,
    setLoggedInUser,
    registeredUsers,
    loginFormSubmit,
    registerFormSubmit,
    setRegisteredUsers,
  };
};

export default useAuth;

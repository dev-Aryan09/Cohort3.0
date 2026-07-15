import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ users, setUsers, setToggle }) => {
  // console.log("Form rendering", performance.now());

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    // defaultValues: {
    //   name: "Aryan",
    //   email: "aryan@gmail.com",
    //   mobile: "1111111111",
    //   image:
    //     "https://images.unsplash.com/photo-1783359059225-7794089174bc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
  });

  const formSubmit = (data) => {
    // setUsers([...users, data]);
    // localStorage.setItem("users", JSON.stringify(users));

    let arr = [...users, data];
    setUsers(arr);
    localStorage.setItem("users", JSON.stringify(arr));
    reset();
    setToggle((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-4 w-100 p-4 border-2 border-white bg-[#ffefc9] rounded">
      <h1 className="text-[#ad0c37] text-xl font-semibold m-auto">
        Create User
      </h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="flex flex-col gap-4 text-gray-600"
      >
        <input
          {...register("name", {
            required: "Name is required",
            pattern: {
              value: /^(?!\s*$).+/,
              message: "Empty spaces are not allowed",
            },
          })}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Name"
        />
        {errors.name && (
          <p className="text-xs text-red-600 -mt-3">{errors.name.message}</p>
        )}
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please provide a valid email",
            },
          })}
          className="p-2 border border-gray-400 rounded"
          type="email"
          placeholder="Email"
        />
        {errors.email && (
          <p className="text-xs text-red-600 -mt-3">{errors.email.message}</p>
        )}
        <input
          {...register("mobile", {
            required: "Mobile no. is required",
            minLength: {
              value: 10,
              message: "Minimum 10 digits are required",
            },
            maxLength: {
              value: 10,
              message: "Maximum 10 digits are required",
            },
          })}
          className="p-2 border border-gray-400 rounded"
          type="number"
          placeholder="Mobile"
        />
        {errors.mobile && (
          <p className="text-xs text-red-600 -mt-3">{errors.mobile.message}</p>
        )}
        <input
          {...register("image", {
            required: "Image is required",
          })}
          className="p-2 border border-gray-400 rounded"
          type="url"
          placeholder="Image Url"
        />
        {errors.image && (
          <p className="text-xs text-red-600 -mt-3">{errors.image.message}</p>
        )}
        <button className="rounded w-fit px-3 py-2 bg-[#E68457] text-white cursor-pointer m-auto">
          Add User
        </button>
      </form>
    </div>
  );
};

export default Form;

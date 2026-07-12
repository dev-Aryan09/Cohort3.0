import React from "react";
import { useForm } from "react-hook-form";

const RHF = () => {
  console.log("RFH rendering");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formData = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="w-80 h-screen">
      <h1>REACT HOOK FORM</h1>
      <form
        onSubmit={handleSubmit(formData)}
        className="flex p-6 rounded bg-cyan-100 flex-col gap-5"
      >
        <input
          {...register("productName")}
          className="p-2 border"
          type="text"
          placeholder="Product name"
        />
        <input
          {...register("price")}
          className="p-2 border"
          type="text"
          placeholder="Price"
        />
        <input
          {...register("category")}
          className="p-2 border"
          type="text"
          placeholder="Category"
        />
        <input
          {...register("image")}
          className="p-2 border"
          type="text"
          placeholder="image"
        />
        <button className="p-2 bg-green-500 text-white rounded-xl uppercase">
          create
        </button>
      </form>
    </div>
  );
};

export default RHF;

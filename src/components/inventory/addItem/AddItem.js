import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import "./AddItem.css";
import auth from "../../../firebase.init";

const AddItem = () => {
  const [user] = useAuthState(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const inventory = {
      sold: 0,
      name: data.name,
      quantity: data.quantity,
      price: data.price,
      email: data.email,
      supplierName: data.supplier,
      image: data.image,
    };
    fetch("  http://localhost:8080/add-inventory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inventory),
    })
      .then((res) => res.json(res))
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div style={{ height: "60vh" }} className="container mt-5 mb-5">
      <h1 className="text-center mb-4">Add here a New Product</h1>
      <form
        className="w-50 h-75 m-auto d-flex flex-column justify-content-center align-items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="w-75 input"
          placeholder="Email Address"
          defaultValue={user && user?.email}
          {...register("email", { required: true })}
        />
        <input
          className="w-75 input"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        <input
          className="w-75 input"
          defaultValue={user && user?.displayName}
          placeholder="Supplier name"
          {...register("supplier", { required: true })}
        />
        <input
          className="w-75 input"
          placeholder="Image"
          {...register("image", { required: true })}
        />
        {errors.image && <span>Image must required!</span>}
        <input
          className="w-75 input"
          placeholder="Price"
          {...register("price", { required: true })}
        />
        <input
          className="w-75 input"
          placeholder="quantity"
          {...register("quantity", { required: true })}
        />
        {errors.quantity && <span>quantity required!</span>}
        <input className="w-75 input submitBtn" type="submit" />
      </form>
    </div>
  );
};

export default AddItem;

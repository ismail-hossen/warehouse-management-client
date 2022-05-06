import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
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
    fetch("http://localhost:8080/add-inventory", {
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
      <form
      style={{ height: "100%", border: '1px solid black' }}
        className="d-flex flex-column w-75 m-auto align-content-around justify-content-evenly"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          placeholder="Email Address"
          defaultValue={user && user?.email}
          {...register("email", { required: true })}
        />
        <input placeholder="Name" {...register("name", { required: true })} />
        <input
          defaultValue={user && user?.displayName}
          placeholder="Supplier name"
          {...register("supplier", { required: true })}
        />
        <input placeholder="Image" {...register("image", { required: true })} />
        {errors.image && <span>Image must required!</span>}
        <input placeholder="Price" {...register("price", { required: true })} />
        <input
          placeholder="quantity"
          {...register("quantity", { required: true })}
        />
        {errors.quantity && <span>quantity required!</span>}
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddItem;

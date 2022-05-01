import React from "react";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const inventory = {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Email Address"
        defaultValue="ssa"
        {...register("email", { required: true })}
      />
      <input placeholder="Name" {...register("name", { required: true })} />
      <input
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
  );
};

export default AddItem;

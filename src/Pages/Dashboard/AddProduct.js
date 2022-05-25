import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const navigate = useNavigate();
  const imgStorageKey = "5812e35273814437e5f10dedd616b9a8";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const product = {
            name: data.name,
            description: data.description,
            price: data.price,
            stock: data.stock,
            minOrder: data.orderQuantity,
            img: img,
          };
          console.log(product)
          fetch(`http://localhost:5000/product`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Add product successfully");
                reset();
                navigate("/dashboard/manageproducts")
              } else {
                toast.error("Fail to add product");
              }
            });
        }
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-1 justify-items-center mt-2"
      >
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            placeholder="Product Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Your Description</span>
          </label>
          <textarea
            class="textarea textarea-bordered"
            placeholder="write description "
            {...register("description", {
              required: {
                value: true,
                message: "Description is Required",
              },
            })}
          ></textarea>

          <label className="label">
            {errors.description?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.description.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            placeholder="Product Price"
            className="input input-bordered w-full max-w-xs"
            {...register("price", {
              required: {
                value: true,
                message: "Price is Required",
              },
            })}
          />
          <label className="label">
            {errors.price?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.price.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Stock</span>
          </label>
          <input
            type="text"
            placeholder="Your Phone Number"
            className="input input-bordered w-full max-w-xs"
            {...register("stock", {
              required: {
                value: true,
                message: "Stock is Required",
              },
            })}
          />
          <label className="label">
            {errors.stock?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.stock.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Minimum order Quantity</span>
          </label>
          <input
            type="text"
            placeholder="Minimum order Quantity"
            className="input input-bordered w-full max-w-xs"
            {...register("orderQuantity", {
              required: {
                value: true,
                message: "Minimum order Quantity is Required",
              },
            })}
          />
          <label className="label">
            {errors.orderQuantity?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.orderQuantity.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            className="input input-bordered w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: "Image is Required",
              },
            })}
          />
          <label className="label">
            {errors.image?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.image.message}
              </span>
            )}
          </label>
        </div>
        <input
          className="btn w-full max-w-xs text-white"
          type="submit"
          value="ADD PRODUCT"
        />
      </form>
    </div>
  );
};

export default AddProduct;

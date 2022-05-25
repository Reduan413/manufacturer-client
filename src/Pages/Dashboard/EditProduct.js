import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";

const EditProduct = () => {
  const { id } = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const {
    isLoading,
    error,
    data: product,
    refetch,
  } = useQuery("available", () =>
    fetch(`http://localhost:5000/product/${id}`).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  const { _id, name, img, description, stock, minOrder, price } = product[0];

  const onSubmit = async (data) => {
    const newStock = data.stock;
    const total = parseInt(stock) + parseInt(newStock);
    console.log(total);
    const product = {
      stock: total,
      price: data.price,
      minOrder: data.orderQuantity,
    };
    fetch(`http://localhost:5000/product/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        reset();
        refetch();
      });
  };
  return (
    <div class="flex w-full   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
      <div class="grid  flex-grow card   rounded-box place-items-center">
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
          <div className="card-body text-center ">
            <img className="w-32 m-auto" src={img} alt="" />
            <h2 className="text-xl font-bold text-secondary">{name}</h2>
            <p className="text-justify">{description}</p>
            <p>
              <small className="text-2xl ">Price: {price}TK</small>
              <small className="text-2xl ml-3 ">Available: {stock}pc</small>
            </p>
            <p>
              <small className="text-2xl ml-3 ">
                Minimum Order: {minOrder}pc
              </small>
            </p>
          </div>
        </div>
      </div>

      <div class="grid  flex-grow card   rounded-box place-items-center h-auto mt-12 mb-12">
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
          <div className="card-body text-center ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-1 justify-items-center mt-2"
            >
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
                  <span className="label-text">Re-Stock</span>
                </label>
                <input
                  type="text"
                  placeholder="Re-Stock Quantity"
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

              <input
                className="btn w-full max-w-xs text-white"
                type="submit"
                value="UPDATE PRODUCT"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;

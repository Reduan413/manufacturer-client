import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ProductRow from "./ProductRow";

const ManageProducts = () => {
  const {
    isLoading,
    error,
    data: products,
    refetch,
  } = useQuery("available", () =>
    fetch(`http://localhost:5000/product`).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div class="overflow-x-auto w-full">
      <table class="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>

            <th>Price</th>
            <th>Stock</th>
            <th>Min order</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <ProductRow
              index={index}
              key={product._id}
              product={product}
              //setPurchaser={setPurchaser}
            ></ProductRow>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ManageProducts;

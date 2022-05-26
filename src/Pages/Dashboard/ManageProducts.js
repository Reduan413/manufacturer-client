import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ProductDeleteModal from "./ProductDeleteModal";
import ProductRow from "./ProductRow";

const ManageProducts = () => {
  const [deletingProduct, setDeletingProduct] = useState(null);
  const {
    isLoading,
    error,
    data: products,
    refetch,
  } = useQuery("available", () =>
    fetch(`https://rocky-dusk-15979.herokuapp.com/product`).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-2xl m-2">All Product</h1>
      <div  className="overflow-x-auto w-full">
        <table  className="table w-full">
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
                setDeletingProduct={setDeletingProduct}
              ></ProductRow>
            ))}
          </tbody>

          
        </table>
      </div>
      {deletingProduct && (
        <ProductDeleteModal
          deletingProduct={deletingProduct}
          refetch={refetch}
          setDeletingProduct={setDeletingProduct}
        ></ProductDeleteModal>
      )}
    </div>
  );
};

export default ManageProducts;

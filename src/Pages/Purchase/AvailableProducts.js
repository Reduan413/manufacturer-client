import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import AvailableProduct from "./AvailableProduct";

const AvailableProducts = () => {
  const [order, setOrder] = useState(null);
  const {
    isLoading,
    error,
    data: products,
    refetch,
  } = useQuery("available", () =>
    fetch(`products.json`).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="my-10 px-12">
      <h2 className="text-5xl font-bold text-secondary text-center my-8">
        All Products ({products.length})
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <AvailableProduct
            key={product.id}
            product={product}
          ></AvailableProduct>
        ))}
      </div>
    </div>
  );
};

export default AvailableProducts;

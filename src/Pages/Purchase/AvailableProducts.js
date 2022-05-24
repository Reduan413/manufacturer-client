import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import AvailableProduct from "./AvailableProduct";
import PurchaseModal from "./PurchaseModal";

const AvailableProducts = () => {
  const [purchase, setPurchaser] = useState(null);
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
    <div className="my-10 px-12">
      <h2 className="text-5xl font-bold text-secondary text-center my-8">
        All Products ({products.length})
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <AvailableProduct
            key={product._id}
            product={product}
            setPurchaser={setPurchaser}
          ></AvailableProduct>
        ))}
      </div>
      {purchase && (
        <PurchaseModal
          purchase={purchase}
          setPurchaser={setPurchaser}
          refetch={refetch}
        ></PurchaseModal>
      )}
    </div>
  );
};

export default AvailableProducts;
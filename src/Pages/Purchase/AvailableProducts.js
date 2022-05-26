import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import AvailableProduct from "./AvailableProduct";
import './Purchase.css';
import PurchaseModal from "./PurchaseModal";

const AvailableProducts = () => {
  const [purchase, setPurchaser] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(9);
  useEffect(() => {
    fetch("https://rocky-dusk-15979.herokuapp.com/productCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 9);
        setPageCount(pages);
      });
  }, []);
  const {
    isLoading,
    error,
    data: products,
    refetch,
  } = useQuery(["available", page], () =>
    fetch(`https://rocky-dusk-15979.herokuapp.com/product?page=${page}&size=${size}`).then(
      (res) => res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="my-10 px-12">
      <h2 className="text-5xl font-bold text-secondary text-center my-8">
        All Products 
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
      <div className="pagination">
        {[...Array(pageCount).keys()].map((number) => (
          <button
            className={page === number ? "selected" : ""}
            onClick={() => setPage(number)}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AvailableProducts;

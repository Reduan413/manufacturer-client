import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Shared/Loading";
import Product from "./Product";

const Products = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const feachdata = async () => {
      setIsLoading(true);
      await axios.get("http://localhost:5000/product").then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      });
    };
    feachdata();
  }, []);
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="my-10 px-12">
      <h2 className="text-5xl font-bold text-secondary text-center my-8">
        Products
      </h2>
      <div class="divider"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-xm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary text-center my-8">
          <Link to="/alliters">View MOre Products</Link>
        </button>
      </div>
    </div>
  );
};

export default Products;

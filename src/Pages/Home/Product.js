import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { name, img, description, stock, minOrder, price } = product;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <img className="w-32 m-auto" src={img} alt="" />
        <h2 className="text-xl font-bold text-secondary">{name}</h2>
        <p className="text-justify">{description}</p>
        <p>
          <small className="text-2xl ">Price: {price}TK</small>
          <small className="text-2xl ml-3 ">Available: {stock}pc</small>
        </p>

        <div className="card-actions justify-center">
          <button
            disabled={stock.length === 0}
            className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
          >
            <Link to="/alliters">Buy NOW</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

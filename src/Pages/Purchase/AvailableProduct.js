import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';

const AvailableProduct = ({product, setPurchaser}) => {
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
        <Rating
          initialRating={3.5}
          emptySymbol={<FontAwesomeIcon icon={faStar} />}
          fullSymbol={
            <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
          }
          readonly
        ></Rating>
        <div className="card-actions justify-center">
          <label
            htmlFor='purchase-model'
            disabled={stock.length === 0}
            onClick={() => setPurchaser(product)}
            className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
          >
              Buy NOW
            
          </label>
        </div>
      </div>
    </div>
    );
};

export default AvailableProduct;
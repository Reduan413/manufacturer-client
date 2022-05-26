import { faFilePen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductRow = ({ product, index, setDeletingProduct, refetch }) => {
  const { _id, name, description, img, stock, minOrder, price } = product;

  const navigate = useNavigate();
  const navigateToPackageEdit = (id) => {
    navigate(`editproduct/${id}`);
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div  className="flex items-center space-x-3">
          <div  className="avatar">
            <div  className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div  className="font-bold">{name}</div>
          </div>
        </div>
      </td>

      <td>{price}</td>
      <td>{stock}</td>
      <td>{minOrder}</td>
      <th>
        <button
           className="btn btn-ghost btn-xs"
          onClick={() => navigateToPackageEdit(_id)}
        >
          <FontAwesomeIcon
            style={{ color: "blue" }}
            icon={faFilePen}
            className="fa-2x"
          />
        </button>
        <label
          onClick={() => setDeletingProduct(product)}
            htmlFor="product-delete-confirm-modal"
          className="btn btn-outline btn-error btn-xs border-0"
        >
          <FontAwesomeIcon
            style={{ color: "red" }}
            icon={faTrashCan}
            className="fa-2x"
          />
        </label>
        {/* <button  className="btn btn-ghost btn-xs">
          <FontAwesomeIcon
            style={{ color: "red" }}
            icon={faTrashCan}
            className="fa-2x"
          />
        </button> */}
      </th>
    </tr>
  );
};

export default ProductRow;

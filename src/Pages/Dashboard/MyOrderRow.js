import React from "react";
import { Link } from "react-router-dom";

const MyOrderRow = ({ index, myOrder }) => {
  const { _id, product, quantity, price, total_amount,status,  payment } = myOrder;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{product}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{total_amount}</td>
      <td>{status}</td>
      <td>
        {payment !== "paid" && (
          <Link to={`/dashboard/payment/${_id}`}>
            <button className="btn btn-sm btn-success">Pay</button>
          </Link>
        )}
      </td>
    </tr>
  );
};

export default MyOrderRow;

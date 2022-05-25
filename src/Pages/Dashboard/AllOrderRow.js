import React from "react";

const AllOrderRow = ({ index, allOrder }) => {
  const { _id, product,customerName, quantity, price, total_amount, status,  payment } = allOrder;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{product}</td>
      <td>{customerName}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{total_amount}</td>
      <td>{payment}</td>
      <td>
        {payment == "paid" && (
          <button className="btn btn-sm btn-success">shipting</button>
        )}
        {status !== "shipting" && (
          <p>Done</p>
        )}
      </td>
    </tr>
  );
};

export default AllOrderRow;

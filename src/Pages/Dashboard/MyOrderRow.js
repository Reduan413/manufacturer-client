import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const MyOrderRow = ({ index, myOrder, refetch }) => {
  const {
    _id,
    product,
    quantity,
    price,
    total_amount,
    status,
    payment,
    transactionId,
  } = myOrder;
  const handleAccept = (id) => {
    const order = {
      status: "Accept",
    };
    fetch(`http://localhost:5000/order/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{product}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{total_amount}</td>
      <td>{status}</td>
      <td>
        {payment !== "Paid" && (
          <Link to={`/dashboard/payment/${_id}`}>
            <button className="btn btn-sm btn-success">Pay</button>
          </Link>
        )}
        {status === "Paid" && (
          <div>
            <span className="text-success">Paid</span>
            <p>
              TS Id: <br></br>
              <span className="text-orange-500 font-bold">{transactionId}</span>
            </p>
          </div>
        )}
        {status === "Shipting" && (
          <div>
            <button
              onClick={() => handleAccept(_id)}
              className="btn btn-sm btn-success"
            >
              Accept
            </button>
            <p>
              TS Id: <br></br>
              <span className="text-orange-500 font-bold">{transactionId}</span>
            </p>
          </div>
        )}
        {status === "Accept" && (
          <div>
            <p className="text-blue-600 font-bold">
              <FontAwesomeIcon style={{ color: "blue" }} icon={faCircleCheck} />{" "}
              Done
            </p>
            <p>
              TS Id: <br></br>
              <span className="text-orange-500 font-bold">{transactionId}</span>
            </p>
          </div>
        )}
      </td>
    </tr>
  );
};

export default MyOrderRow;

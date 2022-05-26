import { faCircleCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const MyOrderRow = ({ index, myOrder, refetch, setDeletingOrder }) => {
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
    fetch(`https://rocky-dusk-15979.herokuapp.com/order/${_id}`, {
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
          <>
            <label
              onClick={() => setDeletingOrder(myOrder)}
              htmlFor="order-delete-confirm-modal"
              className="btn btn-outline btn-error btn-xs border-0"
            >
              <FontAwesomeIcon
                style={{ color: "red" }}
                icon={faTrashCan}
                className="fa-2x"
              />
            </label>
            <Link to={`/dashboard/payment/${_id}`}>
              <button className="btn btn-sm btn-success">Pay</button>
            </Link>
          </>
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
        {status === "Shipped" && (
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

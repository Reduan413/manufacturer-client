import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AllOrderRow = ({ index, allOrder, refetch }) => {
  const {
    _id,
    product,
    customerName,
    quantity,
    price,
    total_amount,
    status,
    payment,
  } = allOrder;

  const handleConform = (id) => {
    const order = {
      status: "Conform",
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
  const handleShipting = (id) => {
    const order = {
      status: "Shipting",
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
      <td>{customerName}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{total_amount}</td>
      <td>{payment}</td>
      <td>
        {status === "Not Paid" && <p className="text-green-600">Pending</p>}
        {status === "Pending" && (
          <button
            onClick={() => handleConform(_id)}
            className="btn btn-sm btn-info"
          >
            Conform
          </button>
        )}
        {status === "Conform" && (
          <button
            onClick={() => handleShipting(_id)}
            className="btn btn-sm btn-success"
          >
            Shipting
          </button>
        )}
        {status === "Shipting" && (
          <p className="text-yellow-600">Shipting...</p>
        )}
        {status === "Accept" && (
          <p className="text-blue-600 font-bold">
            <FontAwesomeIcon style={{ color: "blue" }} icon={faCircleCheck} />{" "}
            Done
          </p>
        )}
      </td>
    </tr>
  );
};

export default AllOrderRow;

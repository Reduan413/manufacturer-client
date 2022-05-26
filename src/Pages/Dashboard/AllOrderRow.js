import { faCircleCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AllOrderRow = ({ index, allOrder, refetch, setDeletingOrder }) => {
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
  const handleShipting = (id) => {
    const order = {
      status: "Shipped",
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
      <td>{customerName}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{total_amount}</td>
      <td>{payment}</td>
      <td>
        {status === "Not Paid" && (
          <>
            <label
              onClick={() => setDeletingOrder(allOrder)}
              htmlFor="order-delete-confirm-modal"
              className="btn btn-outline btn-error btn-xs border-0"
            >
              <FontAwesomeIcon
                style={{ color: "red" }}
                icon={faTrashCan}
                className="fa-2x"
              />
            </label>
            <p className="text-green-600">Pending</p>
          </>
        )}
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
            Shippeing
          </button>
        )}
        {status === "Shipped" && <p className="text-yellow-600">Shipped...</p>}
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

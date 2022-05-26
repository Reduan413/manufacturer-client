import React from "react";
import { toast } from "react-toastify";

const OrderDeleteModal = ({ deletingOrder, refetch, setDeletingOrder }) => {
  const { _id, product } = deletingOrder;
  const handleDelete = (email) => {
    fetch(`https://rocky-dusk-15979.herokuapp.com/order/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`Order: ${product} is deleted.`);
          setDeletingOrder(null);
          refetch();
        }
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="order-delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Are you sure you want to delete {product} Order!
          </h3>

          <div className="modal-action">
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-outline btn-error btn-sm "
            >
              Remove Order
            </button>
            <label
                htmlFor="order-delete-confirm-modal"
              className="btn btn-outline btn-sm"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDeleteModal;

import React from "react";
import { toast } from "react-toastify";

const ProductDeleteModal = ({
  deletingProduct,
  refetch,
  setDeletingProduct,
}) => {
  const { _id, name } = deletingProduct;
  const handleDelete = (email) => {
    fetch(`https://rocky-dusk-15979.herokuapp.com/product/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`Product: ${name} is deleted.`);
          setDeletingProduct(null);
          refetch();
        }
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="product-delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Are you sure you want to delete {name}!
          </h3>

          <div className="modal-action">
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-outline btn-error btn-sm "
            >
              Remove Product
            </button>
            <label
                htmlFor="product-delete-confirm-modal"
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

export default ProductDeleteModal;

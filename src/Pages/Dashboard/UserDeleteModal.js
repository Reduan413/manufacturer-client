import React from "react";
import { toast } from "react-toastify";

const UserDeleteModal = (deletingUser, refetch, setDeletingUser) => {
  const { _id, name } = deletingUser.deletingUser;
  const handleDelete = (email) => {
    fetch(`http://localhost:5000/user/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`User: ${name} is deleted.`);
          setDeletingUser(null);
          refetch();
          setDeletingUser(null)
        }
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="user-delete-confirm-modal"
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
              Remove User
            </button>
            <label
              for="user-delete-confirm-modal"
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

export default UserDeleteModal;

import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, index, refetch, setDeletingUser }) => {
  const { _id,email, userName, role } = user;
  const makeAdmin = () => {
    fetch(`https://rocky-dusk-15979.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Successfully make an admin");
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{userName}</td>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button
            onClick={makeAdmin}
            className="btn btn-outline btn-info btn-xs"
          >
            Make Admin
          </button>
        )}
      </td>
      <td>
        <label
          onClick={() => setDeletingUser(user)}
            htmlFor="user-delete-confirm-modal"
          className="btn btn-outline btn-error btn-xs border-0"
        >
          Remove user
        </label>
      </td>
    </tr>
  );
};

export default UserRow;

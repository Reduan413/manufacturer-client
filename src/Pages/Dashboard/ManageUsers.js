import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserDeleteModal from "./UserDeleteModal";
import UserRow from "./UserRow";

const ManageUsers = () => {
  const [deletingUser, setDeletingUser] = useState(null);
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://rocky-dusk-15979.herokuapp.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-2xl m-2">All User</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>User Name</th>
                <th>email</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <UserRow
                  key={user._id}
                  user={user}
                  index={index}
                  refetch={refetch}
                  setDeletingUser={setDeletingUser}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {deletingUser && (
        <UserDeleteModal
          deletingUser={deletingUser}
          refetch={refetch}
          setDeletingUser={setDeletingUser}
        ></UserDeleteModal>
      )}
    </div>
  );
};

export default ManageUsers;

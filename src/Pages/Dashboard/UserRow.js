import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user, index, refetch}) => {
    const { email,userName, role } = user;
    const makeAdmin = () =>{
        fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
          if(res.status === 403){
              toast.error('Failed to Make an admin')
          }
          return res.json()
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Successfully make an admin");
        }
      });
    }
    return (
        <tr>
      <th>{index + 1}</th>
      <td>{userName}</td>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button  className="btn btn-outline btn-info btn-xs">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-outline btn-error btn-xs">Remove user</button>
      </td>
    </tr>
    );
};

export default UserRow;
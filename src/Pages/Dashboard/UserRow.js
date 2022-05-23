import React from 'react';

const UserRow = ({user, index}) => {
    const { email,userName, role } = user;
    return (
        <tr>
      <th>{index + 1}</th>
      <td>{userName}</td>
      <td>{email}</td>
      <td>
        {/* {role !== "admin" && (
          <button  className="btn btn-outline btn-info btn-xs">
            Make Admin
          </button>
        )} */}
      </td>
      <td>
        <button className="btn btn-outline btn-error btn-xs">Remove user</button>
      </td>
    </tr>
    );
};

export default UserRow;
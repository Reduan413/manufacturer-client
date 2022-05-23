import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const ManageUsers = () => {
    const {
        data: users,
        isLoading,
        refetch,
      } = useQuery("users", () =>
        fetch("http://localhost:5000/user", {
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
      <h1 className="text-2xl">All Users {users.length}</h1>
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
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
};

export default ManageUsers;
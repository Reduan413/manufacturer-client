import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import AllOrderRow from "./AllOrderRow";
import OrderDeleteModal from "./OrderDeleteModal";

const ManageOrders = () => {
  const [user] = useAuthState(auth);
  const [deletingOrder, setDeletingOrder] = useState(null);
  const navigate = useNavigate();

  const {
    isLoading,
    error,
    data: allOrders,
    refetch,
  } = useQuery("available", () =>
    fetch(`https://rocky-dusk-15979.herokuapp.com/allorder`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/");
      }
      return res.json();
    })
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-2xl m-2">All Orders</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Customer Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((allOrder, index) => (
              <AllOrderRow
                key={allOrder._id}
                index={index}
                allOrder={allOrder}
                refetch={refetch}
                setDeletingOrder={setDeletingOrder}
              ></AllOrderRow>
            ))}
          </tbody>
        </table>
      </div>
      {deletingOrder && (
        <OrderDeleteModal
        deletingOrder={deletingOrder}
          refetch={refetch}
          setDeletingOrder={setDeletingOrder}
        ></OrderDeleteModal>
      )}
    </div>
  );
};

export default ManageOrders;

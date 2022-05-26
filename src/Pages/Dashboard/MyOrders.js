import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import MyOrderRow from "./MyOrderRow";
import OrderDeleteModal from "./OrderDeleteModal";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [deletingOrder, setDeletingOrder] = useState(null);
  const navigate = useNavigate();
  const {
    isLoading,
    error,
    data: myOrders,
    refetch,
  } = useQuery(["available", user], () =>
    fetch(
      `https://rocky-dusk-15979.herokuapp.com/order?customer=${user.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => {
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
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Amount</th>
              <th>Status</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((myOrder, index) => (
              <MyOrderRow
                key={myOrder._id}
                index={index}
                myOrder={myOrder}
                refetch={refetch}
                setDeletingOrder={setDeletingOrder}
              ></MyOrderRow>
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

export default MyOrders;

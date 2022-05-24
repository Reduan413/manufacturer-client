import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import MyOrderRow from "./MyOrderRow";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [myOrders, setMyOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      console.log(`http://localhost:5000/order?customer=${user.email}`);
      fetch(`http://localhost:5000/order?customer=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          console.log("res", res);
          if (res.status === 401 || res.status === 403) {
            //signOut(auth);
            //localStorage.removeItem("accessToken");
            //navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setMyOrders(data);
        });
    }
  }, [user]);
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
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
           {
               myOrders.map((myOrder, index) =>(
                   <MyOrderRow key={myOrder._id} index={index} myOrder={myOrder}></MyOrderRow>
               ))
           }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;

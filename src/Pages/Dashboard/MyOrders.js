import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import MyOrderRow from "./MyOrderRow";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  //const [myOrders, setMyOrders] = useState([]);
  const navigate = useNavigate();
  const {
    isLoading,
    error,
    data: myOrders,
    refetch,
  } = useQuery(["available", user], () =>
    fetch(`http://localhost:5000/order?customer=${user.email}`, {
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
           {
               myOrders.map((myOrder, index) =>(
                   <MyOrderRow key={myOrder._id} index={index} myOrder={myOrder} refetch={refetch}></MyOrderRow>
               ))
           }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;

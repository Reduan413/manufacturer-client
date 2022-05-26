import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import AllOrderRow from "./AllOrderRow";

const ManageOrders = () => {
  const [user] = useAuthState(auth);
  //const [allOrders, setAllOrders] = useState([]);
  const navigate = useNavigate();

  const {
    isLoading,
    error,
    data: allOrders,
    refetch,
  } = useQuery("available", () =>
    fetch(`http://localhost:5000/allorder`, {
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

  // useEffect(() => {
  //   if (user) {
  //     fetch(`http://localhost:5000/allorder`, {
  //       method: "GET",
  //       headers: {
  //         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //       },
  //     })
  //       .then((res) => {
  //         console.log("res", res);
  //         if (res.status === 401 || res.status === 403) {
  //           signOut(auth);
  //           localStorage.removeItem("accessToken");
  //           navigate("/");
  //         }
  //         return res.json();
  //       })
  //       .then((data) => {
  //           setAllOrders(data);
  //       });
  //   }
  // }, [user]);
  return (
    <div>
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
              ></AllOrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;

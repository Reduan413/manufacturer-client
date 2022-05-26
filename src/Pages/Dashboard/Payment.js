import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1rJoFkVHbrNvNnQrGHl78VbLtXNe9OW5SxTFICB136A7jnKx1HICMCGiedkl6xGx0ewzyTLYOYO03zeCWdsNt900msj5wCVq"
);

const Payment = () => {
  const { id } = useParams();
  const {
    isLoading,
    error,
    data: order,
    refetch,
  } = useQuery(["order", id], () =>
    fetch(`http://localhost:5000/order/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="mt-12">
      <div class="flex w-full   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        <div class="grid  flex-grow card   rounded-box place-items-center">
          <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center ">
              <p className="text-success font-bold">
                Hello, {order.customerName}
              </p>
              <h2 className="text-xl font-bold text-secondary">
                Please Pay for {order.product}
              </h2>
              <p>
                <small className="text-2xl ">
                  per pice Price: {order.price}TK
                </small>
              </p>
              <p>
                <small className="text-2xl ml-3 ">
                  Quantity: {order.quantity}pc
                </small>
              </p>
              <p>
                <small className="text-2xl ml-3 ">
                  Total Amount: {order.total_amount}pc
                </small>
              </p>
            </div>
          </div>
        </div>

        <div class="grid  flex-grow card   rounded-box place-items-center h-auto mt-12 mb-12" >
          <div className="card bg-slate-200 shadow-xl"  >
            <div className="card-body text-center mt-12" style={{width:500, height:200}} >
              <Elements stripe={stripePromise}>
                <CheckoutForm order={order}/>
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

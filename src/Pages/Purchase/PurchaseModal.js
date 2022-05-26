import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useActiveUser from "../../hooks/useActiveUser";

const PurchaseModal = ({ purchase, setPurchaser, refetch }) => {
  const { _id, name, img, description, stock, minOrder, price } = purchase;
  const [user, loading, error] = useAuthState(auth);
  const [activeUser] = useActiveUser()

  const handlePurchase = (event) => {
    event.preventDefault();
    const quantity = event.target.quantity.value;
    const total_bill = quantity * price;
    const minOrderNum = parseInt(minOrder);
    const newStock = stock - quantity;

    if (quantity < stock) {
      if (quantity >= minOrderNum) {
        const order = {
          productId: _id,
          product: name,
          customerName: activeUser.userName,
          customerEmail: activeUser.email,
          quantity,
          price,
          total_amount: total_bill,
          status: "Not Paid",
          payment: "No Paid",
        };
        console.log(order);
        fetch("https://rocky-dusk-15979.herokuapp.com/order", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(order),
        })
          .then((res) => res.json())
          .then((inserted) => {
            console.log(inserted);
            if (inserted.insertedId) {
              toast.success("Order added successfully");
              setPurchaser(null);
              const product = {
                stock: newStock,
              };
              fetch(`https://rocky-dusk-15979.herokuapp.com/product/${_id}`, {
                method: "PATCH",
                headers: {
                  "content-type": "application/json",
                  authorization: `Bearer ${localStorage.getItem(
                    "accessToken"
                  )}`,
                },
                body: JSON.stringify(product),
              })
                .then((res) => res.json())
                .then((data) => {
                  refetch();
                });
            } else {
              toast.error("Failed to add the Order");
            }
          });
      }
    }
  };
  return (
    <div>
      <input type="checkbox" id="purchase-model" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="purchase-model"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">
            Booking for: {name}
          </h3>
          <p>
            <small>You have to purchase minimum of {minOrder} pc</small>
          </p>
          <form
            onSubmit={handlePurchase}
            className="grid grid-cols-1 gap-3 justify-items-center mt-2"
          >
            <input
              type="text"
              name="name"
              disabled
              value={activeUser?.userName}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              disabled
              value={activeUser?.email}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="price"
              disabled
              value={price}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;

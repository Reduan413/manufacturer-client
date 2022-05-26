import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ProfileUpdateModal = ({ activeUser, refetch, setUpdateProfile }) => {
  const { _id, email } = activeUser;

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imgStorageKey = "5812e35273814437e5f10dedd616b9a8";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const user = {
            name: data.name,
            email: email,
            address: data.address,
            company: data.company,
            phone: data.phone,
            image: img,
          };
          fetch(`https://rocky-dusk-15979.herokuapp.com/user/${_id}`, {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(user),
          })
            .then((res) => res.json())
            .then((inserted) => {
              toast.success("Profile Updated successfully");
              reset();
              setUpdateProfile(false)
              refetch();
            });
        }
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="updateProfile-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="updateProfile-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h2 className="text-3xl">Add Your Details</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-1 justify-items-center mt-2"
          >
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                disabled
                value={email}
                className="input input-bordered w-full max-w-xs"      
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="Your Address"
                className="input input-bordered w-full max-w-xs"
                {...register("address", {
                  required: {
                    value: true,
                    message: "Address is Required",
                  },
                })}
              />
              <label className="label">
                {errors.address?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.address.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                placeholder="Your Phone Number"
                className="input input-bordered w-full max-w-xs"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Phone is Required",
                  },
                })}
              />
              <label className="label">
                {errors.phone?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.phone.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Company Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Company Name"
                className="input input-bordered w-full max-w-xs"
                {...register("company", {
                  required: {
                    value: true,
                    message: "Company Name is Required",
                  },
                })}
              />
              <label className="label">
                {errors.company?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.company.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="file"
                className="input input-bordered w-full max-w-xs"
                {...register("image", {
                  required: {
                    value: true,
                    message: "Image is Required",
                  },
                })}
              />
              <label className="label">
                {errors.image?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.image.message}
                  </span>
                )}
              </label>
            </div>
            <input
              className="btn w-full max-w-xs text-white bg-gradient-to-r from-secondary to-primary"
              type="submit"
              value="UPDATE PROFILE"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdateModal;

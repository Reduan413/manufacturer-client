import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import ProfileUpdateModal from "./ProfileUpdateModal";

const LoginProfile = () => {
  const [user] = useAuthState(auth);
  const email = user.email;
  const [updateProfile, setUpdateProfile] = useState(false);
  const { data: activeUser, isLoading, refetch } = useQuery("user", () =>
    fetch(`http://localhost:5000/user/${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    <Loading></Loading>;
  }
  return (
    <div>
      <div className="flex justify-end mx-12">
        <label
          htmlFor="updateProfile-modal"
          onClick={() => setUpdateProfile(true)}
          className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
        >
          Update
        </label>
        {updateProfile && (
          <ProfileUpdateModal
            setUpdateProfile={setUpdateProfile}
            activeUser={activeUser}
            refetch={refetch}
          ></ProfileUpdateModal>
        )}
      </div>
      <div class="hero min-h-80 ">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src={activeUser?.image}
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-5xl font-bold">{activeUser?.userName}</h1>
            <p class="pt-2">
              <span className="font-bold">Email:</span>
              <span> {activeUser?.email}</span>
            </p>
            <p class="pt-2">
              <span className="font-bold">Phone :</span>
              <span> {activeUser?.phone}</span>
            </p>
            <p class="pt-2">
              <span className="font-bold">Address:</span>
              <span> {activeUser?.address}</span>
            </p>
            <p class="pt-2">
              <span className="font-bold">Company:</span>
              <span> {activeUser?.company}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginProfile;

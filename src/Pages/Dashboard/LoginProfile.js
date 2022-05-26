import React, { useState } from "react";
import useActiveUser from "../../hooks/useActiveUser";
import ProfileUpdateModal from "./ProfileUpdateModal";

const LoginProfile = () => {
  const [updateProfile, setUpdateProfile] = useState(false);
  const [activeUser, refetch, email] = useActiveUser()

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
      <div  className="hero min-h-80 ">
        <div  className="hero-content flex-col lg:flex-row">
          <img
            src={activeUser?.image}
             className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1  className="text-5xl font-bold">{activeUser?.userName}</h1>
            <p  className="pt-2">
              <span className="font-bold">Email:</span>
              <span> {activeUser?.email}</span>
            </p>
            <p  className="pt-2">
              <span className="font-bold">Phone :</span>
              <span> {activeUser?.phone}</span>
            </p>
            <p  className="pt-2">
              <span className="font-bold">Address:</span>
              <span> {activeUser?.address}</span>
            </p>
            <p  className="pt-2">
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

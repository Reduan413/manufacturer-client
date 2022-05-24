import React, { useState } from "react";
import ProfileUpdateModal from "./ProfileUpdateModal";

const LoginProfile = () => {
    const [updateProfile, setUpdateProfile] = useState(false);
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
          //refetch={refetch}
        ></ProfileUpdateModal>
      )}
      </div>
    </div>
  );
};

export default LoginProfile;

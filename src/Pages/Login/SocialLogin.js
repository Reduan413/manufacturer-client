import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import google from "../../image/GoogleLogo.png";
import Loading from "../Shared/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  let signUpError;
  const navigate = useNavigate();
  if (error) {
    signUpError = <p className="text-red-500">{error?.message}</p>;
  }
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate("/");
  }
  return (
    <div className="m-auto">
      <div className="divider">OR</div>
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-wide btn-outline btn-accent"
      >
        <img src={google} className="w-8 m-1" alt="" /> Continue with google
      </button>
      {signUpError}
    </div>
  );
};

export default SocialLogin;

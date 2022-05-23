import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import google from "../../image/GoogleLogo.png";
import Loading from "../Shared/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  let signUpError;
  const [token] = useToken(user);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (error) {
    signUpError = <p className="text-red-500">{error?.message}</p>;
  }
  if (loading) {
    return <Loading></Loading>;
  }
  if (token) {
    navigate(from, { replace: true });
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

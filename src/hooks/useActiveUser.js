import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../firebase.init";
import Loading from "../Pages/Shared/Loading";

const useActiveUser = () => {
  const [user] = useAuthState(auth);
  const email = user.email;
  const {
    data: activeUser,
    isLoading,
    refetch,
  } = useQuery("user", () =>
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

  return [activeUser, refetch, email];
};

export default useActiveUser;
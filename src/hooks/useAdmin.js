import axios from "axios";
import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  useEffect(() => {
    const email = user?.email;
    if (email) {
      axios
        .get(`http://localhost:5000/admin/${email}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          }
        })
        .then((res) => {
          setAdmin(res.data.admin);
          setAdminLoading(false)
        });
    }
  }, [user]);
  return [admin, adminLoading];
};

export default useAdmin;
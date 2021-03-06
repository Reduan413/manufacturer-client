import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile ">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <h1 className="text-3xl font-bold text-purple-400 ml-5 mt-5">
          Welcome to Dashboard
        </h1>
        <Outlet />
      </div>
      <div className="drawer-side ">
        <label   htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content bg-blue-100">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Profile</Link>
          </li>
          {!admin && (
            <>
              <li>
                <Link to="/dashboard/myorders">My Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/addreview">Add Review</Link>
              </li>
            </>
          )}

          
          {admin && (
            <>
              <li>
                <Link to="/dashboard/manageorder">Manage All Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/addproduct">Add A Product</Link>
              </li>
              <li>
                <Link to="/dashboard/manageproducts">Manage Products</Link>
              </li>
              <li>
                <Link to="/dashboard/manageUsers">Manage Users</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

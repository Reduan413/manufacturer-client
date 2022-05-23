import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <h1 className="text-3xl font-bold text-purple-500">
          Welcome to Dashboard
        </h1>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label for="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/addreview">Add Review</Link>
          </li>
          <li>
            <Link to="/dashboard/loginprofile">My Profile</Link>
          </li>
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
          
        </ul>
      </div>
    </div>
    );
};

export default Dashboard;
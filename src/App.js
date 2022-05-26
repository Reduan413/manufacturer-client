import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import About from "./Pages/About/About";
import AddProduct from "./Pages/Dashboard/AddProduct";
import AddReview from "./Pages/Dashboard/AddReview";
import Dashboard from "./Pages/Dashboard/Dashboard";
import EditProduct from "./Pages/Dashboard/EditProduct";
import LoginProfile from "./Pages/Dashboard/LoginProfile";
import ManageOrders from "./Pages/Dashboard/ManageOrders";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import ManageUsers from "./Pages/Dashboard/ManageUsers";
import MyOrders from "./Pages/Dashboard/MyOrders";
import Payment from "./Pages/Dashboard/Payment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import RequireAuth from "./Pages/Login/RequireAuth";
import RequireCustomer from "./Pages/Login/RequireCustomer";
import Signup from "./Pages/Login/Signup";
import MyProfile from "./Pages/MyProfile/MyProfile";
import Purchase from "./Pages/Purchase/Purchase";
import Navbar from "./Pages/Shared/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/purchase"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/myprofile" element={<MyProfile />}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<LoginProfile />}></Route>
          <Route
            path="myorders"
            element={
              <RequireCustomer>
                <MyOrders />
              </RequireCustomer>
            }
          ></Route>
          <Route
            path="addreview"
            element={
              <RequireCustomer>
                <AddReview />
              </RequireCustomer>
            }
          ></Route>
          <Route
            path="payment/:id"
            element={
              <RequireCustomer>
                <Payment />
              </RequireCustomer>
            }
          ></Route>

          <Route
            path="manageorder"
            element={
              <RequireAdmin>
                <ManageOrders />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addproduct"
            element={
              <RequireAdmin>
                <AddProduct />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageUsers"
            element={
              <RequireAdmin>
                <ManageUsers />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageproducts"
            element={
              <RequireAdmin>
                <ManageProducts />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageproducts/editproduct/:id"
            element={<EditProduct />}
          ></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

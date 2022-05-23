import React from "react";
import Footer from "../../Pages/Shared/Footer";
import Banner from "./Banner";
import Brand from "./Brand";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <Brand />

      <Footer />
    </div>
  );
};

export default Home;

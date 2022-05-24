import React from "react";
import Footer from "../../Pages/Shared/Footer";
import Banner from "./Banner";
import Brand from "./Brand";
import Products from "./Products";
import Summary from "./Summary";

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <Summary/>
      <Brand />

      <Footer />
    </div>
  );
};

export default Home;

import React from "react";
import Footer from "../../Pages/Shared/Footer";
import About from "./About";
import Banner from "./Banner";
import Brand from "./Brand";
import Products from "./Products";
import Reviews from "./Reviews";
import Summary from "./Summary";

const Home = () => {
  return (
    <div>
      <Banner />
      <About/>
      <Products />
      <Summary/>
      <Reviews/>
      <Brand />

      <Footer />
    </div>
  );
};

export default Home;

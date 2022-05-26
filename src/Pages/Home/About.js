import React from "react";
import ecommerce from "../../image/ecommerce.png";

const About = () => {
  return (
    <div>
      <div  className="hero min-h-screen bg-base-200">
        <div  className="hero-content flex-col lg:flex-row">
          <img src={ecommerce}  className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1  className="text-5xl font-bold">WHO WE ARE</h1>
            <p  className="py-6">
              Technology has become a part of our daily lives and for a huge
              portion of our life, we are dependent on tech products daily.
              There is hardly a home in Bangladesh without a tech product. This
              is where we come in. Star Tech & Engineering Ltd had started as a
              Tech product shop way back in March 2007. We focused on giving the
              customers the best service possible. This is why Star Tech is one
              of The most trusted names in the tech industry of Bangladesh
              today. After a long 14 year journey; SA Tech was certified with
              the renowned " certification" because of the best Quality control
              management system. As an " certified" organization; SA Tech. is
              now up to the international standard that specifies a quality
              management system (QMS). This Certification denotes that this
              organization consistently maintains all sorts of regulatory
              requirements to provide products and services for meeting all
              sorts of customer requirements.
            </p>
            <p  className="py-6">
              Best Laptop & Notebook Shop in Bangladesh. SA Tech is the largest
              and most reliable Laptop Brand Shop in BD. It does not matter
              whether you want a gaming laptop, an Intel-powered laptop, or an
              AMD Ryzen laptop for your work, gaming, freelancing, or study. We
              have covered all of the budget range for laptops. You can also buy
              a genuine official Apple Macbook Air or Macbook Pro laptop from
              our shop. SA Tech is currently selling the latest models of many
              well-known Laptop computer brands such as Razer, HP, Dell, Apple
              Macbook, Asus, Acer, Lenovo, Microsoft Surface, MSI, Gigabyte,
              i-Life, Walton, Xiaomi MI, Huawei, Chuw
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

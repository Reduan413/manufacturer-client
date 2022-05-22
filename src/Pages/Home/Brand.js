import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import './Home.css';
import Item from "./Item";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Brand = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await axios.get("brand.json").then((res) => {
        setItems(res.data);
      });
    };
    fetchData();
  }, []);
  return (
    <div className="carousel-wrapper">
      <Carousel breakPoints={breakPoints}>
        {items.map((item) => (
          <Item key={item.brandId}>
            <div style={{height:100}}>
              <img
                className="img-fluid"
                src={item.img}
                alt=""
                style={{ width: 200, height:100 }}
              />
            </div>
          </Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Brand;

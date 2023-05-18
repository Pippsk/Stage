import React from "react";
import MyButton from "../utils/Button";
import { Zoom } from "react-awesome-reveal";
import "../../resources/styles.css";

const Pricing = () => {
  const priceState = {
    prices: [100, 150, 200],
    position: ["Balcony", "Medium", "Star"],
    desc: [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni fugit architecto rerum laborum debitis cupiditate unde tempora quam, reiciendis corporis obcaecati deleniti dolore esse laudantium, accusantium ipsum, odit labore quibusdam.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni fugit architecto rerum laborum debitis cupiditate unde tempora quam, reiciendis corporis obcaecati deleniti dolore esse laudantium, accusantium ipsum, odit labore quibusdam.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni fugit architecto rerum laborum debitis cupiditate unde tempora quam, reiciendis corporis obcaecati deleniti dolore esse laudantium, accusantium ipsum, odit labore quibusdam.",
    ],
    links: ["https://sales.b", "https://sales.m", "https://sales.s"],
    delay: [500, 0, 500],
  };

  const showBoxes = () =>
    priceState.prices.map((box, index) => (
      <Zoom
        key={index}
        className="pricing_item"
        delay={priceState.delay[index]}
      >
        <div className="pricing_inner_wrapper">
          <div className="pricing_title">
            <span>{priceState.prices[index]}€</span>
            <span>{priceState.position[index]}</span>
          </div>

          <div className="pricing_description">{priceState.desc[index]}</div>
          <div className="pricing_buttons">
            <MyButton
              text="Purchase"
              style={{
                color: "#ffffff",
              }}
              link={priceState.links[index]}
            />
          </div>
        </div>
      </Zoom>
    ));

  return (
    <div className="bck_black">
      <div className="center_wrapper pricing_section">
        <h2>Pricing</h2>
        <div className="pricing_wrapper">{showBoxes()}</div>
      </div>
    </div>
  );
};

export default Pricing;

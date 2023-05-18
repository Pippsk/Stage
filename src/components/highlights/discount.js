import React, { useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import MyButton from "../utils/Button";

const Discount = () => {
  const end = 30;

  const [start, setStart] = useState(0);
  const porcentage = () => {
    if (start < end) {
      setStart((prevStart) => prevStart + 1);
    }
  };

  useEffect(() => {
    if (start > 0 && start < 30) {
      setTimeout(() => {
        setStart((prevStart) => prevStart + 1);
      }, 30);
    }
  }, [start]);

  return (
    <div className="center_wrapper">
      <div className="discount_wrapper">
        <Fade
          onVisibilityChange={(inView) => {
            if (inView) {
              porcentage();
            }
          }}
        >
          <div className="discount_porcentage">
            <span>{start}%</span>
            <span>OFF</span>
          </div>
        </Fade>

        <Slide right={true}>
          <div className="discount_description">
            <h3>Purchase tickets before 20th of June</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatem in minima inventore velit optio soluta illum debitis
              praesentium eum quia! Vitae similique necessitatibus vero sunt
              rerum. Quisquam excepturi similique modi?
            </p>

            <MyButton
              text="Purchase ticket"
              link="#"
              size="small"
              style={{
                background: "#ffa800",
                color: "#ffffff",
              }}
              iconTicket={true}
            />
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Discount;

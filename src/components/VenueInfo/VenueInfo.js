import React from "react";
import { Zoom } from "react-awesome-reveal";

import calendarIcon from "../../resources/images/icons/calendar.png";
import locationIcon from "../../resources/images/icons/location.png";

const VenueInfo = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Zoom className="vn_item" triggerOnce>
            <div>
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red"></div>
                  <div
                    className="vn_icon"
                    style={{ background: `url(${calendarIcon})` }}
                  ></div>
                  <div className="vn_title">Event Date & Time</div>
                  <div className="vn_desc">Nov, 20, 2023, 21:30pm</div>
                </div>
              </div>
            </div>
          </Zoom>

          <Zoom className="vn_item" triggerOnce delay={500}>
            <div>
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_yellow"></div>
                  <div
                    className="vn_icon"
                    style={{ background: `url(${locationIcon})` }}
                  ></div>
                  <div className="vn_title">Event Location</div>
                  <div className="vn_desc">Baia Mare, Romania</div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default VenueInfo;

import React from "react";
import "./resources/styles.css";
import { Element } from "react-scroll";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Featured from "./components/featured";
import VenueInfo from "./components/VenueInfo/VenueInfo";
import Highlights from "./components/highlights/highlights";
import Pricing from "./components/pricing/pricing";
import Location from "./components/Location/Location";

const App = () => {
  return (
    <div className="App">
      <Header />

      <Element name="featured">
        <Featured />
      </Element>

      <Element name="venueinfo">
        <VenueInfo />
      </Element>

      <Element name="highlights">
        <Highlights />
      </Element>

      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="location">
        <Location />
      </Element>

      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import { scroller } from "react-scroll";
import { Drawer, List, ListItem } from "@mui/material";

const SideDrawer = (props) => {
  const links = [
    {
      where: "featured",
      value: "To top",
    },
    {
      where: "venueinfo",
      value: "Venue INFO",
    },
    {
      where: "highlights",
      value: "Highlights",
    },
    {
      where: "pricing",
      value: "Pricing",
    },
    {
      where: "location",
      value: "Location",
    },
  ];

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150,
    });

    props.onClose(false);
  };

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        {links.map((item) => (
          <ListItem
            button
            onClick={() => scrollToElement(item.where)}
            key={item.where}
          >
            {item.value}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideDrawer;
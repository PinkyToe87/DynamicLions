import React from "react";

import Card from "../UI/Card";
import EventsList from "./EventsList";

import "./Events.css";
import { Fragment } from "react/cjs/react.production.min";

const events = [
  {
    id: "e1",
    title: "Spooktacular Trunk or Treat",
    address: "555 E. 6th St. San Angelo, TX 76903",
    date: new Date(2023, 9, 31),
    time: "6:00 pm - 8:00 pm",
    description: "Join us for a free community Trick or Treat! Food, Train Ride, Bounce House and more! Sponsored by San Angelo Lions Club and Lighthouse Office Supply."
  },
  /* {
    id: "e2",
    title: "Lighthouse for the Blind Christmas Luncheon",
    address: "555 E 6TH St",
    date: new Date(2021, 11, 15),
    time: "10:30 am",
    description:"Help us serve lunch and celebrate Christmas with the men and women of the Lighthouse"
  },
  {
    id: "e3",
    title: "Christmas FOOD Basket Project",
    address: "Rio Concho Manor",
    date: new Date(2021, 11, 16),
    time: "Noon",
    description: "In helping the needy during this Holiday Season, we’ll put FOOD baskets together during our Noon meeting. The Club will pay for every member’s lunch who attends and volunteers!"
  },
  {
    id: "e4",
    title: "Christmas FRUIT Basket Fundraiser",
    address: "Rio Concho Manor",
    date: new Date(2021, 11, 16),
    time: "Noon",
    description: "If you sell any FRUIT baskets, PDG Keith will have these ready for pick-up during our Noon meeting"
  },
  {
    id: "e5",
    title: "Christmas Party",
    address: "Bentwood Country Club",
    date: new Date(2021, 11, 16),
    time: "7:00 pm",
    description: "Join us for our annual Christmas Party! The Club will pay for every member in good standing and one guest!"
  }, */
];

const Events = () => {
  return (
    <Fragment>
      <Card className="events">
        <h2>Upcoming Events</h2>
        <EventsList events={events} />
      </Card>
    </Fragment>
  );
};

export default Events;

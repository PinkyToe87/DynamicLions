import React from "react";

import Card from "../UI/Card";
import EventDate from "./EventDate";
import classes from "./EventItem.module.css";

const EventItem = (props) => {
  return (
    <li>
      <Card className={classes['event-item']}>
        <EventDate date={props.date} />
        <div className={classes['event-item__description']}>
          <h2 className={classes.eventTitle}>{props.title}</h2>
          <h3 className={"address"}>{props.address} @ {props.time}</h3>
          <p>{props.description}</p>
        </div>
      </Card>
    </li>
  );
};

export default EventItem;

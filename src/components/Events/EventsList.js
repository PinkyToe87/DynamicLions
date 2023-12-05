import React from "react";

import EventItem from "./EventItem";
import "./EventsList.css";

const EventsList = (props) => {
  //if (props.events.length === 0) {
  //    return <h2 className="events-list__fallback">Found no expenses.</h2>;
  //}

  return (
    <ul className="events-list">
      {props.events.map((event) => (//transform array into array of JSX items
        <EventItem
          key={event.id} //always add key when mapping out list of items
          title={event.title}
          address={event.address}
          time={event.time}
          date={event.date}
          description={event.description}
        />
      ))}
    </ul>
  );
};

export default EventsList;

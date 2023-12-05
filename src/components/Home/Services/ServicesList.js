import React from "react";

import classes from "./ServicesList.module.css";
import Service from "./Service";

const ServicesList = (props) => {
  return (
    <ul className={classes.ServicesList}>
      {props.services.map((service) => (//transform array into array of JSX items
        <Service
          key={service.id} //always add key when mapping out list of items
          title={service.title}
          description={service.description}
          src={service.img}
          href={service.iconLink}
        />
      ))}
    </ul>
  );
};

export default ServicesList;
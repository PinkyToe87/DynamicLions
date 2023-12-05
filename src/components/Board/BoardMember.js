import React from "react";

import Card from "../UI/Card";
import classes from "./BoardMember.module.css";
// import president from "../../assests/Images/boardMembers/president.jpg";


const BoardMember = (props) => {
  return (
    <Card className={classes.boardMember_item}>
        <li>
          <img src={props.image} alt={props.title} />
          <h3>{props.title}</h3>
          <h4>{props.name}</h4>
          <p>"{props.caption}"</p>
        </li>
    </Card>
  );
};

export default BoardMember;

import React from "react";
import { Fragment } from "react/cjs/react.production.min";

import BoardMemberList from "./BoardMembersList";
import Card from "../UI/Card";

import classes from "./BoardMembers.module.css";

import President from "../../assests/Images/boardMembers/president.jpg";
import VicePresident_1 from "../../assests/Images/boardMembers/vicePresident_1.jpg";
import Treasurer from "../../assests/Images/boardMembers/treasurer.jpg";
import Director from "../../assests/Images/boardMembers/director1.jpg";
import Logo from "../../assests/Images/logo.png";


const boardMembers = [
  {
    id: "1",
    title: "President",
    name: "Thomas Rodriguez",
    caption:
      "Like our motto says 'we serve' and that’s exactly what being a Lion is all about. Lion’s make a difference in our community - one service project at a time.",
    image: President,
  },
  {
    id: "2",
    title: "Vice President (1st)",
    name: "Keith Perrine",
    caption:
      "The reason I am a Lion is that I meet and stay connected to people and the community, while helping to serve the needs within the community. 'WE SERVE'",
    image: VicePresident_1,
  },
  {
    id: "3",
    title: "Vice President (2nd)",
    name: "John Hancock",
    caption: "TEST",
    image: Logo,
  },
  {
    id: "4",
    title: "Secretary",
    name: "Richard Agee",
    caption: "TEST",
    image: Logo,
  },
  {
    id: "5",
    title: "Treasurer",
    name: "Laurel Scott",
    caption:
      "I joined Lions because I love the motto, 'We Serve'. I grew up with people who believed volunteering is important and I love being a member of a community that agrees and provides many opportunities to serve.",
    image: Treasurer,
  },
  {
    id: "6",
    title: "Tail Twister",
    name: "Daniel Anderson",
    caption: "TEST",
    image: Logo,
  },
  {
    id: "7",
    title: "Lion Tamer",
    name: "Judy Agee",
    caption: "TEST",
    image: Logo,
  },
  {
    id: "8",
    title: "Lion Tamer",
    name: "Pat Callahan",
    caption: "TEST",
    image: Logo,
  },
  {
    id: "9",
    title: "Director (1yr)",
    name: "Joe Guerra",
    caption: "TEST",
    image: Director,
  },
];

const BoardMembers = (props) => {
  return (
    <Fragment>
      <Card className={classes.board_members}>
        <h2>Board Members</h2>
        <BoardMemberList members={boardMembers} />
      </Card>
    </Fragment>
  );
};

export default BoardMembers;

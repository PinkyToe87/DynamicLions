import React from "react";

import BoardMember from "./BoardMember";
import classes from "./BoardMembersList.module.css";

const BoardMembersList = (props) => {
  return (
    <ul className={classes.boardMembers_list}>
      {props.members.map((member) => (
        <BoardMember
          key={member.id} 
          title={member.title}
          name={member.name}
          caption={member.caption}
          image={member.image}
        />
      ))}
    </ul>
  );
};

export default BoardMembersList;

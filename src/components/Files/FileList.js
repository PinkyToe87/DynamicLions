import React from "react";

import File from "./File";
import classes from "./FileList.module.css";

const FileList = (props) => {
  return (
    <ul className={classes.file_container}>
     {props.files.map((file) => (
        <File
          key={file.id}
          month={file.month}
          year={file.year}
          file={file.file}
        />
      ))}
    </ul>
  );
};

export default FileList;
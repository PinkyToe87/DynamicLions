import classes from "./File.module.css";
import Card from "../UI/Card";

const File = (props) => {
  return (
      <Card className={classes.file}>
        <li>
          <a href={props.file} target="_blank" rel="noreferrer">
          <h3>{props.month}</h3>
          <p>{props.year}</p>
          </a>
        </li>
      </Card>
  );
};

export default File;
import classes from "./Home.module.css";

import Card from "../UI/Card";
import Services from "../Home/Services/Services";
import { Fragment } from "react/cjs/react.production.min";

const Home = () => {
  return (
    <Fragment>
      <Card className={classes.home_grid}>
        <b className={classes.one}></b>
        <div className={classes.two}>
          <h1>DYNAMIC Lions</h1>
        </div>
        <b className={classes.three}></b>
        <b className={classes.four}></b>
        <div className={classes.five}></div>
        <div className={classes.six}>
          <h2>We Serve.</h2>
          <p>Serving the San Angelo TX community</p>
        </div>
      </Card>
      <Services />
    </Fragment>
  );
};

export default Home;

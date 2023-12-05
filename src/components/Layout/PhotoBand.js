import React, { Fragment } from "react";

import Image_1 from "../../assests/Images/PhotoGrid/casualPint.jpg";
import Image_2 from "../../assests/Images/PhotoGrid/foodDonation.jpg";
import Image_3 from "../../assests/Images/PhotoGrid/formalGroup.jpg";
import Image_4 from "../../assests/Images/PhotoGrid/group.jpg";

import classes from "./PhotoBand.module.css";

const PhotoBand = () => {
  return (
    <Fragment>
      <div className={classes.photoband_container}>
        <ul>
          <li className={classes.photoband_item}>
            <img  src={Image_1} />
          </li>
          <li>
            <img  src={Image_1} />
          </li>
          <li>
            <img src={Image_2} />
          </li>
          <li>
            <img  src={Image_3} />
          </li>
          <li>
            <img  src={Image_3} />
          </li>
          <li>
            <img  src={Image_4} />
          </li>
          <li>
            <img  src={Image_4} />
          </li>
          <li>
            <img  src={Image_1} />
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default PhotoBand;

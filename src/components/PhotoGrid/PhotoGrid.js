import React from "react";
import { Fragment } from "react";

import Card from "../UI/Card";

import classes from "./PhotoGrid.module.css";

import logo from "../../assests/Images/logo.png";
import Image_1 from "../../assests/Images/PhotoGrid/casualPint.jpg";
import Image_2 from "../../assests/Images/PhotoGrid/casualPintEvent.jpg";
import Image_3 from "../../assests/Images/PhotoGrid/christmasDonations.jpg";
import Image_4 from "../../assests/Images/PhotoGrid/cleanup.jpg";
import Image_5 from "../../assests/Images/PhotoGrid/conchoManorMeeting.jpg";
import Image_6 from "../../assests/Images/PhotoGrid/crimeStoppers.jpg";
import Image_7 from "../../assests/Images/PhotoGrid/elksLoungeLunch.jpg";
import Image_8 from "../../assests/Images/PhotoGrid/equalizationChannel.jpg";
import Image_9 from "../../assests/Images/PhotoGrid/equalizationChannelTrashPickup.jpg";
import Image_10 from "../../assests/Images/PhotoGrid/foodDonation.jpg";
import Image_11 from "../../assests/Images/PhotoGrid/formalGroup.jpg";
import Image_12 from "../../assests/Images/PhotoGrid/fortConcho.jpg";
import Image_13 from "../../assests/Images/PhotoGrid/fortConchoBreakfast.jpg";
import Image_14 from "../../assests/Images/PhotoGrid/fortConchoHorseRiders.jpg";
import Image_15 from "../../assests/Images/PhotoGrid/golf.jpg";
import Image_16 from "../../assests/Images/PhotoGrid/govenorJoelKuykendall.jpg";
import Image_17 from "../../assests/Images/PhotoGrid/group.jpg";
import Image_18 from "../../assests/Images/PhotoGrid/helpingHands.jpg";
import Image_19 from "../../assests/Images/PhotoGrid/helpingHandsLadder.jpg";
import Image_20 from "../../assests/Images/PhotoGrid/karaSmiles.jpg";
import Image_21 from "../../assests/Images/PhotoGrid/lionOfTheYear.jpg";
import Image_22 from "../../assests/Images/PhotoGrid/lionsCampPresentation.jpg";
import Image_23 from "../../assests/Images/PhotoGrid/lionsMascot.jpg";
import Image_24 from "../../assests/Images/PhotoGrid/newMemberInduction.jpg";
import Image_25 from "../../assests/Images/PhotoGrid/paintbrush-alley.jpg";
import Image_26 from "../../assests/Images/PhotoGrid/painting.jpg";
import Image_27 from "../../assests/Images/PhotoGrid/paintingWindow.jpg";
import Image_28 from "../../assests/Images/PhotoGrid/quicksandGolf.jpg";
import Image_29 from "../../assests/Images/PhotoGrid/servingFood.jpg";
import Image_30 from "../../assests/Images/PhotoGrid/cardGame.jpg";

const PhotoGrid = () => {
  return (
    <Fragment>
      <Card className={classes["image-grid"]}>
        <h2>Dynamic Lions</h2>
        <img src={logo} alt="Logo" className={classes.gridLogo}/>
        <img src={Image_30} alt="Card Games" title="Card Games" />
        <img src={Image_29} alt="Serving Food" title="Serving Food"/>
        <img src={Image_28} alt="Quicksand Golf" title="Quicksand Golf" />
        <img src={Image_27} alt="Window Painting" title="Window Painting" />
        <h2>We Serve</h2>
        <img src={Image_26} alt="Painting" title="Painting"/>
        <img src={Image_25} alt="Paintbrush Alley" title="Paintbrush Alley"/>
        <img src={Image_24} alt="New Member Induction" title="New Member Induction"/>
        <img src={Image_23} alt="Lions Mascot" title="Lions Mascot"/>
        <img src={logo} alt="Logo" className={classes.gridLogo}/>
        <img src={Image_22} alt="Lions Camp Presentation" title="Lions Camp Presentation"/>
        <img src={Image_21} alt="Lion Of The Year" title="Lion Of The Year"/>
        <img src={Image_20} alt="Kara Smiles" title="Kara Smiles"/>
        <img src={Image_19} alt="Helping Hands Ladder" title="Helping Hands Ladder"/>
        <h2>Join the fun!</h2>
        <img src={Image_18} alt="Helping Hands" title="Helping Hands"/>
        <img src={Image_17} alt="Group" title="Group"/>
        <img src={Image_16} alt="Govenor Joel Kuykendall" title="Govenor Joel Kuykendall"/>
        <img src={Image_15} alt="Golf" title="Golf"/>
        <img src={Image_14} alt="Fort Concho Horse Riders" title="Fort Concho Horse Riders"/>
        <img src={Image_13} alt="Fort Concho Breakfast" title="Fort Concho Breakfast"/>
        <img src={Image_12} alt="Fort Concho" title="Fort Concho"/>
        <img src={Image_11} alt="Formal Group" title="Formal Group"/>
        <img src={Image_10} alt="Food Donation" title="Food Donation"/>
        <img src={Image_9} alt="Channel 1 Trash Pickup" title="Channel 1 Trash Pickup"/>
        <img src={Image_8} alt="Channel 1" title="Channel 1"/>
        <h2>Commuinty</h2>
        <img src={Image_7} alt="Elks Lounge Lunch" title="Elks Lounge Lunch"/>
        <img src={logo} alt="Logo" className={classes.gridLogo}/>
        <img src={Image_6} alt="Crime Stoppers" title="Crime Stoppers"/>
        <img src={Image_5} alt="Concho Manor Meeting" title="Concho Manor Meeting"/>
        <img src={Image_4} alt="Clean Up" title="Clean Up"/>
        <img src={Image_3} alt="Christmas Donations" title="Christmas Donations"/>
        <h2>San Angelo, TX</h2>
        <img src={Image_2} alt="Casual Pint Event" title="Casual Pint Event"/>
        <img src={Image_1} alt="Casual Pint" title="Casual Pint"/>
        <img src={logo} alt="Logo" className={classes.gridLogo}/>
      </Card>
    </Fragment>
  );
};

export default PhotoGrid;

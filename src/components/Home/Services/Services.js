import React from 'react';

import Card from "../../UI/Card";
import classes from "./Services.module.css";
import ServicesList from "./ServicesList";


const services = [
    {
      id: "1",
      title: "Eyeglass Recycling",
      description:"The Eyeglass Recycling Center is  operated by volunteer Lions. We repair glasses when we can. We collect glasses from local merchants and all over Texas to be sorted, washed, read, bagged, boxed and ready to ship all over the world thru the Texas Lions Eyeglass Recycling Center in Midland.      We are here to help those in need of assistance with Vision problems. NO CHILD is turned away. A child, 17 yrs of age or younger (or still in high school) will be offered free exams and glasses. Adults (18 and older) must fill out a questionnaire providing income and expense information to see if they qualify for assistance. We are funded by public donations, by our eight (8) local Lions Clubs and fundraisers.",
      img: "https://img.icons8.com/ios/100/000000/glasses.png",
      iconLink: "https://icons8.com/icon/3695/glasses"
    },
    {
      id: "2",
      title: "Helping Hands",
      description:"Work hands-on to change a life by making critical home repairs and accessibility upgrades such as ramps. Because of the help of people like you, whole neighborhoods improve and completely transform. Through this transformation, families achieve the strength, stability and independence they need to build a better life. ",
      img: "https://img.icons8.com/ios/100/000000/cottage--v1.png",
      iconLink: "https://icons8.com/icon/60580/house"
    },
    {
      id: "3",
      title: "Texas Lions Camp",
      description:"The primary purpose of the Texas Lions Camp is to provide, without charge, a camp for physical disabled , hearing/vision impaired, and diabetic children from the State of Texas , regardless of race, religion, or national origin. Our goal is to provide an atmosphere wherein campers will learn the “Can Do” philosophy and be allowed to achieve maximum personal growth and self-esteem. The Texas Lions Camp is recognized as a non-profit corporation, under section 501 (c) (3) of the Internal Revenue Service Code. The Camp is accredited by the American Camping Association, and is licensed by the Texas Department of Health.",
      img:"https://img.icons8.com/ios/100/000000/campsite.png",
      iconLink: "https://icons8.com/icon/aocjqaSLykhB/campsite"
    },
    {
      id: "4",
      title: "Community service",
      description:"We provide the following Community Service Activities: Christmas Party for Family Shelter, Annual Helping Hands Projects, Christmas Food Baskets, Texas Lions Camp feed children and staff in June, our famous Pancake Breakfasts, and other charitable causes. We also have fundraising events such as Golf Tournaments & Clay Bird Shoots. Please click 'Events' to see what's coming up!",
      img: "https://img.icons8.com/ios/100/000000/neighbour.png",
      iconLink: "https://icons8.com/icon/2etAeJYQr5rO/neighbour"
    },
  ];

const Services = () => {
    return (
        <Card className={classes.services}>
            <ServicesList services={services}/> 
        </Card>
    )
}

export default Services;
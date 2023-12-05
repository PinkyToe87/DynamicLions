import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem to="/home">Home</NavigationItem>
        <NavigationItem to="/board">Board</NavigationItem>
        <NavigationItem to="/events">Events</NavigationItem>
        <NavigationItem to="/photos">Photos</NavigationItem>
        <NavigationItem to="/reports">Reports</NavigationItem>
        <NavigationItem to="/contactUs" className={classes.cta}>Join Us!</NavigationItem>
    </ul>
);

export default navigationItems;
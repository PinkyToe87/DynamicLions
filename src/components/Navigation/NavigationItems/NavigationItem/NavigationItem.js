import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css';


const navigationItem = (props) => (
    <li className={classes.NavigationItem} activeClassName={classes.active}>
           <NavLink activeClassName={classes.active} to={props.to}>{props.children}</NavLink>
    </li>
);

export default navigationItem;
import React from 'react';

import classes from './NavigationItem_cta.module.css';


const NavigationItem_cta  = (props) => (
    <li className={classes.NavigationItem_cta} activeClassName={classes.active}>
           <a>{props.children}</a>
    </li>
);

export default NavigationItem_cta;
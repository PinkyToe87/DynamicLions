import React from 'react';

import Logo from '../../assests/Images/logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={Logo} alt="Lions Club"/>
    </div>
);

export default logo;
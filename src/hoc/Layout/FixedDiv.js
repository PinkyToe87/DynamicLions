import React from 'react';
import classes from './FixedDiv.module.css';
import { Link } from 'react-router-dom';

const FixedDiv = (props) => {
    return <Link to={props.to} className={classes.FixedDiv}><h3>{props.children}</h3></Link>;
}

export default FixedDiv;
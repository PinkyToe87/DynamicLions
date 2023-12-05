import React from 'react';

import classes from './Service.module.css';

const Service = (props) => {
    return (
        <li className={classes.service}>
            <h2>
                {props.title}
            </h2>
            <p>
                {props.description}
            </p>
            <a href={props.href} target="_blank" rel="noreferrer"><img src={props.src} alt={props.title}/></a>
        </li>
    );
}

export default Service;
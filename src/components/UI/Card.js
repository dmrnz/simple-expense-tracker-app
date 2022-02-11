import React from 'react';

import './Card.css';

const Card = (props) => {
    const className = props.className;
    const classes = 'card' + (className ? " " + className : "");

    return <div className={classes}>{props.children}</div>;
};

export default Card;

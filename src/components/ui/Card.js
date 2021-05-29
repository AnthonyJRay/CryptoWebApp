import React from 'react';

import classes from './Card.module.css';

function Card(props) {
  return <tbody className={classes.cardComponent}>{props.children}</tbody>;
}

export default Card;

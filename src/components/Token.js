import React from 'react';
import Card from './ui/Card';

import classes from './TokenListItem.module.css';

function TokenItem(props) {
  console.log(props);
  return (
    <Card>
      <tr className={classes.tokenItem}>
        <td>
          <img
            className={classes.tokenImage}
            src={props.image}
            alt={props.name}
          />
        </td>
        <td>
          <h3 className={classes.tokenTitle}>{props.name}</h3>
        </td>
        <td>
          <p className={classes.tokenTicker}>{props.ticker.toUpperCase()}</p>
        </td>
        <td>
          <p className={classes.tokenPrice}>${props.price}</p>
        </td>
        <td>
          <p
            className={
              props.priceChange < 0
                ? classes.negativeChange
                : classes.positiveChange
            }>
            {props.priceChange.toFixed(2)}%
          </p>
        </td>
      </tr>
    </Card>
  );
}

export default TokenItem;

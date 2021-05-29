import React from 'react';

import classes from './TokenListHeader.module.css';

function TokenListHeader() {
  return (
    <thead className={classes.tokenTableHeader}>
      <tr>
        <th colSpan='1'>Name</th>
        <th colSpan='1'>Symbol</th>
        <th colSpan='1'>Price</th>
        <th colSpan='1'>24h Change %</th>
        <th colSpan='1'>Logo</th>
      </tr>
    </thead>
  );
}

export default TokenListHeader;

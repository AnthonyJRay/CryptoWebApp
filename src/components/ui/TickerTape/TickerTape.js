import React from 'react';

// Ticker Tape styles
import classes from './TickerTape.module.css';

import Ticker from './Ticker';

function TickerTape() {
  return (
    <div className={classes.tickerContainer}>
      <div className={classes.tickers}>
        <Ticker />
      </div>
    </div>
  );
}

export default TickerTape;

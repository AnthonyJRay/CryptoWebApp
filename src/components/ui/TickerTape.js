import React from 'react';

// Ticker Tape styles
import classes from './TickerTape.module.css';

function TickerTape() {
  return (
    <div className={classes.tickerContainer}>
      <div className={classes.firstTicker}>
        <div className={classes.ticker}>Ticker 1</div>
        <div className={classes.ticker}>Ticker 2</div>
        <div className={classes.ticker}>Ticker 3</div>
        <div className={classes.ticker}>Ticker 4</div>
        <div className={classes.ticker}>Ticker 5</div>
      </div>
      <div className={`${classes.ticker2}`}>Ticker 6</div>
      <div className={`${classes.ticker2}`}>Ticker 7</div>
      <div className={`${classes.ticker2}`}>Ticker 8</div>
      <div className={`${classes.ticker2}`}>Ticker 9</div>
      <div className={`${classes.ticker2}`}>Ticker 10</div>
    </div>
  );
}

export default TickerTape;

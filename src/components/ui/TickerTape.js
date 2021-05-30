import React from 'react';

// Ticker Tape styles
import classes from './TickerTape.module.css';

function TickerTape() {
  return (
    <div className={classes.tickerContainer}>
      <ul className={classes.firstTicker}>
        <li className={classes.tickerOne}>Ticker 1</li>
        <li className={classes.tickerTwo}>Ticker 2</li>
        <li className={classes.tickerThree}>Ticker 3</li>
        <li className={classes.tickerFour}>Ticker 4</li>
        <li className={classes.tickerFive}>Ticker 5</li>
      </ul>
      <ul className={classes.secondTicker}>
        <li className={classes.tickerSix}>Ticker 6</li>
        <li className={classes.tickerSeven}>Ticker 7</li>
        <li className={classes.tickerEight}>Ticker 8</li>
        <li className={classes.tickerNine}>Ticker 9</li>
        <li className={classes.tickerTen}>Ticker 10</li>
      </ul>
    </div>
  );
}

export default TickerTape;

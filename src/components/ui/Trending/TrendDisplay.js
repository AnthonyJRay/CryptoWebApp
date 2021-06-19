import React from 'react';

// Ticker Tape styles
import classes from './TickerTape.module.css';

import TrendItem from './TrendItem';

function TrendDisplay(props) {
  console.log(props);
  return (
    <div className={classes.tickerContainer}>
      <h2>Top 7 Trending (24hrs)</h2>
      <div className={classes.tickers}>
        {props.trending.map((token) => {
          const tokenData = token.item;
          // console.log(token, 'does this work?');
          return (
            <TrendItem
              key={token.id}
              name={tokenData.name}
              symbol={tokenData.symbol}
              img={tokenData.small}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TrendDisplay;

import React from 'react';

import Spinner from '../ui/loadingSpinner';
import TickerTape from '../ui/TickerTape/TickerTape';
import TokenList from '../TokenList';

import classes from './Home.module.css';

function HomePage(props) {
  // console.log(props);

  if (props.loading) {
    return <Spinner />;
  } else {
    return (
      <section className={classes.tokenListDisplay}>
        <TickerTape />
        <h1 className={classes.tokenHeader}>
          Top 100 Crypto Currencies (by market cap)
        </h1>
        <TokenList tokens={props.tokenTable} />
      </section>
    );
  }
}

export default HomePage;

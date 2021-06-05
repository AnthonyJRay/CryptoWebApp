import React from 'react';

import TokenList from '../TokenList';

import classes from './Home.module.css';

function HomePage(props) {
  return (
    <section className={classes.tokenListDisplay}>
      <h1 className={classes.tokenHeader}>
        Top 100 Crypto Currencies (by market cap)
      </h1>
      <TokenList tokens={props.tokenTable} loading={props.isLoading} />
    </section>
  );
}

export default HomePage;

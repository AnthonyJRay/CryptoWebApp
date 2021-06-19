import React from 'react';

import Spinner from '../ui/loadingSpinner';
import TrendDisplay from '../ui/Trending/TrendDisplay';
import TokenList from '../TokenList';

import classes from './Home.module.css';

function HomePage(props) {
  console.log(props);

  if (props.loading) {
    return <Spinner />;
  } else {
    return (
      <section className={classes.tokenListDisplay}>
        <TrendDisplay trending={props.trendingData} />
        <h1 className={classes.tokenHeader}>
          Top 100 Crypto Currencies (by market cap)
        </h1>
        <TokenList tokens={props.tokenTable} />
      </section>
    );
  }
}

export default HomePage;

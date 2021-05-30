import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import TokenList from '../TokenList';

import classes from './Home.module.css';

function HomePage() {
  const [loadedTokens, setLoadedTokens] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((response) => {
        const tokens = [];

        for (const key in response.data) {
          console.log(response);
          const token = {
            id: key,
            ...response.data[key],
          };

          tokens.push(token);
        }
        setLoadedTokens(tokens);
        setIsLoading(false);
      });
  }, []);

  // console.log(loadedTokens, [loadedTokens]);

  return (
    <section className={classes.tokenListDisplay}>
      <h1 style={{ color: 'blue', textAlign: 'center', marginTop: '100px' }}>
        Top 100 Crypto Currencies (by market cap)
      </h1>
      <TokenList tokens={loadedTokens} loading={isLoading} />
    </section>
  );
}

export default HomePage;

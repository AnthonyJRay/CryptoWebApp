import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TokenList from '../TokenList';

function HomePage() {
  const [loadedTokens, setLoadedTokens] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((response) => {
        const tokens = [];

        for (const key in response.data) {
          const token = {
            id: key,
            ...response.data[key],
          };

          tokens.push(token);
        }
        setLoadedTokens(tokens);
      });
  }, []);

  // console.log(loadedTokens, [loadedTokens]);

  return (
    <section>
      <h1 style={{ color: 'blue', textAlign: 'center', marginTop: '100px' }}>
        Top 100 Crypto Currencies (by market cap)
      </h1>
      <TokenList tokens={loadedTokens} />
    </section>
  );
}

export default HomePage;

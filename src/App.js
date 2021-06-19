import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';

// Component Imports
import Layout from './components/layout/Layout';
import HomePage from './components/Pages/Home';
import MyCryptoPage from './components/Pages/MyCrypto';
import PricesPage from './components/Pages/Prices';
import WatchlistPage from './components/Pages/Watchlist';

function App() {
  // Call to API and Data manipulation
  const [loadedTokens, setLoadedTokens] = useState([]);
  const [trendingTokens, setTrendingTokens] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const tokenData = axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    );
    const trendingData = axios.get(
      'https://api.coingecko.com/api/v3/search/trending'
    );

    axios
      .all([tokenData, trendingData])
      .then(
        axios.spread((...responses) => {
          const tokenResponse = responses[0];
          const trendingResponse = responses[1];

          return [tokenResponse, trendingResponse];
        })
      )

      // Main Token Data
      .then((tokenResponse) => {
        const tokens = [];
        const trendCoins = [];

        // Main Token Data
        const tokenData = tokenResponse[0].data.map((coins) => {
          return coins;
        });

        // Trending Token Data
        console.log(tokenResponse[1].data.coins);
        const trendingData = tokenResponse[1].data.coins.map((trend) => {
          return trend;
        });

        // Setting an id before saving to state
        for (const key in tokenData) {
          const token = {
            id: key,
            ...tokenData[key],
          };

          tokens.push(token);
        }

        // Setting an id before saving to state
        for (const key in trendingData) {
          const trendToken = {
            id: key,
            ...trendingData[key],
          };
          trendCoins.push(trendToken);
        }
        setLoadedTokens(tokens);
        setTrendingTokens(trendCoins);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className='App'>
      <CssBaseline />
      <Layout>
        <Switch>
          <Route path='/' exact>
            <HomePage
              loading={isLoading}
              tokenTable={loadedTokens}
              trendingData={trendingTokens}
            />
          </Route>

          <Route path='/prices-page'>
            <PricesPage />
          </Route>

          <Route path='/my-crypto'>
            <MyCryptoPage />
          </Route>

          <Route path='/my-watchlist'>
            <WatchlistPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}
export default App;

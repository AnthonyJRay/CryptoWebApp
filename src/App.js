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
    <div className='App'>
      <CssBaseline />
      <Layout>
        <Switch>
          <Route path='/' exact>
            <HomePage tokenTable={loadedTokens} loading={isLoading} />
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

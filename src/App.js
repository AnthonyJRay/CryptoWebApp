import { Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

// Component Imports
import Layout from './components/layout/Layout';
import HomePage from './components/Pages/Home';
import MyCryptoPage from './components/Pages/MyCrypto';
import PricesPage from './components/Pages/Prices';
import WatchlistPage from './components/Pages/Watchlist';

function App() {
  return (
    <div className='App'>
      <CssBaseline />
      <Layout>
        <Switch>
          <Route path='/' exact>
            <HomePage />
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

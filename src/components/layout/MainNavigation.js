import React from 'react';
// import Link from '@material-ui/core/Link';
import { Link } from 'react-router-dom';

//  Component Imports
import SignupBtn from './Header/Buttons/Signup/SignupButton';
import LoginBtn from './Header/Buttons/Login/LoginButton';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.navHeader}>
      <nav className={classes.mainNav}>
        <h3 className={classes.navBrand}>Crypto Web App</h3>
        <ul className={classes.navList}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='prices-page'>Prices Overview</Link>
          </li>
          <li>
            <Link to='my-crypto'>My Crypto</Link>
          </li>
          <li>
            <Link to='my-watchlist'>My Watchlist</Link>
          </li>
        </ul>
        <div>
          <SignupBtn />
          <LoginBtn />
        </div>
      </nav>
    </header>
  );
}

export default MainNavigation;

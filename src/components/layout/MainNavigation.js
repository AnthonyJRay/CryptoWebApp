import React from 'react';
// import Link from '@material-ui/core/Link';
import { Link } from 'react-router-dom';

//  Component Imports
import SignupBtn from './Header/Buttons/Signup/SignupButton';
import LoginBtn from './Header/Buttons/Login/LoginButton';

function MainNavigation() {
  return (
    <header>
      <div>Brand Title</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="prices-page">Prices Overview</Link>
          </li>
          <li>
            <Link to="my-crypto">My Crypto</Link>
          </li>
          <li>
            <Link to="my-watchlist">My Watchlist</Link>
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

import React from 'react';
import MainNavigation from './MainNavigation';

import TickerTape from '../ui/TickerTape/TickerTape';

function Layout(props) {
  console.log(props);
  return (
    <div>
      <MainNavigation />
      <TickerTape />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;

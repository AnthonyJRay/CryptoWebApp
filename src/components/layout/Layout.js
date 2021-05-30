import React from 'react';
import MainNavigation from './MainNavigation';

import TickerTape from '../ui/TickerTape';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <TickerTape />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;

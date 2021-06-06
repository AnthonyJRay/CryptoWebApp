import React from 'react';
import MainNavigation from './MainNavigation';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main style={{ margin: 'auto', textAlign: 'center' }}>
        {props.children}
      </main>
    </div>
  );
}

export default Layout;

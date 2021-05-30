import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <App />
      </StylesProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

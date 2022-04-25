import React from 'react';
import GlobalStyles from './style/globalStyled'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
    <GlobalStyles />
  </BrowserRouter>

);

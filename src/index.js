import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ScrollToTop from './ScrollToTop';
import { UserContextProvider } from './conText/textContext';

import { HashRouter, HashRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>
  </HashRouter>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import RouteSwitch from './RouteSwitch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
);

reportWebVitals();

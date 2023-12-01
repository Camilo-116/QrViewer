import React from 'react';
import ReactDOM from 'react-dom/client';
import QR from './QR';

const root = ReactDOM.createRoot(document.getElementById('viewer'));
root.render(
  <React.StrictMode>
    <QR />
  </React.StrictMode>
);

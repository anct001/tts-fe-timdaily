// index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import './index.css';
import HomePage from './pages/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);



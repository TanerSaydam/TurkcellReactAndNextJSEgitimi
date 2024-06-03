import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Home from './Home.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />    
    <Home/>
    <Taner/>
  </React.StrictMode>
);

reportWebVitals();

function Taner(){
  return <h1>Taner Saydam</h1>
}
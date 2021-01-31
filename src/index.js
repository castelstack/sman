import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ActiveProvider} from './utils/store';

ReactDOM.render(
  <ActiveProvider >
  <App />
</ActiveProvider>

    ,
  document.getElementById('root')
);



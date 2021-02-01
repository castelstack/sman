import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ActiveProvider} from './utils/store';
import {AuthProvider} from './utils/index';
ReactDOM.render(
  <AuthProvider>
  <ActiveProvider >
  <App />
    </ActiveProvider>
    </AuthProvider>

    ,
  document.getElementById('root')
);



import React from 'react';
import ReactDOM from 'react-dom';
import {CounterWithCustomHook} from './components/useState/CounterWithCustomHook'

ReactDOM.render(
  <React.StrictMode>
      <CounterWithCustomHook/>
  </React.StrictMode>,
  document.getElementById('root')
);

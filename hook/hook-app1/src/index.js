import React from 'react';
import ReactDOM from 'react-dom';
// import {CounterWithCustomHook} from './components/useState/CounterWithCustomHook'
import { SimpleForm } from './components/useEffect/SimpleForm';
ReactDOM.render(
  <React.StrictMode>
      {/* <CounterWithCustomHook/> */}
      <SimpleForm/>
  </React.StrictMode>,
  document.getElementById('root')
);

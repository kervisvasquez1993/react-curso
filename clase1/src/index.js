import React from 'react';
import ReactDOM from 'react-dom'
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp'
import './index.css'

const divRoot = document.querySelector('#root')
// ReactDOM.render(<PrimeraApp saludos={"hola mundo"}  hola={123} />,divRoot);
ReactDOM.render(<CounterApp value = {1000}/>,divRoot);

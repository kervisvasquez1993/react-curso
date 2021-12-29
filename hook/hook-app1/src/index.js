import React from "react";
import ReactDOM from "react-dom";
// import {CounterWithCustomHook} from './components/useState/CounterWithCustomHook'
// import { FormWithCustomHook } from './components/useEffect/FormWithCustomHook';
import {RealExampleREf} from "./components/04-useRef/RealExampleREf";
ReactDOM.render(
    <React.StrictMode>
        {/* <CounterWithCustomHook/> */}
        <RealExampleREf />
    </React.StrictMode>,
    document.getElementById("root")
);

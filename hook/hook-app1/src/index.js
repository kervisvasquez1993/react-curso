import React from "react";
import ReactDOM from "react-dom";
// import {CounterWithCustomHook} from './components/useState/CounterWithCustomHook'
// import { FormWithCustomHook } from './components/useEffect/FormWithCustomHook';
import {MultipleCustomHook} from "./components/example/MultipleCustomHook";
ReactDOM.render(
    <React.StrictMode>
        {/* <CounterWithCustomHook/> */}
        <MultipleCustomHook />
    </React.StrictMode>,
    document.getElementById("root")
);

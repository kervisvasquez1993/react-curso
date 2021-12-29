import React from "react";
import ReactDOM from "react-dom";
// import {CounterWithCustomHook} from './components/useState/CounterWithCustomHook'
// import { FormWithCustomHook } from './components/useEffect/FormWithCustomHook';
import {FocusScreen} from "./components/04-useRef/FocusScreen";
ReactDOM.render(
    <React.StrictMode>
        {/* <CounterWithCustomHook/> */}
        <FocusScreen />
    </React.StrictMode>,
    document.getElementById("root")
);

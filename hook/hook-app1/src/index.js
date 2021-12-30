import React from "react";
import ReactDOM from "react-dom";
// import {CounterWithCustomHook} from './components/useState/CounterWithCustomHook'
// import { FormWithCustomHook } from './components/useEffect/FormWithCustomHook';
import {LayoutEffetc} from "./components/05-layout-effect/LayoutEffetc";
ReactDOM.render(
    <React.StrictMode>
        {/* <CounterWithCustomHook/> */}
        <LayoutEffetc />
    </React.StrictMode>,
    document.getElementById("root")
);

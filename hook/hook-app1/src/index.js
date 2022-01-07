import React from "react";
import ReactDOM from "react-dom";
// import { CallbackHook } from "./components/06-memo/CallbackHook";
// import { Padre } from "./components/07-tarea-memo/Padre";
import { TodoApp } from "./components/08-recude/TodoApp";
// import { MemoHook } from "./components/06-memo/MemoHook";
// import {CounterWithCustomHook} from './components/useState/CounterWithCustomHook'
// import { FormWithCustomHook } from './components/useEffect/FormWithCustomHook';
// import {LayoutEffetc} from "./comp/*  */onents/05-layout-effect/LayoutEffetc";
// import { Memorize } from "./components/06-memo/Memorize";
ReactDOM.render(
    <React.StrictMode>
        {/* <CounterWithCustomHook/> */}
        
        <TodoApp />
    </React.StrictMode>,
    document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { MemoHook } from "./components/06-memo/MemoHook";
// import {CounterWithCustomHook} from './components/useState/CounterWithCustomHook'
// import { FormWithCustomHook } from './components/useEffect/FormWithCustomHook';
// import {LayoutEffetc} from "./components/05-layout-effect/LayoutEffetc";
// import { Memorize } from "./components/06-memo/Memorize";
ReactDOM.render(
  <React.StrictMode>
    {/* <CounterWithCustomHook/> */}

    <MemoHook />
  </React.StrictMode>,
  document.getElementById("root")
);

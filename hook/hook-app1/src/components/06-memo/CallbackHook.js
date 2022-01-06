import React, { useState, useCallback,  useEffect } from "react";
import { ShowIncrement } from "./ShowIncrement";
import "../useEffect/effect.css";

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);
    // el uso principal es mandar una funcion a un componente hijo.
    // const incrementar = () => {
    //     setCounter(counter + 1);
    // };

    const incrementar = useCallback((num) => setCounter(c => c +  num), [setCounter]);
    return (
        <div>
            <h1>useCallback Hooks: {counter}</h1>

            <hr />
            {/* mandar una funcion a un componente hijo

            */}

            <ShowIncrement increment={incrementar} />
        </div>
    );
};

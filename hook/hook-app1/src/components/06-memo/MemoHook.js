import React, { useState, useMemo } from "react";

import { useCounter } from "../../hook/useCounter";
// import { Small } from "./Small";
import "../useEffect/effect.css";
import { procesoPesado } from "../../helpers/procesoPesado";
export const MemoHook = () => {
    const { counter, increment } = useCounter(10);
    const [show, setShow] = useState(true);

    //  si el counter cambia necesito una version memorizada de esa funcion.
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);
    return (
        <div>
            <h1>memoHook</h1>
            <h3>
                Counter : <samll>{counter}</samll>
            </h3>
            <hr />
            <p>{memoProcesoPesado}</p>
            <button className="btn btn-primary" onClick={increment}>
                +1
            </button>
            <button
                className="btn btn-primary mx-2"
                onClick={() => setShow(!show)}
            >
                Show/Hidde:{JSON.stringify(show)}
            </button>
        </div>
    );
};

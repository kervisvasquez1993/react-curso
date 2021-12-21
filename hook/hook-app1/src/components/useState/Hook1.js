import React, { useState, useEffect } from "react";
import './counter.css'
export const Hook1 = () => {
    const [contador, setContador] = useState(0);
    const sumar = () => {
        setContador(contador + 1);
    };
    

    return (
        <>
            <h1>Counter {contador}</h1>
            <hr />
            <button className="btn btn-primary" onClick={() => sumar()}>
                +1
            </button>
        </>
    );
};

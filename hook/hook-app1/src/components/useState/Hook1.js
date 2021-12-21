import React, { useState, useEffect } from "react";
import "./counter.css";
export const Hook1 = () => {
    const [state, setState] = useState({
        counter1: 1,
        counter2: 2,
    });
    const { counter1, counter2 } = state;
    //  const sumar = () => {
    //  setContador(contador2 + 1);
    //  };

    return (
        <>
            {/* <h1>Counter {contador}</h1> */}

            <h1>contador1 : {counter1}</h1>
            <h1>contador2 : {counter2}</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={() =>
                    setState({
                        ...state,
                        counter1: counter1 + 1,
                    })
                }
            >
                +1
            </button>
        </>
    );
};

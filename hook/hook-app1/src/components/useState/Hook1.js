import React, { useState, useEffect } from "react";
import "./counter.css";
export const Hook1 = () => {
    const [{ contador1, contador2 }, setContador] = useState({
        contador1: 1,
        contador2: 2,
    });
    //  const sumar = () => {
    //  setContador(contador2 + 1);
    //  };

    return (
        <>
            {/* <h1>Counter {contador}</h1> */}

            <h1>contador1 : {contador1}</h1>
            <h1>contador2 : {contador2}</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={() =>
                    setContador({
                        contador1: contador1,
                        contador2: contador2 + 1,
                    })
                }
            >
                +1
            </button>
        </>
    );
};

import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 10 }) => {
    // [variable dentro del state, funcion ]
    const [counter, setCounter] = useState(value);

    const saludar = (e) => {
        setCounter(counter + 1);
    };

    const reset = () => {
        setCounter(value);
    };

    const restar = () => {
        setCounter(counter - 1);
    };

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>
            <button onClick={saludar}>+1</button>
            <button onClick={reset}>Reset</button>
            <button onClick={restar}>-1</button>{" "}
            {/* pasamos como referencia la funcion */}
        </>
    );
};

CounterApp.prototype = {
    value: PropTypes.number,
};

CounterApp.defaultProps = { value: "valor vacio" };

export default CounterApp;

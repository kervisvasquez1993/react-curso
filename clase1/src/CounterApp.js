import React from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {


  const saludar = (e)  => { console.log(e)}

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {value} </h2>
            <button onClick={saludar}>+1</button>  {/* pasamos como referencia la funcion */}
        </>
    );
};


CounterApp.prototype= {
    value : PropTypes.number
}

CounterApp.defaultProps = { value : "valor vacio"}

export default CounterApp;

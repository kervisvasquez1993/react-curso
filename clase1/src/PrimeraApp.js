// fc
import React from "react";
const PrimeraApp = ({saludos = "hola mundo"} ) => {

    // const saludos = 'hola mundo const'
    // console.log(props)
    return (
        <>
            <h1>{saludos}</h1>
            <p>esto es una parrafo</p>
        </>
    );
};
export default PrimeraApp;

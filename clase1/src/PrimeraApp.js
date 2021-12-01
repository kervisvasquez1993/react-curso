// fc
import React from "react";
import PropTypes from "prop-types";
const PrimeraApp = ({ saludos, subtitulo }) => {
    // if(!saludos){
    //     throw new Error('El saludo es necesario')
    // }
    // const saludos = 'hola mundo const'
    // console.log(props)
    return (
        <>
            <h1>{saludos}</h1>
            <p> {subtitulo}</p>
        </>
    );
};
PrimeraApp.propTypes = {
    saludos: PropTypes.string.isRequired,
    hola: PropTypes.number,
};

PrimeraApp.defaultProps = {
    subtitulo: "soy un sustitulo de prueba",
};
export default PrimeraApp;

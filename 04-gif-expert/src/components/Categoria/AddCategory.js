import React, { useState } from "react";
import  PropTypes from "prop-types";

const AddCategory = ({ setCategorias }) => {
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (value) => {
        setInputValue(value);
    };
    const handleSubmirt = (e) => {
        e.preventDefault();
        // setCategorias(cats  =>  [...cats, inputValue])
         if (inputValue.trim().length > 2) {
             setCategorias((cats) => [...cats, inputValue]);
             setInputValue('');
             console.log("enviado");
         }
    };
    return (
        <form onSubmit={handleSubmirt}>
            <h2>{inputValue}</h2>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => handleInputChange(e.target.value)}
            />
            <input type="submit" value="enviar" />
        </form>
    );
};


AddCategory.propTypes = {
    setCategorias : PropTypes.func.isRequired
 }

export default AddCategory ;
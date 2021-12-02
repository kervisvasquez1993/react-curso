import React, { useState } from "react";

const GifExpertApp = () => {
    // const categories = [ 'One Punch,', 'Samurai X,', 'Dragon ball'];

    const [categorias, setCategorias] = useState([
        "One Punch,",
        "Samurai X,",
        "Dragon ball",
    ]);

    const handleApp = ( value ) => {
        setCategorias([...categorias, value]);
    };
    return (
        <>
            <h2>GitExpertApp</h2>
            <button onClick={() => handleApp('test1')}>agregar</button>
            <hr />
            <ol>
                {categorias.map((category, i) => {
                    return <li key={i}>{category}</li>;
                })}
            </ol>
        </>
    );
};

export default GifExpertApp;

import React, { useState } from "react";
import {AddCategory} from './Categoria/AddCategory'
const GifExpertApp = () => {
    // const categories = [ 'One Punch,', 'Samurai X,', 'Dragon ball'];

    const [categorias, setCategorias] = useState([
        "One Punch,",
        "Samurai X,",
        "Dragon ball",
    ]);

    // const handleApp = ( value ) => {
    //     setCategorias([...categorias, value]);
    // };
    return (
        <>
            <h2>GitExpertApp</h2>
            {/* <button onClick={() => handleApp('test1')}>agregar</button> */}
            <AddCategory/>
            <hr />
            <ol>
                {categorias.map((category) => {
                    return <li key={category}>{category}</li>;
                })}
            </ol>
        </>
    );
};

export default GifExpertApp;

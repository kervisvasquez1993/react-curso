import React, { useState } from "react";
import AddCategory from "./Categoria/AddCategory";
import GifGrid from "./fetch/GifGrid"
const GifExpertApp = () => {
    // const categories = [ 'One Punch,', 'Samurai X,', 'Dragon ball'];

    const [categorias, setCategorias] = useState(["One Punch,"]);

    // const handleApp = (value) => {

    //         setCategorias([...categorias, value]);

    // };
    return (
        <>
            <h2>GitExpertApp</h2>
            {/* <button onClick={() => handleApp('test1')}>agregar</button> */}
            <AddCategory setCategorias={setCategorias} />
            <hr />
            <ol>
                {categorias.map((category) => (
                    
                    <GifGrid 
                    key={category}
                    category={category}></GifGrid>
                ))}
            </ol>
        </>
    );
};

export default GifExpertApp;

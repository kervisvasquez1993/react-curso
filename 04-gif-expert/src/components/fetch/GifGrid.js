import React, { useState, useEffect } from "react";
import { getGifs } from "../../helpers/getGif";
import { GifGridItem } from "./GifGridItem";

const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        getGifs(category).then(imgs => setImages(imgs));
    }, [category]);
   

    // getGifs(); si se deja en este nivel se vuelve e llamar
    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    /* {images.map((img) => (
                    <li key={img.id}>{img.title}</li>
                ))} */
                    // images.map(({id, title}) => (
                    //     <li key={id}>{title}</li>
                    // ))

                    images.map((img) => (
                        <GifGridItem key={img.id} {...img} />
                    ))
                }
            </div>
        </>
    );
};
export default GifGrid;

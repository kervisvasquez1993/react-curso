import React, { useState, useEffect } from "react";
import {GifGridItem} from "./GifGridItem";

const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        getGifs();
    }, []);
    const getGifs = async () => {
        const url =
            "https://api.giphy.com/v1/gifs/search?api_key=RCdtf91rKTM96WoidRUsU2OP1XMkVyoW&q=goku&limit=10";
        const resp = await fetch(url);
        const { data } = await resp.json();
        const gifs = data.map((img) => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            };
        });
        console.log(gifs);
        setImages(gifs);
    };

    // getGifs(); si se deja en este nivel se vuelve e llamar
    return (
        <>
            <h3>{category}</h3>
            
                {/* {images.map((img) => (
                    <li key={img.id}>{img.title}</li>
                ))} */
                // images.map(({id, title}) => (
                //     <li key={id}>{title}</li>
                // ))

                images.map((img) => (
                    <GifGridItem 
                    key={img.id}
                    { ...img }/>
                ))
                

                }
            
        </>
    );
};
export default GifGrid;

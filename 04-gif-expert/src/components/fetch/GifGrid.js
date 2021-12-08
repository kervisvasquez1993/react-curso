import React, {useState, useEffect} from "react";

const GifGrid = ({ category }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        getGifs();
    }, [])
    const getGifs = async () => {
        const url =
            "https://api.giphy.com/v1/gifs/search?api_key=RCdtf91rKTM96WoidRUsU2OP1XMkVyoW&q=goku&limit=5";
        const resp = await fetch(url);
        const {data} = await resp.json(); 
        const gifs = data.map(img => {
            return {
                id : img.id,
                title : img.title,
                url : img.images?.downsized_medium.url

            }
        })
        console.log(gifs);
    };

    // getGifs(); si se deja en este nivel se vuelve e llamar
    return (
        <>
            <h3>{category}</h3>
            <h4>{count}</h4>
            <button onClick={()=> setCount(count + 1)}></button>
        </>
    );
};
export default GifGrid;

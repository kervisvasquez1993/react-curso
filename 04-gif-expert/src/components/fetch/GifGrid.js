import React from "react";
import { useFetchGifs } from "../../hooks/useFetchGifs";
// import { getGifs } from "../../helpers/getGif";
import { GifGridItem } from "./GifGridItem";

const GifGrid = ({ category }) => {
    // const [images, setImages] = useState([]);
    // useEffect(() => {
    //     getGifs(category).then(setImages)
    // }, [category]);
    const { data : images, loading } = useFetchGifs(category);
    

    // getGifs(); si se deja en este nivel se vuelve e llamar
    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Loading</p> }

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

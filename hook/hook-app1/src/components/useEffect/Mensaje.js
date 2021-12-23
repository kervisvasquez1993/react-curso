import React, { useEffect, useState } from "react";

export const Mensaje = () => {
    const [cords, setCords] = useState({
        x: 0,
        y: 0,
    });

    const {x , y} = cords;
    useEffect(() => {
        const mouseMove = (e) => {
            const cords = {x : e.x , y : e.y}
            setCords(cords)
        };
        // window.addEventListener('mouseover', ({x,y}) => {
        //     console.log("x :" + x +" y:" + y)
        // })
        window.addEventListener("mouseover", mouseMove);
        return () => {
            // console.log("componente desmontado");
            window.removeEventListener("mouseover", mouseMove);
        };
    }, []);
    return (
        <>
            <h3>cordenadas : {`x:${x} , y:${y}`} </h3>
        </>
    );
};

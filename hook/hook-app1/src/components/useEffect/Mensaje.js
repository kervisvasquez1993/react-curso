import React, { useEffect } from "react";

export const Mensaje = () => {
    useEffect(() => {
        const mouseMove = (e) => {
            console.log(":D");
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
            <h3>Esto es una nombre</h3>
        </>
    );
};

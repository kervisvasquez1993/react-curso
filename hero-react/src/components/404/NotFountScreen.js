import React from "react";
import { useParams } from "react-router-dom";

export const NotFountScreen = () => {

  const parametros = useParams();
  console.log(parametros)
  return (
    <>
      <h1>Pagina no encontrada</h1>
    </>
  );
};

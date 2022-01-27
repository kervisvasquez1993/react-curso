import React from "react";
import Gasto from "./Gasto";

const ListadoGastodo = ({ gastos }) => {
  return (
    <div className="listado-gasto contenedor">
      <h2>{gastos.length ? "Gastos" : "No Hay Gasto"}</h2>
      <ul>
        {gastos.map((gasto) => (
          <Gasto key={gasto.id} gasto={gasto} />
        ))}
      </ul>
    </div>
  );
};

export default ListadoGastodo;

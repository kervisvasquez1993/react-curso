import React from "react";

const NuevoPresupuesto = () => {
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario">
        <div className="campo">
          <label className=""> Definir presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="text"
            placeholder="Añade tu Presupesto"
          />
        </div>
      </form>
    </div>
  );
};

export default NuevoPresupuesto;

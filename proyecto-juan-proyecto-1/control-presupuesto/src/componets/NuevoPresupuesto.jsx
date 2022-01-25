import React, { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({ presupuesto, setPresupuesto }) => {
  const [mensaje, setMensaje] = useState("");
  const handlePresupuesto = ({ target }) => {
    setPresupuesto(target.value);
  };
  const handlePresupuestoSubmit = (e) => {
    e.preventDefault();
    !Number(presupuesto) || Number(presupuesto) < 0
      ? setMensaje("Informacion no Valida")
      : setMensaje("Mensaje enviado");
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario" onSubmit={handlePresupuestoSubmit}>
        <div className="campo">
          <label className=""> Definir presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="text"
            placeholder="Añade tu Presupesto"
            value={presupuesto}
            onChange={handlePresupuesto}
          />
          <input type="submit" value="Añadir" />
          {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </div>
      </form>
    </div>
  );
};

export default NuevoPresupuesto;

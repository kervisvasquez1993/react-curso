import React, { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  setIsValidation = { setIsValidation },
}) => {
  const [mensaje, setMensaje] = useState("");
  const handlePresupuesto = ({ target }) => {
    setPresupuesto(Number(target.value));
  };
  const handlePresupuestoSubmit = (e) => {
    e.preventDefault();
    if (!Number(presupuesto) || Number(presupuesto) < 0) {
      setMensaje("Informacion no Valida");
      return;
    }

    setMensaje("");
    setIsValidation(true);
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario" onSubmit={handlePresupuestoSubmit}>
        <div className="campo">
          <label className=""> Definir presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="number"
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

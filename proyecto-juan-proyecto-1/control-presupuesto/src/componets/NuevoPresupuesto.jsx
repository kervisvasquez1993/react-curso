import React from "react";

const NuevoPresupuesto = ({ presupuesto, setPresupuesto }) => {
  const handlePresupuesto = ({ target }) => {
    setPresupuesto(target.value);
  };
  const handlePresupuestoSubmit = (e) => {
    e.preventDefault();
    (!Number(presupuesto) || Number(presupuesto) < 0) &&
      console.log("no paso la validacion");

    console.log("fin de la ejecucion");
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
        </div>
      </form>
    </div>
  );
};

export default NuevoPresupuesto;

import React from "react";

const Gasto = ({ gasto }) => {
  const { categoria, cantidad, nombre, fecha } = gasto;
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <div className="descripcion-gasto">
          <p className="categoria">{categoria}</p>
          <p className="nombre-gasto">{nombre}</p>
          <p className="fecha-gasto">
            Agregado el: <span>{fecha}</span>{" "}
          </p>
        </div>
      </div>
      <p className="cantidad-gasto">$ {cantidad}</p>
    </div>
  );
};

export default Gasto;

import { useEffect, useState } from "react";

const ControlPresupuesto = ({ presupuesto, gastos }) => {
  const [disponible, setDisponible] = useState(0);

  const [gastado, setGastado] = useState(0);
  // arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])
  useEffect(() => {
    const totalGastado = gastos.reduce(
      (acumulado, gasto) => Number(gasto.cantidad) + Number(acumulado), 
      0
    );
    console.log(totalGastado);
    setGastado(totalGastado);
  }, [gastos]);

  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString("es-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div className="">
        <p>Grafica aqui</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
        </p>

        <p>
          <span>Disponible: </span> {formatearCantidad(disponible)}
        </p>

        <p>
          <span>Gastado: </span> {formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;

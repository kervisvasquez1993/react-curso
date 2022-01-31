import React from "react";
import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";

const Header = ({
  gastos,
  presupuesto,
  setPresupuesto,
  isValidation,
  setIsValidation,
}) => {
  return (
    <header>
      <h1>Plaificador de gasto</h1>
      {isValidation ? (
        <ControlPresupuesto presupuesto={presupuesto} gastos={gastos}/>
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidation={setIsValidation}
        />
      )}
    </header>
  );
};

export default Header;

import { useState } from "react";
import Header from "./componets/Header";
import Modal from "./componets/Modal";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import { generarId, formatearFecha } from "./helpers";
import ListadoGastodo from "./componets/ListadoGastodo";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidation, setIsValidation] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState([]);
  const handleNuevoGasto = () => {
    setModal(true);
    setTimeout(() => {
      setAnimarModal(true);
    }, 350);
  };

  const guardarGastos = (gasto) => {
    gasto.id = generarId();
    gasto.fecha = formatearFecha();
    setGastos([...gastos, gasto]);
  };

  return (
    <>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidation={isValidation}
        setIsValidation={setIsValidation}
      />

      {isValidation && (
        <>
          <main>
            <ListadoGastodo gastos={gastos} />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGasto}
              alt="gasto agregar"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGastos={guardarGastos}
        />
      )}
    </>
  );
}

export default App;

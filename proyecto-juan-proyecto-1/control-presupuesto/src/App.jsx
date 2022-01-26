import { useState } from "react";
import Header from "./componets/Header";
import Modal from "./componets/Modal";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidation, setIsValidation] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const handleNuevoGasto = () => {
    setModal(true);
    setTimeout(() => {
      setAnimarModal(true);
    }, 350);
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
        <div className="nuevo-gasto">
          <img
            src={IconoNuevoGasto}
            alt="gasto agregar"
            onClick={handleNuevoGasto}
          />
        </div>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
        />
      )}
    </>
  );
}

export default App;

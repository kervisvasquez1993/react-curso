import { useState } from "react";
import Header from "./componets/Header";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidation, setIsValidation] = useState(false);

  return (
    <>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidation={isValidation}
        setIsValidation={setIsValidation}
      />
    </>
  );
}

export default App;

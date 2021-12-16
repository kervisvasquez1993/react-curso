// import { useState } from 'react'
import { useState } from "react";
import Header from "./components/Header";
import { Formulario } from "./components/Formulario";
import { ListadoPaciente } from "./components/ListadoPaciente";
// import './App.css'

function App() {
    const [pacientes, setPacientes] = useState([]);
    const [paciente, setPaciente] = useState([]);

    // const toma1valor = (valor) => {
    //     console.log(valor);
    // };
    return (
        <div className="container mx-auto mt-10">
            <Header />
            <div className="mt-12 md:flex">
                <Formulario paciente={pacientes} setPacientes={setPacientes} />
                <ListadoPaciente
                    pacientes={pacientes}
                    setPaciente={setPaciente}
                />
            </div>
        </div>
    );
}

export default App;

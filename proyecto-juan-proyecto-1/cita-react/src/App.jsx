// import { useState } from 'react'
import Header from "./components/Header";
import {Formulario} from "./components/Formulario"
import {ListadoPaciente} from "./components/ListadoPaciente"
// import './App.css'

function App() {
    return (
        <>
            <Header />
            <Formulario/>
            <ListadoPaciente/>
        </>
    );
}

export default App;

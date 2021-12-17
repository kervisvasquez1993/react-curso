import React, { useState, useEffect } from "react";
import { Mensaje } from "./Mensaje";

export const Formulario = ({ pacientes, setPacientes, paciente }) => {
    const [nombre, setNombre] = useState("");
    const [propietario, setPropietario] = useState("");
    const [email, setEmail] = useState("");
    const [fecha, setFecha] = useState("");
    const [sintomas, setSintomas] = useState("");
    const [error, setError] = useState(false);
    // useEffect(() => {
    //     console.log(paciente);
    // }, [paciente]);

    const gernerarId = () => {
        const ramdom = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);
        return ramdom + fecha;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // validacion del formulario
        if (
            [nombre, propietario, email, fecha, setFecha, sintomas].includes("")
        ) {
            console.log("campo vacio ");
            setError(true);
            return;
        }
        setError(false);
        // objeto de paciente

        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
            id: gernerarId(),
        };

        setPacientes([...pacientes, objetoPaciente]);
        // riniciar el form
        setNombre("");
        setPropietario("");
        setFecha("");
        setEmail("");
        setSintomas("");
    };

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">
                Seguimiento de clientes
            </h2>
            <p className="text-lg mt-5 text-center">
                Añadir Paciente y{" "}
                <span className="text-indigo-600 font-bold">
                    {" "}
                    Administralos
                </span>
            </p>

            <form
                onSubmit={handleSubmit}
                className="bg-white my-5 shadow-md rounded-lg py-10 px-5"
            >
                {error && (
                    <Mensaje mensaje={"Todos los mensaje son Obligatorios"} />
                )}
                <div className="mb-5">
                    <label
                        className="block  text-grey-700 uppercase font-bold"
                        htmlFor="mascota"
                    >
                        NOMBRE : {nombre}
                    </label>
                    <input
                        id="mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="text"
                        placeholder="nombre mascota"
                        value={nombre}
                        onChange={(e) => {
                            setNombre(e.target.value);
                        }}
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="block  text-grey-700 uppercase font-bold"
                        htmlFor="propietario"
                    >
                        PROPIETARIO : {propietario}
                    </label>
                    <input
                        id="propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="text"
                        placeholder="Propietario"
                        value={propietario}
                        onChange={(e) => {
                            setPropietario(e.target.value);
                        }}
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="block  text-grey-700 uppercase font-bold"
                        htmlFor="email"
                    >
                        EMAIL : {email}
                    </label>
                    <input
                        id="email"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="email"
                        placeholder="email@ejemplo.com"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="block  text-grey-700 uppercase font-bold"
                        htmlFor="date"
                    >
                        FECHA : {fecha}
                    </label>
                    <input
                        id="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="date"
                        value={fecha}
                        onChange={(e) => {
                            setFecha(e.target.value);
                        }}
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="block  text-grey-700 uppercase font-bold"
                        htmlFor="sintomas"
                    >
                        SINTOMAS
                    </label>
                    <textarea
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="sintomas"
                        placeholder="Describe los sintomas"
                        cols="30"
                        rows="10"
                        value={sintomas}
                        onChange={(e) => {
                            setSintomas(e.target.value);
                        }}
                    />
                </div>

                <input
                    className="bg-indigo-600 w-full p-3 
                    transition-all
                    text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer"
                    type="submit"
                    value="agregar Apaciente"
                />
            </form>
        </div>
    );
};

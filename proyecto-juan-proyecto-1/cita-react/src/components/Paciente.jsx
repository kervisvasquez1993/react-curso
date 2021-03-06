import React, {useEffect} from "react";

export const Paciente = ({ paciente, setPaciente }) => {
    const { nombre, propietario, email, fecha, sintomas } = paciente;

    useEffect(() => {console.log('Agregaste a ' + paciente.nombre)}, [setPaciente])
    
    return (
        <div className="m-5 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-grey-700 uppercase">
                Nombre :{" "}
                <span className="font-normal normal-case">{nombre}</span>
            </p>

            <p className="font-bold mb-3 text-grey-700 uppercase">
                Propietario :{" "}
                <span className="font-normal normal-case">{propietario}</span>
            </p>
            <p className="font-bold mb-3 text-grey-700 uppercase">
                email : <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-grey-700 uppercase">
                Fecha : <span className="font-normal normal-case">{fecha}</span>
            </p>
            <p className="font-bold mb-3 text-grey-700 uppercase">
                Sintomas :{" "}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>

            <div className="flex justify-between mt-10 mx-10">
                <button
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 font-bold uppercase rounded-lg"
                    type="button"
                    onClick={() => setPaciente(paciente) }
                >
                    Editar
                </button>
                <button className="py-2 px-10 bg-red-600 hover:bg-red-700 font-bold uppercase rounded-lg" type="button">
                    Eliminar
                </button>
            </div>
        </div>
    );
};

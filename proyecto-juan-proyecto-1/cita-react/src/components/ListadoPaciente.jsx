import React from "react";
import { Paciente } from "./Paciente";
export const ListadoPaciente = ({ pacientes }) => {
    // pacientes.map(p => {
    //     console.log(p)
    // })
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            <h2 className="font-black text-3xl text-center">
                Listado Listado Paciente
            </h2>

            <p className="text-xl mt-5 mb-10 text-center">
                Administra tus{" "}
                <span className="text-indigo-600 font-bold mt-5 mb-10 text-center">
                    {" "}
                    Pacientes y Citas{" "}
                </span>
            </p>
            {pacientes.map((paciente) => (
                <Paciente key={} paciente={paciente} />
            ))}
        </div>
    );
};

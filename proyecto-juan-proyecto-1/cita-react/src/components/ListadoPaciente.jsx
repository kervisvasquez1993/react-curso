import React,{useEffect} from "react";
import { Paciente } from "./Paciente";
export const ListadoPaciente = ({ pacientes, setPaciente }) => {
    // pacientes.map(p => {
    //     console.log(p)
    // })
    // console.log(setPaciente)

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            {pacientes && pacientes.length ? (
                <>
                    {" "}
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
                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                        />
                    ))}
                </>
            ) : (
                <>
                    {" "}
                    <h2 className="font-black text-3xl text-center">
                        No hay pacientes
                    </h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregando paciente{" "}
                        <span className="text-indigo-600 font-bold mt-5 mb-10 text-center">
                            {" "}
                            y apareceran en este lugar{" "}
                        </span>
                    </p>
                </>
            )}
        </div>
    );
};

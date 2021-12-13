import React from "react";

export const Formulario = () => {
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

            <form className="bg-white my-5 shadow-md rounded-lg py-10 px-5">
                <div className="mb-5">
                    <label
                        className="block  text-grey-700 uppercase font-bold"
                        htmlFor="mascota"
                    >
                        NOMBRE
                    </label>
                    <input
                        id="mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="text"
                        placeholder="nombre mascota"
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="block  text-grey-700 uppercase font-bold"
                        htmlFor="propietario"
                    >
                        PROPIETARIO
                    </label>
                    <input
                        id="propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="text"
                        placeholder="Propietario"
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="block  text-grey-700 uppercase font-bold"
                        htmlFor="email"
                    >
                        EMAIL
                    </label>
                    <input
                        id="email"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="email"
                        placeholder="email@ejemplo.com"
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="block  text-grey-700 uppercase font-bold"
                        htmlFor="date"
                    >
                        FECHA
                    </label>
                    <input
                        id="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="date"
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

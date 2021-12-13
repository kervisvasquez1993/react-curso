import React from "react";

export const Paciente = () => {
    return (
        <div className="m-5 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-grey-700 uppercase">
                Nombre : <span className="font-normal normal-case">Hook</span>
            </p>

            <p className="font-bold mb-3 text-grey-700 uppercase">
                Nombre :{" "}
                <span className="font-normal normal-case">kervis vasquez</span>
            </p>
            <p className="font-bold mb-3 text-grey-700 uppercase">
                email :{" "}
                <span className="font-normal normal-case">email@gmail.com</span>
            </p>
            <p className="font-bold mb-3 text-grey-700 uppercase">
                Fecha :{" "}
                <span className="font-normal normal-case">13-10-2021</span>
            </p>
            <p className="font-bold mb-3 text-grey-700 uppercase">
                Sintomas :{" "}
                <span className="font-normal normal-case">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eius optio, voluptas sequi architecto facere accusamus
                    pariatur praesentium quia laborum eum?
                </span>
            </p>
        </div>
    );
};

import React, { useState, useEffect } from "react";
import { Mensaje } from "./Mensaje";
import "./effect.css";

export const SimpleForm = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
    });
    const { name, email } = form;

    // const { name, email } = state;
    useEffect(() => {
        console.log("formulario cambio");
    }, [form]);

    useEffect(() => {
        console.log("cambio el email");
    }, [email]);

    const inputChange = ({ target }) => {
        setForm({
            ...form,

            [target.name]: target.value,
        });
    };

    return (
        <>
            <h1>useEffect</h1>

            <div className="form-group my-2">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="nombre"
                    autoComplete="off"
                    value={name}
                    onChange={inputChange}
                />
            </div>
            <div className="form-group my-2">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email"
                    autoComplete="off"
                    value={email}
                    onChange={inputChange}
                />
            </div>

            {(name === '123') && <Mensaje />}
        </>
    );
};

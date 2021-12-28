import React, { useEffect } from "react";
import { useForm } from "../../hook/useForm";

import "./effect.css";

export const FormWithCustomHook = () => {
    const [form, handleInputChange] = useForm({
        name: "",
        email: "",
        password: "",
    },[]);
    const { name, email, password } = form;
    useEffect(() => {
        console.log("el email cambio");
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)
    }
    // const { name, email } = state;

    

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>FormWithCustomHook</h1>

                <div className="form-group my-2">
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="nombre"
                        autoComplete="off"
                        value={name}
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group my-2">
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="****"
                        autoComplete="off"
                        value={password}
                        onChange={handleInputChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary" >
                    Guardar
                </button>
            </form>
        </>
    );
};

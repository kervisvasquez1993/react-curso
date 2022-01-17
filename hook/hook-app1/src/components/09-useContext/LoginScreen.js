import React, { useContext, useEffect } from 'react'
import { UserContext } from './UseContext'


export const LoginScreen = () => {
    const { user, setUser } = useContext(UserContext)

    const kervis = () => {
        setUser({ name: "kervis", apellido: "vasquez" })
    }
    const reset = () => {
        setUser();
    }

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
            <button className='btn btn-primary m-5' onClick={kervis} >boton</button>
            <button className='btn btn-primary m-5' onClick={reset} >vaciar</button>

            <h5>{
                (user != null) ? `Nombre : ${user.name},  Apellido : ${user.apellido}` : "vacio"
            }</h5>

        </div>
    )
}

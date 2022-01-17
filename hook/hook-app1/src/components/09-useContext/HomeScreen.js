import React, {useContext} from 'react'
import { UserContext } from './UseContext'

export const HomeScreen = () => {
    const { user } = useContext(UserContext)
    return (
        <div>
            <h1>HomeScreen</h1>
            <hr />
            <h5>{
                (user != null) ? `Nombre : ${user.name},  Apellido : ${user.apellido}` : "vacio"
            }</h5>
        </div>
    )
}

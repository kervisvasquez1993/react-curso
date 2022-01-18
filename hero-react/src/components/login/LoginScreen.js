import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginScreen = () => {
    const navigator = useNavigate()

    const handleLogin = () => {
        navigator('/', { replace: true })
    }
    return (
        <div className="container mt-5">
            <h2>Login</h2>
            <hr />
            <button className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}

import React from 'react'

export const Mensaje = ({mensaje}) => {
    return (
        <div className="bg-red-700">
            <p className="text-white font-bold text-center p-3 mb-4 uppercase">{mensaje}</p>
        </div>
    )
}

import React from 'react'
import { useCounter } from '../../hook/useCounter'
import './counter.css'

export const CounterWithCustomHook = () => {
    const {state, increment, decrementar,reset} = useCounter()
    return (
        <>
            <h1>Counter with Hook : {state}</h1>  
            <button className="btn btn-primary mx-2" onClick={() => increment(2)}>+1</button>
            <button className="btn btn-primary mx-2" onClick={() => decrementar(20)}>-1</button>
            <button className="btn btn-primary mx-2" onClick={reset}>reset</button>
        </>
    )
}

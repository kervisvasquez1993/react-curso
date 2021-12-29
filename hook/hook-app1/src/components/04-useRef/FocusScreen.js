import React, {useRef} from 'react'
import "../useEffect/effect.css";

export const FocusScreen = () => {
    const inputRef = useRef();
    const handleClick = () => {
        inputRef.current.select();
        console.log(inputRef)
    } 
    return (
        <div>
            <h1>Focusa screen</h1>
            <hr/>
            <input ref={inputRef} className="form-control" placeholder="nombre" type="text"/>
            <button className="btn btn-outline-primary mt-5" onClick={handleClick}>Focus</button>
        </div>
    )
}

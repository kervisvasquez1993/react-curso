import React, {useState} from 'react'

export const AddCategory = () => {
    const [inputValue, setInputValue] = useState('hola mundo')
    const handleInputChange = (value) => {
        setInputValue(value)
    }
    return (
        <>
            <h2>{inputValue}</h2>
            <input type="text"
                value = {inputValue}
                onChange = { (e) => handleInputChange(e.target.value)   }
            />  
        </>
    )
}


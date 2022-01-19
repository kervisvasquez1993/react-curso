import React from 'react'
import { HeroList } from '../hero/HeroList'

export const MarvelScreen = () => {
    let publisher = 'Marvel Comics' 
    return (
        <div>
            <h2>MARVEL PAGE</h2>
            <HeroList publisher={publisher}/>
        </div>
    )
}

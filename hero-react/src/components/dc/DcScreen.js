import React from 'react'
import { HeroList } from '../hero/HeroList'

export const DcScreen = () => {
    let publisher = 'DC Comics' 
    return (
        <div>
            <h2>DC PAGE</h2>
            <HeroList publisher={publisher}/>
        </div>
    )
}

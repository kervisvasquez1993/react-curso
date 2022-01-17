import React from 'react'
import { Routes, Route } from "react-router-dom";
import { DcScreen } from '../components/dc/DcScreen';
import { MarvelScreen } from "../components/marvel/MarvelScreen"


export const AppRouter = () => {
    return (
        <div>
            <h1>welcome to router in reaact</h1>
            <Routes>
                <Route path="/marvel" element={<MarvelScreen />} />
                <Route path="/dc" element={<DcScreen/>} />
                <Route path="search" element={<About />} />
            </Routes>
        </div>
    )
}

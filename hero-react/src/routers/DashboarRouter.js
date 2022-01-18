import React from 'react'
import { Routes, Route } from "react-router-dom";
import { DcScreen } from '../components/dc/DcScreen';
import { Navbar } from '../Navbar'
import { MarvelScreen } from "../components/marvel/MarvelScreen"
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboarRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="marvel" element={<MarvelScreen />} />
                <Route path="dc" element={<DcScreen />} />
                <Route path="search" element={<SearchScreen />} />
                <Route path="/" element={<MarvelScreen />} />
            </Routes>

        </>
    )
}

import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { App } from '../components/App';
import { Detalle } from '../components/Detalle';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route exact path="/detalle" element={<Detalle />} />
                <Route path='/*' element={<Navigate to='/' />} />
            </Routes>
        </BrowserRouter>
    )
}

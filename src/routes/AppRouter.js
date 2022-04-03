import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { App } from '../components/App';
import { Detail } from '../components/Detail';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route exact path="/detail" element={<Detail />} />
                <Route path='/*' element={<Navigate to='/' />} />
            </Routes>
        </BrowserRouter>
    )
}

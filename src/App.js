import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Stats from './Stats';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/stats/:steamID" element={<Stats />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../pages/Home';
import Projetos from "../pages/Projetos";
import Skills from '../pages/Skills';

const Rotas = ()=>{
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route  path="/projeto" element={<Projetos/>}/>
            <Route  path="/skills" element={<Skills/>}/>
        </Routes>
    </BrowserRouter>
}

export default Rotas;
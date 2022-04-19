import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
const Topo = ()=> {
    return(
        <header className='topo-container'>
        <div className='topo-conteudo'>
            <h2>Filipe Sena</h2>

            <nav className='topo-links'>
                
            <Link className='topo-link' to='/'>Home</Link>
            <Link className='topo-link' to='/projeto'>Projetos</Link>
            <Link className='topo-link' to='/skills'>Skills</Link>
            </nav>
        </div>
        </header>
    );
}

export default Topo;
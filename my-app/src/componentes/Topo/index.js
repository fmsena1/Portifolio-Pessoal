import React from 'react';
import './style.css';
const Topo = ()=> {
    return(
        <header className='topo-container'>
        <div className='topo-conteudo'>
            <h2>Filipe Sena</h2>

            <nav className='topo-links'>
            <a className='topo-link' href='#'>Home</a>
            <a className='topo-link' href='#'>Projetos</a>
            <a className='topo-link' href='#'>Contato</a>
            <a className='topo-link' href='#'>Skills</a>
            </nav>
        </div>
        </header>
    );
}

export default Topo;
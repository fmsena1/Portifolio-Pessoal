import React from "react";
import './style.css';
import EstruturaPagina from "../../componentes/EstruturaPagina";
import imagemEscolhida from './img/user.png'


const Home = ()=>{
    return(
        <EstruturaPagina>
    <div className="main-container">
        <div className="container">
            <h1>
                Olá, eu sou Filipe Magalhães Sena.
            </h1>
            <p>Estudante de Programação JavaScript.</p>
        </div>
        <div className="imagem-home">
            <img className="img-perfil" src={imagemEscolhida} alt="Filipe" />
        </div>
            

    </div>
    </EstruturaPagina>);
}
export default Home;
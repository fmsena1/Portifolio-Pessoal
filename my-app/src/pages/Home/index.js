import React from "react";
import './style.css';


const Home = ()=>{
    return(
    <div className="main-container">
        <div className="container">
            <h1>
                Olá, eu sou Filipe Magalhães Sena.
            </h1>
            <p>Estudante de Programação JavaScript.</p>
            <div className="button-container">
                <button>Contato</button>
                <button>Projetos</button>
            </div>
        </div>
        <div className="imagem-home">
            <img src="./img/user.png" alt="Filipe" />
        </div>
            

    </div>);
}
export default Home;
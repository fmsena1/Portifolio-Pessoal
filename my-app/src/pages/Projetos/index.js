import React from "react";
import EstruturaPagina from "../../componentes/EstruturaPagina";
import './style.css';
import ImgProjetoCalc from '../img/calc.png';

const Projetos = ()=>{
    return( 
       <EstruturaPagina>
         <div className="card-container">
                <div className="card-image">
                    <img  className='img-projeto'src={ImgProjetoCalc} alt='calculadora'></img>
                    <h2 className="title-projeto">Calculadora</h2>
                    <p className="paragrafo-projeto">Calculadora criada com JavaScript</p>
                    <button className="button-projeto"> <a href="https://github.com/fmsena1/Calculadora" >
                        Repositorio</a>
                        </button>
                </div>
                <div className="card-image">
                    <img  className='img-projeto'src={ImgProjetoCalc} alt='calculadora'></img>
                    <h2 className="title-projeto">Interface de Usuário Netflix</h2>
                    <p className="paragrafo-projeto">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </p>
                    <button className="button-projeto"> <a href="https://github.com/fmsena1/Calculadora" >
                        Repositorio</a>
                        </button>
                </div>
                <div className="card-image">
                    <img  className='img-projeto'src={ImgProjetoCalc} alt='calculadora'></img>
                    <h2 className="title-projeto">Player de Audio</h2>
                    <p className="paragrafo-projeto">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </p>
                    <button className="button-projeto"> <a href="https://github.com/fmsena1/Calculadora" >
                        Repositorio</a>
                        </button>
                </div>
                

            </div>  
            <div className="card-container">
                <div className="card-image">
                    <img  className='img-projeto'src={ImgProjetoCalc} alt='calculadora'></img>
                    <h2 className="title-projeto">Lista de Tarefas</h2>
                    <p className="paragrafo-projeto">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </p>
                    <button className="button-projeto"> <a href="https://github.com/fmsena1/Calculadora" >
                        Repositorio</a>
                        </button>
                </div>
                <div className="card-image">
                    <img  className='img-projeto'src={ImgProjetoCalc} alt='calculadora'></img>
                    <h2 className="title-projeto">Tela-de-Cadastro-Inicial</h2>
                    <p className="paragrafo-projeto">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </p>
                    <button className="button-projeto"> <a href="https://github.com/fmsena1/Calculadora" >
                        Repositorio</a>
                        </button>
                </div>
                <div className="card-image">
                    <img  className='img-projeto'src={ImgProjetoCalc} alt='calculadora'></img>
                    <h2 className="title-projeto">Landing-Page </h2>
                    <p className="paragrafo-projeto">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </p>
                    <button className="button-projeto"> <a href="https://github.com/fmsena1/Calculadora" >
                        Repositorio</a>
                        </button>
                </div>
                

            </div> 

            
       </EstruturaPagina>
    );
}

export default Projetos;
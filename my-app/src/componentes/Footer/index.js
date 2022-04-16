import React from "react";
import './style.css';
import ImgLinkedin from '../img/linkedin.png';
import ImgGithub from '../../pages/img/git.png'

const Footer = ()=>{

    return(
        <footer className="rodape">
            <div className="limite-container">
                <p>
                Copyright 2022 / Portifolio 
                </p>
                <a href="https://www.linkedin.com/in/filipe-magalh%C3%A3es-sena-859b53176/"><img  className='links'src={ImgLinkedin} alt="linkedin"></img></a>
                <a href="https://github.com/fmsena1"><img  className='links'src={ImgGithub} alt="github"></img></a>
                
            </div> 
        </footer>
    );
}

export default Footer;
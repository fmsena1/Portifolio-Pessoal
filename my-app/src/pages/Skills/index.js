/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './style.css'
import ImagemHtml from '../img/html.png';
import ImagemCSS from '../img/css.png';
import ImagemJS from '../img/js.png';
import ImagemReact from '../img/react.png';
import ImgGit from '../img/git.png';
import ImgNode from '../img/node.png';
import EstruturaPagina from "../../componentes/EstruturaPagina";

const Skills = ()=>{
    return( 
        <EstruturaPagina>
            <div className="container-skills">
                <div className="title">
                <h1>Skills</h1>
                </div>
                <div className="card-container">
                    <div className="card-skills">
                        <img src={ImagemHtml}></img>
                        <h2 className="title-card">HTML</h2>
                    </div>
                    <div className="card-skills">
                    <img src={ImagemCSS}></img>
                        <h2 className="title-card">CSS</h2>
                    </div>
                    <div className="card-skills">
                    <img src={ImagemJS}></img>
                        <h2 className="title-card">JavaScript</h2>
                    </div>

                </div>
                <div className="card-container2">
                    <div className="card-skills">
                    <img src={ImagemReact}></img>
                        <h2 className="title-card">ReactJS</h2>
                    </div>
                    <div className="card-skills">
                    <img src={ImgGit}></img>
                        <h2 className="title-card">GitHub</h2>
                    </div>
                    <div className="card-skills">
                    <img src={ImgNode}></img>
                        <h2 className="title-card">NodeJS</h2>
                    </div>
                </div>
                
                
            </div>
        </EstruturaPagina>
    );
}

export default Skills;
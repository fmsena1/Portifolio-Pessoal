import React from "react";

import Footer from "../Footer";

import Topo from "../Topo";

const EstruturaPagina = ( props)=>{
    return(
        <section>
            <Topo/>
            
             {props.children}

             <Footer/>
        </section>
    );
}

export default EstruturaPagina;
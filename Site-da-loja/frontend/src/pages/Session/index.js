import React from 'react'
import './index.css'
import './animation.css'

export default function Session({ history }){
    function backRoute(){
        history.push('/')
    }

    return(
        <>
        <div id="back" onClick={backRoute}>&#9754; <p>Voltar</p></div>
            <h1>Sessão Iniciada</h1>
            <ul className="session">
                <li className="rota"><a href="../New/index.js">Produtos</a></li>
                <li className="rota"><a href="../Deliveries/index.js">Entregas</a></li>
            </ul>
        </>
    )
}
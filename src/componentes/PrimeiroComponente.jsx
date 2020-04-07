import React from 'react'

let isLegal = true;

export default (props) => 
    <div>
        <h1>{props.valor}</h1>
        <h2>{props.outroValor}</h2>
        <p>{true ? 'Sim' : 'Não'}</p>
        <p>{isLegal ? 'Legal' : 'NãoLegal'}</p>
        <p>{Math.random()*100}</p>
    </div>

// export default () => 
//     <h1>Primeiro Componente!!</h1>

// function primeiro(){
//     return <h1>Primeiro Componente!!</h1>
// }


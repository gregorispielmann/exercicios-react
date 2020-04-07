import React from 'react'

const CompA = props => 
    <h1>Primeiro diz: {props.valor}</h1>

const CompB = props => 
    <h1>Segundo diz: {props.valor}</h1>

export default CompA // Retorna o CompA por padrao
//pode ser exportado apenas uma coisa por padrão

export{ CompA, CompB }

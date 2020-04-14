import React from 'react'
import { filhosComProps } from '../utils/utils'

export default props =>
<div>
    <h1>Família</h1>
    {filhosComProps(props)}
    {/* Melhor criar uma função para esse tipo de situação */}

    {/* {React.Children.map(props.children, filho =>{
        return React.cloneElement(filho, { ...props })
    })}  */}
    {/* Precisa fazer assim para propagar as props para mais de um filho */}

    {/* {React.cloneElement(props.children, { ...props })} */}
    {/* ... Cria um clone do objeto e espalha no novo objeto */}

    {/* {React.cloneElement(props.children, { props })}  Passa direto o objeto recebido - pouco usada*/}
    {/* {React.cloneElement(props.children, 
        { sobrenome: props.sobrenome }) /* Clona o componente e consegue passar propriedades para ele, e ele que será renderizado */} 
    {/* {props.children} */}
</div>
import React, { useState, useEffect } from 'react'

//componente funcional não tem estado até usar o hooks

//dentro do contexto funcional

export default props => {
   
    // desestruturação
    //const[, n2, n3, n4] = lista //pega o segundo terceiro e quarto da lista
    
    //valor e depois a função para alterar
    //indice zero valor, indice 1 função que altera o valor
    const [contador, setContador] = useState(100)
    const [status, setStatus] = useState('Par')

    // função será chamada sempre que o componente for alterado
    useEffect(()=>{
        contador % 2 === 0 ? setStatus('Par') : setStatus('Impar')
    })

    return(
        <div>
            <h1>{contador}</h1>
            <h2>{status}</h2>
            <button onClick={() => setContador(contador - 1)}>Dec</button>
            <button onClick={() => setContador(contador + 1)}>Inc</button>
        </div>
    )
}
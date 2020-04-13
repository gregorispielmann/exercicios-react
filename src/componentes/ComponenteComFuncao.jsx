import React from 'react'

const aprovados = ['Paula', 'Roberta', 'Gustavo', 'Julia']

export default props => {
    //função para gerar pedaço de componente JSX 
    // se todas as info são recebidas na props e não precisar de estado melhor usar componentes baseados em função

    //Quando precisar usar o estado do componente não pode ser baseado em função mas sim em classe

    const gerarItens = itens => {
        return itens.map((item, index) => <li key={index} >{item}</li>)
    }

    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )
}
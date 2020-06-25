import React from 'react'
import { connect } from 'react-redux'
//faz a ligação do componente com o estado geral da aplicação

import Card from './Card'

const Media = props => {
    const { min, max } = props;
    return (
        <Card green title="Média dos números">
            <div className="Media">
                <span>
                    <span>Resultado: </span>
                    <strong>{( min + max ) / 2}</strong>
                </span>
            </div>
        </Card>
    )
}

//mapear os dados para o componente
const mapStateToProps = state => {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

//precisamos do connect e passar o mapeamento do estado para as props
export default connect(mapStateToProps)(Media)

// padrão de projeto chamado DECORATOR,
// padrão que substitui a herança ele usa decompocisão, para acrescentar coisas no objeto,
// cada vez que pega um componente ele vai instanciar um novo
// ele vai usar essa estratégia por baixo dos panos
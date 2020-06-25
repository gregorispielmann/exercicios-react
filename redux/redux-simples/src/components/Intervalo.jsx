import './Intervalo.css'
import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/numeros'

const Intervalo = props => {
    const {min, max} = props;
    return (
        <Card red title="Intervalo de números">
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    {/* o simbolo "+" serve para converter para numero */}
                    <input type="number" value={min} onChange={e => props.alterarMinimo(+e.target.value)} />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} onChange={e => props.alterarMaximo(+e.target.value)} />
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = state => {
    return{
        min: state.numeros.min,
        max: state.numeros.max
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        alterarMinimo(novoNumero) {
            //action creator ->(gerando uma) action
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action) //passa a action para todos os reducers
        },
        alterarMaximo(novoNumero) {
            const action = alterarNumeroMaximo(novoNumero)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo)
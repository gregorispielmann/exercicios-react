import React, { Component } from "react";

export default class Contador extends Component {
    state = {
        numero: this.props.numero
    }

    maisUm = () => {
        this.alterarNumero(1) // passar o elemento que quer modificar
        //this.state.numero++;
    }
    menosUm = () => {
        this.alterarNumero(-1) 
        //this.state.numero++;
    }
    alterarNumero = diferenca => {
        this.setState({ numero: this.state.numero + diferenca}) // passar o elemento que quer modificar
        //this.state.numero++;
    }

    render() {
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={() => this.alterarNumero(10)}>Inc10</button>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
                <button onClick={() => this.alterarNumero(-10)}>Dec10</button>
            </div>
        )
    }
}
//todas as propriedades recebidas por props são somente leitura


// resolver problema de this... por padrão em js é o elemento que é acionado... colocando um construtor
// força a o this do elemento ser a classe
// essa é uma forma pouco usada e muito verbosa
// constructor(props){
//     super(props)
//     this.maisUm = this.maisUm.bind(this)
// }

// usar um arrow function tbm resolve o problema do this
/* <button onClick={() => this.maisUm()}>Inc</button> */

// dessa forma tbm resolve, pois ele leva em consideração o local em que foi escrita, conceito de contexto lexo
// maisUm = () => {
//     this.props.numero++;
// }

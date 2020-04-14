import React, { Component } from "react";

//componente baseado em classe tem controle de estado

export default class ComponenteClasse extends Component {
  render() {
    return <h1>{this.props.valor || "Padrão"}</h1>;
  }
}

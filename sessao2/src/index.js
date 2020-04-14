import React from "react";
import ReactDOM from "react-dom";
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import { CompA, CompB as B } from './componentes/DoisComponentes'
// import A, { CompB as B } from './componentes/DoisComponentes' // com o comp a como padrão
// import MultiElementos from './componentes/MultiElementos'
// import FamiliaSilva from './componentes/FamiliaSilva'
// import Familia from './componentes/Familia'
// import Membro from './componentes/Membro'
// import ComponenteComFuncao from './componentes/ComponenteComFuncao'
// import Pai from "./componentes/Pai";
// import ComponenteClasse from "./componentes/ComponenteClasse";
// import Contador from './componentes/Contador'
import Hook from './componentes/Hook'

const elemento = document.getElementById("root");

ReactDOM.render(
  <div>
      <Hook />
      {/* <Contador numero={2} /> */}
    {/* <ComponenteClasse valor="Sou um componente de classe!" /> */}
    {/* <Pai /> */}
    {/* <ComponenteComFuncao /> */}
    {/* <Familia sobrenome="Pereira">  
        {/* Propagar props para os filhos usando props.children */}
    {/* <Membro nome="Andre" />
            <Membro nome="Mariana" />
        </Familia> */}
    {/* <PrimeiroComponente valor="Bom dia!" outroValor={Math.pow(2,8)}/> */}
    {/* <A valor="Componente A"/>
        <B valor="Sou component B"/> 
        <MultiElementos /> */}
    {/* <FamiliaSilva /> */}
    {/* <Familia>
            <Membro nome="Andre" sobrenome="Pereira" />
            <Membro nome="Mariana" sobrenome="Pereira" />
        </Familia> */}

    {/* Propagar propriedade */}
    {/* <FamiliaSilva sobrenome="Silva"/> Comunicação direta Pai tem referencia ao componente filho */}
  </div>,
  elemento
);

// const jsx = <h1> Olá React </h1>
// ReactDOM.render (jsx, elemento)

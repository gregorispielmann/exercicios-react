import React from "react";

export default (props) => (
  <div>
    <button onClick={() => props.notificarSaida("shopping")}>Vou sair</button> 
    {/* Quando precisa executar a função passando parametro precisa fazer o arrow function  */}
  </div>
);

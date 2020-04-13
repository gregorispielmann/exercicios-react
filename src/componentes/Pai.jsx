import React from "react";
import Filho from "./Filho";

export default (props) => {
  let lugarInformado = "Nenhum";

  const notificarSaida = (lugar) => (lugarInformado = lugar);

  //const notificarSaida = (lugar) => alert(`Liberado para: ${lugar}`);
  return (
    <div>
      {lugarInformado}
      <Filho notificarSaida={notificarSaida} />
    </div>
  );
};

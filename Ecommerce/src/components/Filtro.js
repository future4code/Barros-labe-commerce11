import React from "react";
import { Input } from "../Style";

function Filtro(props){
    return(
    <div>
      <h2>Filtros</h2>
      <p>Valor minimo:</p>
      <Input
              type="number"
              onChange={props.filtrarMin}
            />
      <p>Valor máximo:</p>
      <Input
              type="number"
              onChange={props.filtrarMax}
            />
      <p>Busca por nome:</p>
      <Input
                type="text"
                onChange={props.buscarProduto}
            />
    </div>
    )
}

export default Filtro;
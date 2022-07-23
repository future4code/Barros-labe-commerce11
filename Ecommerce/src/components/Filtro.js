import React from 'react'
import {Input} from "../style";

function Filtro (props) {
    
    return (
      <div>
            <h2>Filtros</h2>
            <p>Valor minimo:</p>
            <Input
                value={props.minPrice}
                type="number"
                onChange={(e)=>{props.setMinPrice(e.target.value)}}
              />
            <p>Valor máximo:</p>
            <Input
                value={props.maxPrice}
                type="number"
                onChange={(e)=>{props.setMaxPrice(e.target.value)}}
              />
            <p>Busca por nome:</p>
            <Input    
                value={props.querry}
                type="text"
                onChange={(e)=>{props.setQuerry(e.target.value)}}
              />
      </div>
  )
}

export default Filtro;
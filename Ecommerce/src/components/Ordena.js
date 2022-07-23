import React from 'react'

import {ParteSuperior} from "../style";
import {listaDeDados} from "../MockDeDados";

const OrdenaItens = (props) => {
    
    return(
        <div>
             <ParteSuperior>
                <p className = "frase1">Quandidade de produtos: {listaDeDados.length }</p>    

                <span>
                    <label>Ordenação: </label>
                    <select
                    value={props.order}
                    onChange={evento => {props.setOrder(evento.target.value)}}
                    >
                        <option value={"value"}>crescente</option>
                        <option value={"desc"}>decrescente</option>  
                    </select>
                </span>
            </ParteSuperior>
        </div>
        
)}

export default OrdenaItens;

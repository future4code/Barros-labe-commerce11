import React from 'react'
import { Div } from "../style";



function PaiProduto (props) {
    
    return(
        <div>
            
            <Div>   
                <img src ={props.fotoProduto} className="fotoProduto"/>
                <p>{props.nomeProduto}</p>
                <p>R${props.valorProduto}</p> 
                <button>Adicionar ao carrinho </button>
            </Div>

        </div>
    )
}

export default PaiProduto;
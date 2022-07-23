import React, {useState} from 'react';

import './App.css';
import {listaDeDados} from "./MockDeDados";
import PaiProduto from './components/PaiProduto';
import Filtro from './components/Filtro';
import Carrinho from "./components/Carrinho";
import OrdenaItens from "./components/Ordena";
import logo from './img/GJG.gif';

import {ContainerPrincipal, ConteudoCentral, StyleFiltro, StyleCarrinho, Header, ImagemCabecalho} from "./style";

function App() {

  const [querry, setQuerry] = useState("")
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(Infinity)
  
  const [order, setOrder] = useState ("value");
  const [dados] = useState(listaDeDados);

  const mapeaDados =   
  dados
  .filter((item) =>{
    return item.value <= maxPrice
  })
  .filter((item) =>{
    return item.value >= minPrice
  })
  .filter((item) =>{
    return item.name.includes(querry)
  })
  .sort((currentValue, nextValue)=>{
      if(order === "value") {
        return currentValue.value - nextValue.value;
      }
      else {
        return nextValue.value - currentValue.value;
      }
  })
  .map(dados => {
    return <PaiProduto nomeProduto ={dados.name} valorProduto ={dados.value} fotoProduto={dados.imageUrl}
    key={dados.id} 
    />   
  })   

  return (
    <div className="App">

              <StyleFiltro>
                <Filtro
                  maxPrice={maxPrice}
                  setMaxPrice={setMaxPrice}
                  minPrice={minPrice}
                  setMinPrice={setMinPrice}
                  querry={querry}
                  setQuerry={setQuerry}
                  />
              </StyleFiltro>

              <Header>
                <ImagemCabecalho src={logo} alt="logomarca" />
              </Header> 

              <ConteudoCentral>

                 <OrdenaItens
                  order={order}
                  setOrder={setOrder}
                  />
                
                  <ContainerPrincipal>
                            {mapeaDados}
                  </ContainerPrincipal>  
                  
              </ConteudoCentral>


              <StyleCarrinho>
                 <Carrinho>
                  </Carrinho>
              </StyleCarrinho>
    </div>  
  )
}

export default App;
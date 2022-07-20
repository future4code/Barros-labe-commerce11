import React, { useState } from 'react';
import Carrinho from './components/Carrinho';
import Filtro from './components/Filtro';
import Produtos from './components/Produtos';
import Produtos2 from './components/Produtos2';
import { DivProdutosLD, DivProdutosLE, Header, ImagemCabecalho, StyleCarrinho, StyleFiltro } from './Style';
import { DadosDeTarefas } from './MockDeDados';
import logo from './img/GJG.gif'
import "./App.css"



function App() {




  const [listaDeTarefas, setListaDeTarefas] = useState(DadosDeTarefas)
  const [querry, setQuerry] = useState("")
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(Infinity)

  const produtosMap = listaDeTarefas
  .filter((item) =>{
    return item.value <= maxPrice
  })
  .filter((item) =>{
    return item.value >= minPrice
  })
  .filter((item) =>{
    return item.name.includes(querry)
  })
  .map((item, index) => {return (
    <div key={index}
    id={item.id} 
    name={item.name} 
    valor={item.value}
    imagem={item.imageUrl}
    />
    )})


  return (
    
      <div className='container'>
     <Header>
      
      <ImagemCabecalho src={logo} alt="logomarca" />
      
      </Header>
      
    <div className='principal'>
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
    <DivProdutosLE>
      <Produtos></Produtos>
    </DivProdutosLE>
    <DivProdutosLD>
      <Produtos2></Produtos2>
    </DivProdutosLD> 
    <StyleCarrinho>
      <Carrinho></Carrinho>
    </StyleCarrinho>

    </div>
    </div>
    
  );
}

export default App;

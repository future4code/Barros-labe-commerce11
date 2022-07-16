import React, { useState } from 'react';
import Carrinho from './components/Carrinho';
import Filtro from './components/Filtro';
import Produtos from './components/Produtos';
import Produtos2 from './components/Produtos2';
import { DivProdutosLD, DivProdutosLE, Header, ImagemCabecalho, StyleCarrinho, StyleFiltro } from './Style';
import { DadosDeTarefas } from './MockDeDados';
import logo from './img/GJG.gif'


function App() {
  const [nome, setNome] = useState("")
  const [valor, setValor] = useState("")
  const [image, setImage] = useState("")
  const [listaDeTarefas, setListaDeTarefas] = useState(DadosDeTarefas)


  return (
    
      <div>
     <Header>
      
      <ImagemCabecalho src={logo} alt="logomarca" />
      
      </Header>
      
    <div className='principal'>
      
    <StyleFiltro>
      <Filtro></Filtro>
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

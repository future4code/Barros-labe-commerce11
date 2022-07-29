import styled from "styled-components";

export const ConteudoCentral = styled.main`
    width: 900px;
    height: max-content;

    margin: auto;

    .frase1{
        margin: 0;
    }
`
export const ContainerPrincipal = styled.div`
    
    width: 900px;
    height: max-content;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    position: absolute;
    top: 360px;

    margin-bottom: 50px;
`
export const ParteSuperior = styled.section` 
    width: 900px;
    height: 50px;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    position: absolute;
    top: 310px;

    p{
        margin-right: 300px;
    }
`

export const Div = styled.div`
    border : 2px solid black;
    border-radius : 5px;

    width: 250px;
    height: 400px;

    margin: 50px auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        font-size: 0.875rem;
    }
    .fotoProduto{
        width: 250px;
        height: 250px;
    }
`

export const ImagemCabecalho = styled.img`
  display: flex;
  justify-items: center;
  align-items: center;
  height: 300px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
`

export const Header=styled.header`
  background-color: white;
  color: #fff;
  font-size: 18px;
`

export const StyleFiltro=styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 border: solid 2px;
 width: 250px;
 height: 584px;
 
 position: absolute;
 top: 310px;    

 input{
 margin: 2px;
 width: 190px;
 margin-top: -1px
 }
 p{
 margin: 2px;
 }
 h2{
 margin:10px
 }
`
export const Input = styled.input`
  display: flex; 
`

export const StyleCarrinho=styled.div`
display: flex;
border: solid 2px;
width: 250px;
height: 584px;
flex-direction: column;

position: absolute;
top: 310px;
right: 0;  

    button{
width: 190px;
margin: 10px;
}
h2{
margin:10px
}
`
import styled from "styled-components";

export const Header=styled.header`
  display: flex;
  justify-content: space-between;
  background-color: white;
  color: #fff;
  font-size: 18px;
`

export const ImagemCabecalho = styled.img`
  display: flex;
  justify-items: center;
  align-items: center;
  height: 300px;
`;

export const StyleFiltro=styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 border: solid 2px;
 width: 360px;
 height: 584px;
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
`;

export const DivProdutosLE=styled.div`
display: flex;
justify-content: center;

h5{
    margin:50px;
    
}`

export const DivProdutosLD=styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
`

export const StyleCarrinho=styled.div`
display: flex;
border: solid 2px;
width: 340px;
height: 584px;
flex-direction: column;
button{
width: 190px;
margin: 10px;
}
h2{
margin:10px
}`
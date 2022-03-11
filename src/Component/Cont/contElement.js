  import styled from "styled-components";
  import imag from '../Img/p2.jpg';
   export const Container = styled.div`
  background:url(${imag});
  height:100vh;
  width:100%;
  object-fit:content;
  flex-wrap:nowrap;
  background-position:center;
  background-size:cover`;
  export const Content = styled.div`
  height:calc(100vh - 100px);
  width:80vw;
  max-height:100%;
  padding:0px 20px;`
  export const Item = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  height:100vh;
  max-height:100%;
  width:35%;
  @media screen and (max-width:470px){
      width:95%;
      font-size:20px;
  }
  @media screen and (max-width:736px){
    width:95%;
    font-size:20px;
}`;
  export const H1 = styled.h1`
  font-size:40px;
  color:#150f0f;
  `;
  export const P = styled.p`
  font-size:35px;
  margin-bottom:10px;
  @media screen and(max-width:470px){
    font-size:20px;
  }
  `;
  export const Button = styled.button`
 background-color:#e31837;
 color:#fff;
 font-size:25px;
 width:60%;
 border:none;
 border-radius:7px;
 padding:5px;
 transition: 0.2s ease-in-out;
 &:hover{
     background-color:#ffc500;
    color:#000;
    cursor:pointer;
    transition: 0.2s ease-in-out;
 }
 @media screen and (max-width:470px){
    width:100%;
}
@media screen and (max-width:736px){
  width:40%;
}
  `;

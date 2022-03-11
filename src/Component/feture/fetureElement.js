import styled from 'styled-components';
import  Logo from '../Img/p2.jpg';
export const Feturecontainer = styled.div`
 background:url(${Logo});
 height:500px;
 background-size:cover;
 background-position:center;
 object-fit:cover;
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 color:#150f0f;
 text-align:center;
 h1{
     font-size:50px;
 }
 p{
     margin-bottom:1rem;
     font-size:35px;
 }
`;
export const FetureButton = styled.button`
font-size:25px;
padding:6px 30px;
border:none;
border-radius:5px;
background:#e31837;
color:#fff;
transition: 0.2s ease-out;
&:hover{
    background:#ffc500;
    transition:0.2s ease-out;
    cursor:pointer;
}`
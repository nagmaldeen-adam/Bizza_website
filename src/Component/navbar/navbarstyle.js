import styled from 'styled-components';
import {NavLink as Link } from 'react-router-dom';
import {FaPizzaSlice } from 'react-icons/fa';
 export const Nav = styled.nav`
  background:#150f0f;
  height:100px;
  display:grid;
`;
 export const NavLink = styled(Link)`
  display:flex;
  align-items:center;
  font-size:30px;
  text-decoration:none;
  cursor:pointer;
   color:white;
h3{
   width:40%;
   padding-left:30px;
   font-size:50px;
}
`;
export const NavIcon = styled.div`
 width:55%;
 display:flex;
 justify-content:flex-end;
 color:#fff;
 cursor:pointer;
 `;
export const Bars = styled(FaPizzaSlice)`
transform:rotate(315deg);
width:20px;`


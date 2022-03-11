 import styled from 'styled-components';
 import {Link} from 'react-router-dom';
 import {FaTimes} from 'react-icons/fa';
 export const SidebarContainer = styled.div`
 display:grid;
 width:150px;
 height:100%;
 top:0;
 z-index:1000;
 position:fixed;
 align-items:center;
 transition:0.3s ease-in-out;
 background:#e31837;
 right:${({isOpen}) => (isOpen ? '0' : '-1000px')};
 @media screen and (max-width:470px){
 width:50%;
 }`;
 export const CloseIcon = styled(FaTimes)`
 color:#000;
 `;
 export const Icon = styled.div`
 top:15px;
 right:12px;
 position:absolute;
 outline:none;
 background:transparent;
 border:transparent;
 cursor:pointer;
 font-size:15px;`;
 export const SidebarMenu = styled.div`
 display:grid;
 grid-template-columns:1fr;
 grid-template-rows:repeat(3,80px);
 text-align:center;
 @media screen and (max-width:470px){
    grid-template-rows:repeat(3,60px); 
 }
 `;
 export const SidebarLink = styled(Link)`
 display:flex;
 align-items:center;
 justify-content:center;
 font-size:19px;
 transition: 0.3s ease-out;
 cursor:pointer;
 color:#fff;
 list-style:none;
 text-decoration:none;
 &:hover{
     color:#e31837;
     transition:0.3s ease-in-out;
 }`;
 export const Btnwrap = styled.div`
 display:flex;
 justify-content:center;`;
 export const SidebarRoute = styled(Link)`
  background:#150f0f;
 white-space:nowrap;
 padding:10px 20px;
 font-size:19px;
 border-radius:5px;
 outline:none;
 border:none;
 color:#fff;
 text-decoration:none;
 transition:0.3s ease-in-out;
 cursor:pointer;
&:hover{
    background:#fff;
    transition:0.3s ease-in-out;
    color:#010606;
}
 `
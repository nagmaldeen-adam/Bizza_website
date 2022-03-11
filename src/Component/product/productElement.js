import styled from 'styled-components';
export const Productcontainer = styled.div`
width:100%;
min-height:120vh;
color:#fff;
background:#150f0f;`
;
export const Productwraper =styled.div`
display:grid;
grid-template-columns:repeat(auto-fill,minmax(360px ,1fr));
justify-content:space-evenly;
width:100%;
@media screen and (max-width:450px){
display:grid;
grid-template-columns:repeat(auto-fill,minmax(290px ,1fr));
justify-content:space-evenly;
}
@media screen and (max-width:0px){
    grid-template-columns:repeat(auto-fill,minmax(290px ,1fr));
    }
`;
export const Productcard =styled.div`
`;
export const ProductimgContainer = styled.div`
text-align:center;
width:100%;
`;
export const Productimg =styled.img`
height:300px;
width:60%;
object-fit:cover;
border-radius:9px;
box-shadow:5px 5px #fdc500;`;
export const Productheading =styled.h1`
font-size:clamp(2rem ,2.5vw ,3rem);
text-align:center;
letter-spacing:2px;
word-spacing:1px;
padding:30px 0;`;
export const Productname =styled.h1`
font-weight:normal;
text-align:center;
font-size:30px;`;
export const Productinfo =styled.div`
display:grid;
grid-template-columns:repeat(auto-fill,minmax(330px ,1fr));
text-align:center;
flex-wrap:nowrap;
padding:0 60px;
 @media screen and (max-width:470px){
    display:grid;
    grid-template-columns:repeat(auto-fill,minmax(290px ,1fr));
    text-align:center;
    justify-content:center;
 }
 @media screen and (max-width:870px){
    display:grid;
    grid-template-columns:repeat(auto-fill,minmax(290px ,1fr));
    text-align:center;
    justify-content:center;
 }
 @media screen and (max-width:1120px){
    display:grid;
    grid-template-columns:repeat(auto-fill,minmax(290px ,1fr));
    text-align:center;
    justify-content:center;
 }`;
export const Productdesc = styled.p`
margin:10px 0;
`;
export const Productprice =styled.p`
margin-bottom:10px;
font-size:2rem;
`; 
export const Productbutton = styled.button`
font-size:20px;
padding:10px 10px;
border:none;
margin-bottom:20px;
background:#e31837;
color:#fff;
border-radius:7px;
transition: 0.2s ease-out;
&:hover{
    background:#ffc500;
    transition:0.2s ease-out;
    cursor:pointer;
    color:#000;
}

@media screen and (max-width:470px){
    width:50%;
    text-align:center;
    margin:0  auto 15px auto;
}
@media screen and (max-width:736px){
    width:75%;
    text-align:center;
    margin-bottom:25px;
    margin:0  auto 15px auto;
}`
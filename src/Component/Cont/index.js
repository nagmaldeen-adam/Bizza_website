  import react ,{useState} from 'react';
  import Navbar from '../navbar/navbar.js'
  import Sidebar from '../sidebar/index.js'
  import {Container ,Content ,Item ,Button,H1,P} from './contElement.js';
  function Cont (){
      const [isOpen,setIsOpen] = useState(false);
     const toggle = ()=>{
          setIsOpen(!isOpen);
      }
      return(
          <>
      <Container>
       <Navbar toggle={toggle} /> 
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Content>
      <Item>
      <H1>  greatest pizza ever</H1>
      <P> ready in 5 minutes </P>
      <Button> Place order </Button>
      </Item>
      </Content>
      </Container>
      </>
      )
  }
  export default Cont;
  import {Nav , NavLink, Bars ,NavIcon} from './navbarstyle.js'
  function Navbar({toggle}){
      return(
         <>
         <Nav>
         <NavLink to="/">
             <h3>pizza</h3>
             <NavIcon onClick={toggle}>
             <p>menu</p>
             <Bars />
             </NavIcon>
         </NavLink>
         </Nav>
         </>
      )
  }
  export default Navbar;
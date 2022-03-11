import {SidebarContainer,Icon,CloseIcon,SidebarMenu,
  SidebarLink,Btnwrap,SidebarRoute} from './sidebarElement.js';
  const Sidebar =({isOpen ,toggle})=>{
      return (
          <SidebarContainer isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
          <CloseIcon />
          </Icon>
          <SidebarMenu>
           <SidebarLink to="/">pizzas</SidebarLink>
           <SidebarLink to="/">feature</SidebarLink>
           <SidebarLink to="/"> recipe </SidebarLink>
           <SidebarLink to="/"> contact us </SidebarLink>
          </SidebarMenu>
          <Btnwrap>
          <SidebarRoute to='/'> order now</SidebarRoute>
          </Btnwrap>
          </SidebarContainer>
      );
  }
  export default Sidebar;
   import {Fcontainer, Smediawrap, Slogo,Sicons } from './footerElement.js';
   import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube} from 'react-icons/fa';
   const Footer =()=>{
       return(
           <Fcontainer>
           <Smediawrap>
           <Slogo to="/">join us in</Slogo>
           <Sicons>
           <FaFacebook />
           <FaTwitter/>
           <FaYoutube/>
           <FaInstagram />
           <FaLinkedin />
           </Sicons>
           </Smediawrap>
           </Fcontainer>
       )
   }
   export default Footer;
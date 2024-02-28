import { useRoutes } from 'react-router-dom'
import { Home } from './components/Pages/Home/Home'
import {Header} from './components/Layout/Header/Header'
import { Logo } from './components/Logo/Logo'
import { Items } from './components/Items/Items'
import { Navbar } from './components/Navbar/Navbar'
import { Reference } from './components/Pages/Reference/Reference'
import { Services } from './components/Pages/Services/Services'
import { NotFound } from './components/NotFound/NotFound'
import { LogoSena } from './components/Logo-Sena/Logo_Sena'


import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";




const AppRouts = () =>{
  let routes = useRoutes([
    { path:'/', element:<Home />},
    { path:'/services', element:<Services/>},
    { path:'/reference', element:<Reference/>},
    { path:'*', element:<NotFound/>},
    
  ])
  return routes
}

function App() { 

  return (   
    <>
      <Header>
        <div className='log-name'>
          <Logo />
          <h1>JOHAN SEBASTIAN ESPITIA ZAPATA</h1>
          <hr />
        </div>  
        <Navbar>
          <Items content="Inicio" route='/'/>
          <Items content="Perfil" route='/services'/>
          <Items content="Proyectos" route='/reference'/>
          <Items content="Referencias" route='/reference'/>
          <Items content="Experiencias" route='/reference'/>
       </Navbar>
       <div className='sena'>
         <LogoSena/>
         <div className='icons'>
           <FaLinkedinIn />
           <FaFacebookF />
           <FaInstagram />
           <FaTwitter />
           <FaWhatsapp />
         </div>
       </div>
      </Header>
      <AppRouts/>
    </>
   
  )
}

export default App

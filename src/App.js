import './App.css'; 
import React, { useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'; 
import Menu from './components/MenuComponent'; 
import { DISHES } from './shared/dishes'; 
 
function App() { 
  const [dishes] = useState(DISHES); 
 
  return ( 
    <div> 
        <Navbar dark color="primary" expand="md"> 
            <div className="container"> 
                <NavbarBrand href="/">Restaurante Disfrutar</NavbarBrand> 
                <div>Aluno: Kayo Fernando e Pedro Henrique</div> 
            </div> 
        </Navbar> 
        <Menu dishes={dishes} /> 
    </div> 
  ); 
} 
 
export default App;
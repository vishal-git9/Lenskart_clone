
import React from 'react';

import MidOne from './Components/AfterNavbar/MidOne';
import { Homepage } from './Pages/Homepage';
import './App.css';
import DropDown from './Components/DropDown';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar/Navbar';
import ProductList from './Components/products/ProductList';
import { Allroutes } from './Routes/Allroutes';
function App() {
  return (

    <div className="App">

      

  
      <Navbar/>
      <DropDown/>
      <MidOne />
      <Allroutes/>
      <Footer/>
    </div>
  );
}

export default App;





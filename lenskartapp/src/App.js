
import React from 'react';
import MidOne from './Components/AfterNavbar/MidOne';
import './App.css';
import DropDown from './Components/DropDown';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar/Navbar';
import { Allroutes } from './Routes/Allroutes';
import SingleProduct from './Pages/SingleProduct';
function App() {
  return (

    <div className="App">
      <Navbar/>
     <SingleProduct/>
    
    </div>
  );
}

export default App;





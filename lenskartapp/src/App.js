
import React from 'react';
import MidOne from './AfterNavbar/MidOne';
import { Homepage } from './Pages/Homepage';
import './App.css';
import Footer from './karn-component/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MidOne />
      <Homepage/>
      <Footer/>
    </div>
  );
}

export default App;





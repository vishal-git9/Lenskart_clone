
import React from 'react';
import MidOne from './AfterNavbar/MidOne';
import { Homepage } from './Pages/Homepage';
import './App.css';
import Footer from './karn-component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <MidOne />
      <div >
      <Homepage/>
      <Footer/>
    </div>
  );
}

export default App;





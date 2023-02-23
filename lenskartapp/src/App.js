import React from 'react';
import MidOne from './AfterNavbar/MidOne';
import './App.css';
import LoginComponent from './Login.jsx/LoginComponent';
import SignUpComponent from './Login.jsx/SingnUpComponent';

function App() {
  return (
    <div className="App">
      <MidOne />
      <LoginComponent />
      <SignUpComponent />
    </div>
  );
}

export default App;





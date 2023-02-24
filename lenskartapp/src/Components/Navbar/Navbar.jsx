import React from 'react'
import { Link } from 'react-router-dom'
import style from "../../Styles/Navbar.module.css"

const Navbar = () => {
  return (
    <div className={style.navbar}>
        <div className={style.top}>
        <div >
        <img src="https://i.imgur.com/FEY5nHI.png" alt="logo" />
        </div>
     <p>Contact Us</p>
     </div>
     <div className={style.main}>
        <img className={style.logo} src="https://i.imgur.com/WEp6ly8.png" alt="xx" />
        <img className={style.phone} src="https://i.imgur.com/YCSKXED.png" alt="xx" />
        <input className={style.input} type="text" placeholder='What are You Looking For ' />
        
        <Link className={style.Link} to="/trackOrder">Track Order
        </Link>
        <Link className={style.Link1} to="/signIn">Sign In & Sign Up
        </Link>
        <Link className={style.Link2} to="/whislist">
        
            Whislist</Link>
        <Link className={style.Link3} to="/cart">Cart
        </Link>
        </div>
     

    </div>
  )
}

export default Navbar
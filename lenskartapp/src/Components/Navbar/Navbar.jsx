import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from "../../Styles/Navbar.module.css"
import {AiOutlineHeart} from "react-icons/ai"
import {GrCart} from "react-icons/gr"
const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className={style.navbar}>
        <div className={style.top}>
        <div>
        <img src="https://i.imgur.com/FEY5nHI.png" alt="logo" />
        </div>
     <p>Contact Us</p>
     </div>
     <div className={style.main}>
      <div onClick={()=>navigate("/")} style={{cursor:"pointer"}}>
        <img className={style.logo} src="https://i.imgur.com/WEp6ly8.png" alt="xx" />
        </div>
        <img className={style.phone} src="https://i.imgur.com/YCSKXED.png" alt="xx" />
        <input className={style.input} type="text" placeholder='What are You Looking For ' />
        
        <Link className={style.Link} to="/trackOrder">Track Order
        </Link>
        <Link className={style.Link1} to="/signIn">Sign In & Sign Up
        </Link>
        <div>
          <AiOutlineHeart fontWeight={"600"}/>
        <Link className={style.Link2} to="/whislist">
            Whislist</Link>
            </div>
            <div>
              <GrCart/>
        <Link className={style.Link3} to="/cart">Cart
        </Link>
        </div>
        </div>
     

    </div>
  )
}

export default Navbar
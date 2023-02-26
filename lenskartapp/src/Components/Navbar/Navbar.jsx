import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from "../../Styles/Navbar.module.css"
import { Avatar, Button, Flex, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from '@chakra-ui/react'
import {AiOutlineHeart} from "react-icons/ai"
import {GrCart} from "react-icons/gr"
import { useDisclosure } from '@chakra-ui/react'
import LoginComponent from '../Login.jsx/LoginComponent'
import SignUpComponent from '../Login.jsx/SingnUpComponent'
import { useDispatch, useSelector } from 'react-redux'
import { logoutuserData } from '../../Redux/Authentication/auth.actions'
import { getCartProducts } from '../../Redux/Cart/cart.actions'
import { getWishlistProducts } from '../../Redux/Whislist/whis.actions'
const Navbar = () => {
  const [login,setLogin] = useState(true)
  const dispatch = useDispatch()
  const isAuth = useSelector((store)=>store.authState.isAuth)
  const authData = useSelector((store)=>store.authState.authData)
  const cartData = useSelector((store)=>store.cartState.Cart)
  const whisData = useSelector((store)=>store.wishListReducer.wishListProducts)
  const navigate = useNavigate()
  const { isOpen,onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const handleSignup = ()=>{
    setLogin(false)
    onOpen()
  }
  const handleSignin = ()=>{
    setLogin(true)
    onOpen()
  }
  const handleLogout = ()=>{
    dispatch(logoutuserData())
  }

  useEffect(()=>{
    dispatch(getCartProducts())
    dispatch(getWishlistProducts)
  },[dispatch])
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
        {!isAuth&&<div className={style.Link1}><span onClick={handleSignin}>  SignIn</span>  &  <span onClick={handleSignup}>SignUp</span>
        {login?<LoginComponent isOpen={isOpen} initialRef={initialRef} finalRef={finalRef} onClose={onClose}/>:<SignUpComponent isOpen={isOpen} initialRef={initialRef} finalRef={finalRef} onClose={onClose} />}
        </div>}
        <div style={{position:"relative",padding:"4px"}}>
          <AiOutlineHeart fontWeight={"600"}/>
          <span style={{position:"absolute",top:"0px",right:"0px",left:"15px",borderRadius:"50%",width:"16px",height:"16px",backgroundColor:"#3182CE",textAlign:"center",color:"white",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"11px"}}>{whisData?.length||0}</span>
        <Link className={style.Link2} to="/wishlist">
            Whislist</Link>
            </div>
            <div style={{position:"relative",padding:"4px"}}>
            <span style={{position:"absolute",top:"0px",right:"0px",left:"15px",borderRadius:"50%",width:"16px",height:"16px",backgroundColor:"#3182CE",textAlign:"center",color:"white",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"11px"}}>{cartData?.length||0}</span>
              <GrCart/>
        <Link className={style.Link3} to="/cart">Cart
        </Link>
        </div>
        {isAuth?(<Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  name={`${authData.firstName} ${authData.lastName}`}
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Whislist</MenuItem>
                <MenuItem>Cart</MenuItem>
                <MenuDivider />
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>):""}
        </div>
     

    </div>
  )
}

export default Navbar
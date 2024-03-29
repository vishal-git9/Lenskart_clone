import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Card from '../Components/Checkout/Card'
import Payment from '../Components/Checkout/Payment'
import { Cartpage } from '../Pages/Cartpage'
import { ComputerGlasses } from '../Pages/ComputerGlasses'
import { Eyeglasses } from '../Pages/Eyeglasses'
import { Homepage } from '../Pages/Homepage'
import SingleProduct from '../Pages/SingleProduct'
import { Sunglasses } from '../Pages/Sunglasses'
import { WishList } from '../Pages/WishList'
import { PrivateRoute } from './PrivateRoute'

export const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/Computerglasses' element={<ComputerGlasses/>}></Route>
            <Route path='/Eyeglasses/:id' element={<SingleProduct/>}></Route>
            <Route path='/Sunglasses/:id' element={<SingleProduct/>}></Route>
            <Route path='/Computerglasses/:id' element={<SingleProduct/>}></Route>
            <Route path='/Eyeglasses' element={<Eyeglasses/>}></Route>
            <Route path='/Sunglasses' element={<Sunglasses/>}></Route>
            <Route path='/cart' element={<Cartpage/>}></Route>
            <Route path='/wishlist' element={<WishList />} ></Route>
            <Route path='/shipping' element={<PrivateRoute><Payment /></PrivateRoute>} ></Route>
            <Route path='/payment' element={<PrivateRoute><Card/></PrivateRoute>}/>

        </Routes>
    </div>
  )
}

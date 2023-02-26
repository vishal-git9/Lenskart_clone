import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { ComputerGlasses } from '../Pages/ComputerGlasses'
import { Eyeglasses } from '../Pages/Eyeglasses'
import { Homepage } from '../Pages/Homepage'
import SingleProduct from '../Pages/SingleProduct'
import { Sunglasses } from '../Pages/Sunglasses'
import { WishList } from '../Pages/WishList'

export const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/computerglasses' element={<ComputerGlasses/>}></Route>
            <Route path='/eyeglasses/:id' element={<SingleProduct/>}></Route>
            <Route path='/eyeglasses' element={<Eyeglasses/>}></Route>
            <Route path='/sunglasses' element={<Sunglasses/>}></Route>
            <Route path='/wishlist' element={<WishList />} ></Route>
        </Routes>
    </div>
  )
}

import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { Cartpage } from '../Pages/Cartpage'
import { ComputerGlasses } from '../Pages/ComputerGlasses'
import { Eyeglasses } from '../Pages/Eyeglasses'
import { Homepage } from '../Pages/Homepage'
import { Sunglasses } from '../Pages/Sunglasses'
export const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/computerglasses' element={<ComputerGlasses/>}></Route>
            <Route path='/eyeglasses' element={<Eyeglasses/>}></Route>
            <Route path='/sunglasses' element={<Sunglasses/>}></Route>
            <Route path='/cart' element={<Cartpage/>}></Route>
        </Routes>
    </div>
  )
}

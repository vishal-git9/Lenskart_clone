import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductList from '../Components/products/ProductList'
import { getEyeglassesData } from '../Redux/Products/products.actions'

export const Eyeglasses = () => {
  const eyeglassData = useSelector((store)=>store.productState.eyeGlasses)
  const eyeglassloading = useSelector((store)=>store.productState.loading)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getEyeglassesData())
  },[dispatch])
  return (
    <div>
      <ProductList data={eyeglassData} loading={eyeglassloading}/>
    </div>
  )
}

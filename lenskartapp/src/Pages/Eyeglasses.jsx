import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductList from '../Components/products/ProductList'
import { getEyeglassesData } from '../Redux/Products/products.actions'
import {useLocation, useSearchParams} from "react-router-dom"
export const Eyeglasses = () => {
  const eyeglassData = useSelector((store)=>store.productState.eyeGlasses)
  const eyeglassloading = useSelector((store)=>store.productState.loading)
  const dispatch = useDispatch()
  const location = useLocation()
  const[searchParam] = useSearchParams()
  const frametype = searchParam.getAll("FrameType")
  const framesize = searchParam.getAll("FrameSize")
  const brands = searchParam.getAll("Brand")
  console.log(frametype)
  let paramsObj = {
    params:{
      Frametype:frametype,
      FrameSize:framesize,
      Brand:brands
    }
  }
  console.log(framesize)
  useEffect(()=>{
    dispatch(getEyeglassesData(paramsObj))
  },[dispatch,location.search])
  return (
    <div>
      <ProductList data={eyeglassData} loading={eyeglassloading}/>
    </div>
  )
}

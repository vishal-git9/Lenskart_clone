import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductList from '../Components/products/ProductList'
import { getSunglassesData } from '../Redux/Products/products.actions'
import {useLocation, useSearchParams} from "react-router-dom"
export const Sunglasses = () => {
  const sunGlassesData = useSelector((store)=>store.productState.sunGlasses)
  const sunGlassesloading = useSelector((store)=>store.productState.loading)
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
    dispatch(getSunglassesData(paramsObj))
  },[dispatch,location.search])
  return (
    <div>
      <ProductList data={sunGlassesData} loading={sunGlassesloading}/>
    </div>
  )
}
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductList from '../Components/products/ProductList'
import { getComputerglassesData } from '../Redux/Products/products.actions'
import {useSearchParams} from "react-router-dom"
export const ComputerGlasses = () => {
  const computerglassData = useSelector((store)=>store.productState.computerGlasses)
  const computerglassloading = useSelector((store)=>store.productState.loading)
  const dispatch = useDispatch()
  // const location = useLocation()
  const[searchParam] = useSearchParams()
  const frametype = searchParam.getAll("FrameType")
  const framesize = searchParam.getAll("FrameSize")
  const brands = searchParam.getAll("Brand")
  const paramsObj = {
    params:{
      Frametype:frametype,
      FrameSize:framesize,
      Brand:brands
    }
  }
  const getCategoryData = useCallback(()=>{
    dispatch(getComputerglassesData(paramsObj))
  },[dispatch,paramsObj])
  console.log(framesize)
  useEffect(()=>{
    getCategoryData()
    return;
  },[])
  return (
    <div>
      <ProductList data={computerglassData} loading={computerglassloading}/>
    </div>
  )
}
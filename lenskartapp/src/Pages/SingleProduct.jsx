import React, { useState,useEffect } from 'react'
import axios from 'axios'
import style from ".././Styles/SingleProduct.module.css"
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
let {id}=useParams()
   let [data,setData]=useState([])
  
   let getData=()=>{
    axios.get(`http://localhost:8080/Eyeglasses/1`)
    .then((res)=>{
      console.log(res.data)
     setData(res.data.data)
    })
   }
   useEffect(()=>{
    getData()
   },[])
  return (
    <div>
   <div className={style.block}>
    <div className={style.img}>
      <img src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13307-c4-eyeglasses_G_0490.jpg" alt="" />
      
    </div>
    
    <div className={style.section2}>
      <h1>Vincent Chase Online</h1>
      <p>Transparent Full Rim Round Eyeglasses</p>
      <h3>Size : Wide</h3>
      <h4>Rs:999</h4>
      <button>ADD TO CART</button>
      <div className={style.img1}>
      <img  src="https://i.imgur.com/SXqAb0R.jpg" alt="xx" />
      </div>
     
    </div>
   
   </div>
   <div className={style.last}>
    <img src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13307-c4-eyeglasses_29_sep_male_shoot8370_149416.jpg" alt="" />
    <img src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13307-c4-eyeglasses_29_sep_male_shoot8385_149416.jpg" alt="" />
    <img src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13307-c4-eyeglasses_7_oct_male_shoot11540_149416.jpg" alt="" />
    <img src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13307-c4-eyeglasses_7_oct_male_shoot11548_149416.jpg" alt="" />
   </div>
   <div className={style.last1}>
    <img src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13307-c4-eyeglasses_G_0493.jpg" alt="" />
    <img src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13307-c4-eyeglasses_G_0494.jpg" alt="" />
    <img src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13307-c4-eyeglasses_G_0496.jpg" alt="" />
    <img src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13307-c4-eyeglasses_G_0491_Image_PLA.jpg " alt="" />
   </div>
   </div>
  )
}

export default SingleProduct
 
import axios from "axios"
export const getEyeglasses = async(paramsObj)=>{
    console.log(paramsObj)
    let res = await axios.get(`https://lenskart-backend.onrender.com/Eyeglasses`,paramsObj)
    return res.data
}

export const getSunglasses = async()=>{
    let res = await axios.get(`https://lenskart-backend.onrender.com/Sunglasses`)
    return res.data
}

export const getComputerglasses = async()=>{
    let res = await axios.get(`https://lenskart-backend.onrender.com/Computerglasses`)
    return res.data
}


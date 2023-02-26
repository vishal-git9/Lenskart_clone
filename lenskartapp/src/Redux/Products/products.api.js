import axios from "axios"
export const getEyeglasses = async(paramsObj)=>{
    console.log(paramsObj)
    let res = await axios.get(`http://localhost:8080/Eyeglasses`,paramsObj)
    return res.data
}

export const getSunglasses = async()=>{
    let res = await axios.get(`http://localhost:8080/Sunglasses`)
    return res.data
}

export const getComputerglasses = async()=>{
    let res = await axios.get(`http://localhost:8080/Computerglasses`)
    return res.data
}

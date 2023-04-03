import axios from "axios"

export const postuserData = async(data)=>{
    let res = await axios.post(`https://lenskart-backend.onrender.com/Signup`,data)
    return res.data
}

export const getuserData = async(data)=>{
    const {email,password} = data
    let res = await axios.get(`https://lenskart-backend.onrender.com/Signup?email=${email}&password=${password}`)
    return res.data[0]
}
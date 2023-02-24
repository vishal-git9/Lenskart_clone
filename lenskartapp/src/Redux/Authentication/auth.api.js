import axios from "axios"

export const postuserData = async(data)=>{
    let res = await axios.post(`http://localhost:8080/Signup`,data)
    return res.data
}

export const getuserData = async(data)=>{
    const {email,password} = data
    let res = await axios.get(`http://localhost:8080/Signup?email=${email}&password=${password}`)
    return res.data[0]
}
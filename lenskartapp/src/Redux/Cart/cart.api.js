import axios from "axios"

export const getCart = async ()=> {
    let res = await axios.get(`https://lenskart-backend.onrender.com/Cart`)
    let data = res.data
    return data
}

export const addtoCart = async (data)=>{
    let res = await axios.post(`https://lenskart-backend.onrender.com/Cart`,data)
}

export const removeCart = async (id)=>{
    let res = await axios.delete(`https://lenskart-backend.onrender.com/Cart/${id}`)
    let data = res.data
    return data
}


export const changeQty = async (id,val)=>{
    let res = await axios.patch(`https://lenskart-backend.onrender.com/Cart/${id}`,{
        quantity: val,
    })
    return res
}
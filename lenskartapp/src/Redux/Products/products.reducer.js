import { GET_EYEGLASSES_ERROR,GET_EYEGLASSES_LOADING,GET_EYEGLASSES_SUCCESS,GET_COMPUTERGLASSES_ERROR,GET_COMPUTERGLASSES_LOADING,GET_COMPUTERGLASSES_SUCCESS,GET_SUNGLASSES_ERROR,GET_SUNGLASSES_LOADING,GET_SUNGLASSES_SUCCESS } from "./products.types";

const intialState = {
    eyeGlasses:[],
    sunGlasses:[],
    computerGlasses:[],
    loading:false,
    error:false
}

export const productReducer = (state=intialState,{type,payload})=>{
    switch(type){
        case GET_EYEGLASSES_LOADING:{
            return{
                ...state,
                loading:true
            }
        }
        case GET_EYEGLASSES_SUCCESS:{
            return{
                ...state,
                eyeGlasses:payload,
                loading:false
            }
        }
        case GET_EYEGLASSES_ERROR:{
            return{
                ...state,
                error:true
            }
        }
        case GET_SUNGLASSES_LOADING:{
            return{
                ...state,
                loading:true
            }
        }
        case GET_SUNGLASSES_SUCCESS:{
            return{
                ...state,
                sunGlasses:payload,
                loading:false
            }
        }
        case GET_SUNGLASSES_ERROR:{
            return{
                ...state,
                error:true
            }
        }
        case GET_COMPUTERGLASSES_ERROR:{
            return{
                ...state,
                error:true
            }
        }
        case GET_COMPUTERGLASSES_LOADING:{
            return{
                ...state,
                loading:true
            }
        }
        case GET_COMPUTERGLASSES_SUCCESS:{
            return{
                ...state,
                loading:false,
                computerGlasses:payload
            }
        }
        default:{
            return state
        }
    }
}
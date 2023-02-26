import { getComputerglasses, getEyeglasses, getSunglasses } from "./products.api";
import { GET_EYEGLASSES_ERROR,GET_EYEGLASSES_LOADING,GET_EYEGLASSES_SUCCESS,GET_COMPUTERGLASSES_ERROR,GET_COMPUTERGLASSES_LOADING,GET_COMPUTERGLASSES_SUCCESS,GET_SUNGLASSES_ERROR,GET_SUNGLASSES_LOADING,GET_SUNGLASSES_SUCCESS } from "./products.types";

export const getEyeglassesData = (paramsObj)=>async (dispatch)=>{
    dispatch({type:GET_EYEGLASSES_LOADING})
    try {
        let res = await getEyeglasses(paramsObj)
        dispatch({type:GET_EYEGLASSES_SUCCESS,payload:res})
    } catch (error) {
        dispatch({type:GET_EYEGLASSES_ERROR})
    }
}
export const getSunglassesData = ()=>async (dispatch)=>{
    dispatch({type:GET_SUNGLASSES_LOADING})
    try {
        let res = await getSunglasses()
        dispatch({type:GET_SUNGLASSES_SUCCESS,payload:res})
    } catch (error) {
        dispatch({type:GET_SUNGLASSES_ERROR})
    }
}
export const getComputerglassesData = ()=>async (dispatch)=>{
    dispatch({type:GET_COMPUTERGLASSES_LOADING})
    try {
        let res = await getComputerglasses()
        dispatch({type:GET_COMPUTERGLASSES_SUCCESS,payload:res})
    } catch (error) {
        dispatch({type:GET_COMPUTERGLASSES_ERROR})
    }
}
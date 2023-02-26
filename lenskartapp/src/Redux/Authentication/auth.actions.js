import { getuserData, postuserData } from "./auth.api";
import { GET_USER_DATA_ERROR,GET_USER_DATA_LOADING,GET_USER_DATA_SUCCESS,POST_USER_DATA_LOADING,POST_USER_DATA_ERROR,POST_USER_DATA_SUCCESS, LOGOUT_USER_DATA_LOADING, LOGOUT_USER_DATA_SUCCESS } from "./auth.type";
export const postuserDetails = (data)=>async(dispatch)=>{
    dispatch({type:POST_USER_DATA_LOADING})
    try {
        let res = await postuserData(data)
        console.log(res)
        dispatch({type:POST_USER_DATA_SUCCESS,payload:res})
    } catch (error) {
        dispatch({type:POST_USER_DATA_ERROR})
    }
}
export const getuserDetails = (data)=>async(dispatch)=>{
    dispatch({type:GET_USER_DATA_LOADING})
    try {
        let res = await getuserData(data)
        // console.log(res)
        dispatch({type:GET_USER_DATA_SUCCESS,payload:res})
    } catch (error) {
        dispatch({type:GET_USER_DATA_ERROR})
    }
}

export const logoutuserData = ()=>(dispatch)=>{
    dispatch({type:LOGOUT_USER_DATA_SUCCESS})
}
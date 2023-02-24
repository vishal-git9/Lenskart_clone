import { GET_USER_DATA_ERROR,GET_USER_DATA_LOADING,GET_USER_DATA_SUCCESS,POST_USER_DATA_LOADING,POST_USER_DATA_ERROR,POST_USER_DATA_SUCCESS, LOGOUT_USER_DATA_SUCCESS } from "./auth.type";
const intialState = {
    isAuth:false,
    authData:{},
    loading:false,
    error:false
}

export const authReducer = (state=intialState,{type,payload})=>{
    switch(type){
        case POST_USER_DATA_LOADING:{
            return{
                ...state,
                loading:true
            }
        }
        case POST_USER_DATA_ERROR:{
            return{
                ...state,
                loading:false,
                error:true
            }
        }
        case POST_USER_DATA_SUCCESS:{
            return{
                ...state,
                loading:false,
                isAuth:true,
                authData:payload
            }
        }
        case GET_USER_DATA_SUCCESS:{
            return{
                ...state,
                loading:false,
                isAuth:true,
                authData:payload
            }
        }
        case GET_USER_DATA_LOADING:{
            return{
                ...state,
                loading:true
            }
        }
        case GET_USER_DATA_ERROR:{
            return{
                ...state,
                error:true
            }
        }
        case LOGOUT_USER_DATA_SUCCESS:{
            return{
                ...state,
                isAuth:false,
                authData:{}
            }
        }
        default:{
            return state
        }
    }
}
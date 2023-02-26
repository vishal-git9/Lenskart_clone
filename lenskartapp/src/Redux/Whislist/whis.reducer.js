import { GET_WISHLIST_FAILURE, GET_WISHLIST_REQUEST, GET_WISHLIST_SUCCESS, POST_WISHLIST_SUCCESS } from "./whis.types";

const initialState = {
    isLoading: false,
    isError: false,
    wishListProducts: [],
};

export const wishListReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case GET_WISHLIST_REQUEST:
            return {...state, isLoading: true};
        case GET_WISHLIST_SUCCESS:
            return {...state, isLoading: false, wishListProducts: payload};
        case GET_WISHLIST_FAILURE:
            return {...state, isLoading: false, isError: true};
        default:
            return state;
    }
}
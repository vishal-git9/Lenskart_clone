import axios from "axios";
import { GET_WISHLIST_FAILURE, GET_WISHLIST_REQUEST, GET_WISHLIST_SUCCESS, POST_WISHLIST_SUCCESS } from "./whis.types";

export const getWishlistRequestAction = () => {
    return {type: GET_WISHLIST_REQUEST};
};

export const getWishlistSuccessAction = (payload) => {
    return {type: GET_WISHLIST_SUCCESS, payload};
};

export const getWishlistFailureAction = () => {
    return {type: GET_WISHLIST_FAILURE};
};

// export const postWishlistSuccessAction = () => {
//     return {type: POST_WISHLIST_SUCCESS}
// };

export const getWishlistProducts = (dispatch) => {
    dispatch(getWishlistRequestAction());
    axios.get(" https://lenskart-backend.onrender.com/Whislist")
    .then((res) => dispatch(getWishlistSuccessAction(res.data)))
    .catch(() => dispatch(getWishlistFailureAction()))
};

export const postWishlistProducts = (obj) =>(dispatch)=> {
    axios.post("https://lenskart-backend.onrender.com/Whislist",obj)
};

export const moveToCartFromWishlist = (el) => {
    delete (el.id)
    return axios.post(`https://lenskart-backend.onrender.com/Cart`,el);
};

export const removeFromWishList = (id) => {
    return axios.delete(`https://lenskart-backend.onrender.com/Whislist/${id}`);
};



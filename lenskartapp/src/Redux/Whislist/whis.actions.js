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
    axios.get(" http://localhost:8080/Whislist")
    .then((res) => dispatch(getWishlistSuccessAction(res.data)))
    .catch(() => dispatch(getWishlistFailureAction()))
};

export const postWishlistProducts = (obj) => {
    axios.post("http://localhost:8080/Whislist",obj)
    .then(() => alert('Your Product Is SuccessFully Added To The Wishlist'));
};

export const moveToCartFromWishlist = (el) => {
    return axios.post(`http://localhost:8080/Cart`,el);
};

export const removeFromWishList = (id) => {
    return axios.delete(`http://localhost:8080/Whislist/${id}`);
};



import React, { useEffect } from "react";
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import { getWishlistProducts, moveToCartFromWishlist, removeFromWishList } from "../Redux/Whislist/whis.actions";
import "../Styles/WishList.css"

const styleObj = {display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: "20px", textAlign: 'center', marginTop: '250px', width: '80%', margin: 'auto', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset', padding: '50px'};
const subStyleObj = {border: '1px solid #ccc',borderRadius: '12px'}

export const WishList = () => {
    const dispatch = useDispatch();
    const {isLoading, isError, wishListProducts} = useSelector((store) => {
        return{
           isLoading: store.wishListReducer.isLoading,
           isError : store.wishListReducer.isError,
           wishListProducts: store.wishListReducer.wishListProducts 
        };
    }, shallowEqual);

    useEffect(() => {
        dispatch(getWishlistProducts);
    },[dispatch])
    
    const handleMoveToCart = (id, el) => {
        moveToCartFromWishlist(el).then(() => removeFromWishList(id)).then(() => dispatch(getWishlistProducts))
    };

    const handleDeleteFromWishlist = (id) => {
        removeFromWishList(id).then(() => dispatch(getWishlistProducts));
    };

    return (
        <div style={{marginTop:"200px"}}>
        <div style={styleObj}>
            {isLoading && <h1>Loading...</h1>}
            {isError && <h1>Error...</h1>}
            {
                wishListProducts.map(el => {
                    return(
                        <div key={el.id} style={subStyleObj}>
                            <div style={{border: '0px solid red',marginTop: '12px', margin: 'auto', width: '90%'}}><img src={el.image} alt={el.title} style={{width: '100%'}} /></div>
                            
                            <h3>{el.title}</h3>
                            <p>{el.price}</p>
                            <p>{el.Brands}</p>
                            <button className="btnOne" onClick={()=>handleMoveToCart(el.id, el)}>Move To Cart</button>
                            <button className="btnTwo" onClick={() => handleDeleteFromWishlist(el.id)}>Remove</button>
                        </div>
                    )
                })
            }
        </div>
        </div>
    );
};


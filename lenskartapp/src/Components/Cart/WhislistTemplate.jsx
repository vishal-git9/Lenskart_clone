import {  AiFillStar } from 'react-icons/ai'
import React from 'react';
import { Box, Flex, Image, Text } from "@chakra-ui/react";
const WishlistTemplate = () => {
    const [wishlist, setWishlist] = React.useState([]);

    const wishlistdata = () => {
        fetch('http://localhost:8080/Whislist')
        .then(res=>res.json())
        .then(data =>setWishlist(data));
    }
    React.useEffect(() => {
        wishlistdata()
    }, [])


    return (
        <>
        {wishlist.map((el,index)=>{
        return(
        <Box key={el.id} className='wishlistDiv-cart' border="1px solid" borderColor="gray.300" borderRadius="3%" p="20px" bg='#fff' w='230px' mr='5px'>
            <Image m="auto" mb='20px' width="100%" src={el.image} alt='image' />
            <Box >
                <Flex direction='row' w='max-content' borderRadius="15px" alignItems="center" gap="5px" p="5px 10px" bgColor="#eeeef5">
                    <Text>{el.ratings}</Text>
                    <AiFillStar size="15px" color='#0fbd95' />
                    <Text>{el.reviews}</Text>
                </Flex>
            </Box>
            <Text mt="5px" fontWeight="bold" color="#000042">{el.Brands+" "+el.FrameType}</Text>
            <Text color='#9999b3' fontWeight='500'>
                          <s>{'₹' + el.price}</s>
            </Text>
            <Text mt="5px" fontWeight="bold" color="#000042"> {"₹"+el.price}</Text>
            
        </Box>
        )
        })}
        </>
    )
}
export default WishlistTemplate
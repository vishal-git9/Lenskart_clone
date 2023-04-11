import { Box, Flex, Text, Image,Divider } from '@chakra-ui/react'
import {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartProducts } from '../../Redux/Cart/cart.actions';

export default function CartItem() {
    const cartData = useSelector((store)=>store.cartState.Cart)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCartProducts())
    }, [dispatch])

    let total=0;

    cartData.forEach(el => {
        total+=el.price*el.quantity
    });

    return (
        <>
            <Flex flexDirection='column' w='350px'  mt='10px'>
                <Box display='flex' flexDirection='row' justifyContent='space-between' 
                bg='#4B4C51' color='#fff'>
                <Text ml='5px'>SHOPPING CART:</Text>
                <Text mr='5px'>Item {cartData.length}</Text>
                </Box>
                <Box className='itemPart' border='1px solid #ccc' >

                    {cartData.map(el => {
                        return (
                            <Box key={el.id}>
                            
                            <Box className='item_container' display='flex' flexDirection='row' gap={5}
                                alignItems='center' m='auto' mb='20px' p={3}>
                                <Box >
                                    <Image w='150px' src={el.image} />
                                </Box>
                                <Box>
                                    <Text  >{"Qty:" + (parseInt(el.quantity))}</Text>
                                </Box>
                                <Box >
                                    <Text display="flex" gap={6}>
                                        <Text color='#9999b3' fontWeight='500'>
                                            <s>{'₹' + el.price}</s>
                                        </Text>
                                        <Text color='#000042' fontWeight='700'
                                        >{'₹' + el.price}</Text>
                                    </Text>
                                </Box>
                            </Box>
                            <Divider h={2} mb={2}/> 
                            </Box>
                        )
                    })}
                    
                    
                </Box>
                <Box p={5} border='1px solid #ccc' bg='#EFEFEF'>
                    <Flex justifyContent={'space-between'}>
                        <Text fontWeight='bold'>SUBTOTAL</Text>
                        <Text fontWeight='medium'>₹{total}</Text>
                    </Flex>
                    <Divider h={2} mb={2}/>
                    <Flex justifyContent={'space-between'}>
                        <Text fontWeight='bold'>TAX COLLECTED</Text>
                        <Text fontWeight='medium'>+ ₹{total*0.18}</Text>
                    </Flex>
                    <Divider h={2} mb={2}/>
                    <Flex justifyContent={'space-between'}>
                        <Text fontWeight='bolder'fontSize={18}>ORDER TOTAL</Text>
                        <Text fontWeight='bold' fontSize={18} color='#329BA9'>₹{total+(total*0.18)}</Text>
                    </Flex>
                    
                </Box>
                
            </Flex>
        </>
    )
}
import { Box, Button, Flex, Grid, GridItem, Image, Select, Text, useToast} from '@chakra-ui/react'
import {AiOutlineHeart} from 'react-icons/ai'
import React, { useEffect } from 'react'
import axios from 'axios'
import { redirect, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCartProducts, getCartProducts } from '../Redux/Cart/cart.actions'
import { postWishlistProducts } from '../Redux/Whislist/whis.actions'

const SingleProductPage = () => {
  const location = useLocation()
  console.log(location)
  const [data, setData] = useState({})
  const toast = useToast()
  const navigate = useNavigate()
  const disptach = useDispatch()
  // const {id} = useParams()
  const addToCart=()=>{
    // setData({...data , quntity:1})
    // fetch('https://easy-pink-bull-shoe.cyclic.app/Cart',{
    //   method:"POST",
    //   headers:{
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // }).then(res=>navigate("/cart"))
    // .catch(err=>navigate("/cart"))
    disptach(addCartProducts(data))
    navigate("/cart")
  }
  const handleWhislist = ()=>{
    disptach(postWishlistProducts(data))
    toast({
      title: 'Product added to whislist',
      position:"top",
      status:"success",
      duration: 2000,
      isClosable: true,
    })
  }
  const fetchSingleProduct=()=>{
    axios(`http://localhost:8080${location.pathname}`).then(res=>setData(res.data))
     .catch(err=>console.log(err))
  }
  console.log(data)
  useEffect(() => {
  fetchSingleProduct()
  }, [])
  return (
    <>
    <Flex m={5} flexDirection={"row"} mt="200px">
    <Grid justifyContent="space-around" templateColumns='repeat(2, 1fr)' height={"fit-content"}>
    {data?.imageDetails?.map((el)=><GridItem key={el} borderRadius={10} p="10px 5px" border="1px solid"  borderColor="gray.300" width={"fit-content"}><Image  src={el} width="100%"/></GridItem>)}
    </Grid>
    <Grid>
        <GridItem position="relative" p={5} colSpan={1} rowSpan={10} >
          <Text color="gray.500">{data.name}</Text>
          <Text my="10px" fontWeight={'bold'} w="80%">Blue Block Phone & Computer Glasses: Sky Blue Transparent Full Rim Wayfarer Lenskart Blu LB E14058-C3</Text>
          <Text my="10px" fontWeight={'bold'} color="gray.600">Shap : {data.FrameShape}</Text>
          <Text my="10px" fontWeight={'bold'} fontSize="x-large">₹{data.price}</Text>
          <Button p={7} m="10px 20px" w="90%" color="white" bgColor="#00bac6" onClick={addToCart}>BUY</Button>
          <Button p={7} m="10px 20px" w="90%">TRY ON</Button>
          <Box position="absolute" top="5px" right="5px"><AiOutlineHeart size={40} onClick={handleWhislist}/></Box>
          <Select
              border="0px"
              borderBottom="1px"
              borderRadius="0px"
              borderColor="gray.300"
              p="10px"
            >
              <option>Technical Information</option>
              <option>Price : low to high</option>
              <option>Price : high to low</option>
            </Select>
        <Select
              border="0px"
              borderBottom="1px"
              borderRadius="0px"
              borderColor="gray.300"
              p="10px"
            >
              <option>Visit Nearby Store</option>
              <option>Price : low to high</option>
              <option>Price : high to low</option>
            </Select>
        <Select
              border="0px"
              borderBottom="1px"
              borderRadius="0px"
              borderColor="gray.300"
              p="10px"
            >
              <option>Check Delivery Options</option>
              <option>Price : low to high</option>
              <option>Price : high to low</option>
            </Select>
        <Select
              border="0px"
              borderBottom="1px"
              borderRadius="0px"
              borderColor="gray.300"
              p="10px"
            >
              <option>Review(118)</option>
              <option>Price : low to high</option>
              <option>Price : high to low</option>
            </Select>
            <Image src='https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/lkblu1.jpg'/>
            <Image src='https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/lkblu2.jpg'/>
            <Image src='https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/lkblu3.jpg'/>
            <Image src='https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/lkblu5.jpg'/>
            <Image src='https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/lkblu6.jpg'/>
            <Image src='https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/lkblu7.jpg'/>
            <Image src='https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/lkblu8.jpg'/>
        </GridItem>
        </Grid>
    </Flex>
    </>
  )
}

export default SingleProductPage
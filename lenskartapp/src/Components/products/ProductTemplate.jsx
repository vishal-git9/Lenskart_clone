import { Box, Flex, GridItem, Image, Text } from '@chakra-ui/react'
import { AiOutlineHeart , AiFillStar} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'



const ProductTemplate = (props) => {
  const{id,image,title,price,ratings,reviews,Framesize} = props
 let navigate=useNavigate()
  return (
    <GridItem onClick={()=>navigate(`/eyeglasses/${id}`)} >
    <Box  position="relative" border="1px solid" borderColor="gray.300" borderRadius="3%" p="10px" _hover={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
        <Image m="auto" width="80%" src={image} alt={title}/>
        <Box  position="absolute" top="5px" right="5px" >
         <AiOutlineHeart  size="30px"/>
        </Box>
        <Box p="10px">
          <Flex justifyContent="space-between" alignItems="center">
          <Flex w="30%" borderRadius="20px" alignItems="center" gap="5px" p="5px 10px" bgColor="#eeeef5">
          <Text>{ratings}</Text>
          <AiFillStar size="15px" color='#0fbd95'/>
          <Text>{reviews}</Text>
          </Flex>
         
          </Flex>
          <Text mt="10px" fontWeight="bold" color="#000042"> {title} </Text>
          <Text mt="10px" fontWeight="light" color="#000042">Size : {Framesize}</Text>
          <Text mt="10px" fontWeight="bold" color="#000042">{price} <span style={{fontSize:"14px" , fontWeight:"lighter" , textDecoration:"line-through"}}>₹3999</span></Text>
          
        </Box>
    </Box>
    </GridItem>
  )
}

export default ProductTemplate
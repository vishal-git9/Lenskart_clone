import { Box, Flex, GridItem, Image, Text } from '@chakra-ui/react'
import { AiOutlineHeart , AiFillStar} from 'react-icons/ai'



const ProductTemplate = () => {
 
  return (
    <GridItem >
    <Box  position="relative" border="1px solid" borderColor="gray.300" borderRadius="3%" p="10px" _hover={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
        <Image m="auto" width="80%" src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s13830-c2-suglasses_suglasses_g_4417_2.jpg" alt='image'/>
        <Box  position="absolute" top="5px" right="5px" >
         <AiOutlineHeart  size="30px"/>
        </Box>
        <Box p="10px">
          <Flex justifyContent="space-between" alignItems="center">
          <Flex w="30%" borderRadius="20px" alignItems="center" gap="5px" p="5px 10px" bgColor="#eeeef5">
          <Text>4.2</Text>
          <AiFillStar size="15px" color='#0fbd95'/>
          <Text>134</Text>
          </Flex>
         
          </Flex>
          <Text mt="10px" fontWeight="bold" color="#000042"> Lenskart Air </Text>
          <Text mt="10px" fontWeight="light" color="#000042">Size : </Text>
          <Text mt="10px" fontWeight="bold" color="#000042">₹2999 <span style={{fontSize:"14px" , fontWeight:"lighter" , textDecoration:"line-through"}}>₹3999</span></Text>
          
        </Box>
    </Box>
    </GridItem>
  )
}

export default ProductTemplate
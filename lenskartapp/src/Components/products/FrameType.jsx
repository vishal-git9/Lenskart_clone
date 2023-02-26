import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const FrameType = ({src , type ,onchange,isPresent}) => {
  const handleChange = ()=>{
    onchange(type)
  }
  return (
      <Box  mr="3px" border={isPresent?"3px solid":"0px"} borderColor="gray.300" cursor={"pointer"} onClick={handleChange}>
        <Image m="7px auto" width="45px" src={src} />
        <Text mx="5px" textAlign="center">{type}</Text>
      </Box>
 
  )
}

export default FrameType
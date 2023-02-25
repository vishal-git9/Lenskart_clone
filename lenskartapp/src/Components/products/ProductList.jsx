import {
  Box,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  Select,
  Switch,
  Text,
  VStack,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
  Spinner,
  Center
} from "@chakra-ui/react";
import { TbArrowsUpDown } from "react-icons/tb";
import ProductTemplate from "./ProductTemplate";

import FrameType from "./FrameType";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ProductList = ({data,loading}) => {
  const [params,setParams] = useSearchParams()
  const Frametype = params.getAll("FrameType")
  const Framesize = params.getAll("FrameSize")
  const brands = params.getAll("Brand")
  const [frameType,setframeType] = useState(Frametype || [])
  const [frameSize,setframeSize] = useState(Framesize || [])
  const [brand,setBrand] = useState(brands||[])
  const handleFrameType = (value)=>{
    let newFrameType = [...frameType]
    if(newFrameType.includes(value)){
      newFrameType.splice(newFrameType.indexOf(value),1)
    }else{
      newFrameType.push(value)
    }

    setframeType(newFrameType)
  }
  const handleFrameSize = (e)=>{
    let newFrameSize = [...frameSize]
    let value = e.target.value
    if(newFrameSize.includes(value)){
      newFrameSize.splice(newFrameSize.indexOf(value),1)
    }else{
      newFrameSize.push(value)
    }

    setframeSize(newFrameSize)
  }
  const handleBrand = (e)=>{
    let newBrand = [...brand]
    let value = e.target.value
    if(newBrand.includes(value)){
      newBrand.splice(newBrand.indexOf(value),1)
    }else{
      newBrand.push(value)
    }
    setBrand(newBrand)
  }
  useEffect(()=>{
    const params = {
      FrameType:frameType,
      FrameSize:frameSize,
      Brand:brand
    }
    setParams(params)
  },[frameType,frameSize,brand])
  return (
    <>
   
    <Flex mt="200px" px="2%">
      <Box w="20%" m={0}>
        <Box my="20px">
          <Text fontWeight="bold" mb="3px" color="blackAlpha.600">
            FRAME TYPE
          </Text>
          <Flex>
          <FrameType
            src="https://static.lenskart.com/images/cust_mailer/Eyeglass/FullRim.png"
            type="Full Rim"
            onchange = {handleFrameType}
            isPresent={frameType.includes("Full Rim")}
            />
          <FrameType
            src="https://static.lenskart.com/images/cust_mailer/Eyeglass/HalfRim.png"
            type="Half Rim"
            onchange = {handleFrameType}
            isPresent={frameType.includes("Half Rim")}
            />
          <FrameType
            src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Rimless.png"
            type="Rimless"
            onchange = {handleFrameType}
            isPresent={frameType.includes("Rimless")}
            />
            </Flex>
        </Box>
        <Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          BRAND
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     <Checkbox value={"JOHN JACOBS"} onChange={handleBrand}  isChecked={brand.includes("JOHN JACOBS")}> JOHN JACOBS(929)</Checkbox>
     <Checkbox value={"VINCENT CHASE ONLINE"} onChange={handleBrand} isChecked={brand.includes("VINCENT CHASE ONLINE")}> VINCENT CHASE ONLINE(867)</Checkbox>
     <Checkbox value={"VINCENT CHASE"} onChange={handleBrand} isChecked={brand.includes("VINCENT CHASE")}> VINCENT CHASE(543)</Checkbox>
     <Checkbox value={"LENSKART AIR ONLINE"} onChange={handleBrand} isChecked={brand.includes("LENSKART AIR ONLINE")}> LENSKART AIR ONLINE(484)</Checkbox>
     <Checkbox value={"HOOPER"} onChange={handleBrand} isChecked={brand.includes("HOOPER")}> HOOPER(265)</Checkbox>
    
    
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        FRAME SIZE
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     <Checkbox value={"Extra Narrow"} onChange={handleFrameSize} isChecked={frameSize.includes("Extra Narrow")}>EXTRA NARROW(379) </Checkbox>
     <Checkbox value={"Narrow"} onChange={handleFrameSize} isChecked={frameSize.includes(" Narrow")}> NARROW(1076) </Checkbox><br />
     <Checkbox value={"small"} onChange={handleFrameSize} isChecked={frameSize.includes("small")}>SMALL(2) </Checkbox><br />
     <Checkbox  value={"medium"} onChange={handleFrameSize} isChecked={frameSize.includes("medium")}>MEDIUM(2178) </Checkbox><br />
     <Checkbox value={"large"} onChange={handleFrameSize} isChecked={frameSize.includes("large")}>LARGE(1) </Checkbox><br />
     <Checkbox value={"Wide"} onChange={handleFrameSize} isChecked={frameSize.includes("Wide")}>WIDE(1804) </Checkbox>
     
    </AccordionPanel>
  </AccordionItem>
    </Accordion>
      </Box>
      <Box
        overflow="scroll"
        w="80%"
        borderLeft="1px solid"
        borderColor="gray.300"
        m={0}
        
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          p="5px"
          bg="#e2e8f0"
          border="1px"
          borderColor="gray.400"
        >
          <Text>SUNGLASSES</Text>
          <Flex alignItems="center">
            <Text fontWeight="bold" mr="5px" color="green">
              VIEW FRAMES
            </Text>
            <Switch colorScheme="green" isChecked size="lg" />
            <Text ml="5px">VIEW 3D TRY ON</Text>
          </Flex>
          <Flex>
            <Flex alignItems="center">
              <TbArrowsUpDown color="green" fontWeight="bold" />
              <Text fontWeight="bold" color="green">
                SortBy
              </Text>
            </Flex>
            <Select 
              border="2px"
              borderRadius="3px"
              borderColor="black"
              ml="4px"
              p="0px"
            >
              <option value="">Select</option>
              <option value="desc">Price : low to high</option>
              <option value="asc">Price : high to low</option>
            </Select>
          </Flex>
        </Flex>
        <Text mt="5px" textAlign="center">
          Showing 1 of 21 Results
        </Text>
        {!loading ?(<Grid
          m="20px 10px"
          templateColumns="repeat(3, 1fr)"
          height="100vh"
          gap={6}
        >
          {data?.map((el,index)=><ProductTemplate key={index} {...el} />)}     
        </Grid>): <Center><Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/> </Center>}
    
      </Box>
    </Flex>
        
   </>
  );
};

export default ProductList;

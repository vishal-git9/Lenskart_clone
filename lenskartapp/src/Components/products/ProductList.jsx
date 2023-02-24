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

const ProductList = ({data,loading}) => {
 
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
            />
          <FrameType
            src="https://static.lenskart.com/images/cust_mailer/Eyeglass/HalfRim.png"
            type="Half Rim"
            />
          <FrameType
            src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Rimless.png"
            type="Rimless"
            />
            </Flex>
        </Box>
        <Box mb="20px">
          <Text fontWeight="bold" mb="3px" color="blackAlpha.600">FRAME SHAPE</Text>
          <Grid templateColumns="repeat(3, 1fr)">
            <GridItem><FrameType src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Rectangle.png"  type="Rectangle"/></GridItem>
            <GridItem><FrameType src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Round.png" type="Round"/></GridItem>
            <GridItem><FrameType src="https://static.lenskart.com/images/cust_mailer/Eyeglass/CatEye.png" type="Cat Eye"/></GridItem>
            <GridItem><FrameType src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Square.png" type="Square"/></GridItem>
            <GridItem><FrameType src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Geometric.png"  type="Geometric"/></GridItem>
            <GridItem><FrameType src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Wayfarer.png"  fil="wayfarer" type="Wayfarer"/></GridItem>
            <GridItem><FrameType src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Aviator.png" type="Aviator"/></GridItem>
            <GridItem><FrameType src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Hexagonal.png" type="Hexago..."/></GridItem>
            <GridItem><FrameType src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Clubmaster.png" type="Clubmas..."/></GridItem>
          </Grid>
        </Box>
        <VStack mb="20px" alignItems="flex-start">
        <Text fontWeight="bold" mb="3px" color="blackAlpha.600">FRAME COLOR</Text>
        <Checkbox colorScheme="green">Black ({285})</Checkbox>
        <Checkbox colorScheme="green">Blue ({285})</Checkbox>
        <Checkbox colorScheme="green">White ({285})</Checkbox>
        <Checkbox colorScheme="green">Gold ({285})</Checkbox>
        <Checkbox colorScheme="green">Silver ({285})</Checkbox>
        <Checkbox colorScheme="green">Green ({285})</Checkbox>
        </VStack>
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
     <Checkbox > JOHN JACOBS(929)</Checkbox>
     <Checkbox > VINCENT CHASE ONLINE(867)</Checkbox>
     <Checkbox > VINCENT CHASE(543)</Checkbox>
     <Checkbox > LENSKART AIR ONLINE(484)</Checkbox>
     <Checkbox > HOOPER(265)</Checkbox>
    
    
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
     <Checkbox >EXTRA NARROW(379) </Checkbox>
     <Checkbox > NARROW(1076) </Checkbox><br />
     <Checkbox >SMALL(2) </Checkbox><br />
     <Checkbox >MEDIUM(2178) </Checkbox><br />
     <Checkbox >LARGE(1) </Checkbox><br />
     <Checkbox >WIDE(1804) </Checkbox>
     
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
       PRICE
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     <Checkbox >Rs. 0 - Rs. 499 (143)</Checkbox>
     <Checkbox >Rs. 500 - Rs. 999 (213)</Checkbox>
     <Checkbox >Rs. 1000 - Rs. 1499 (125)</Checkbox>
     <Checkbox >Rs. 1500 - Rs. 1999 (222)</Checkbox>
     <Checkbox >Rs. 2000 - Rs. 2499 (101)</Checkbox>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        GENDER
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     <Checkbox >KIDS(756)</Checkbox><br />
     <Checkbox >MEN(12)</Checkbox><br />
     <Checkbox > UNISEX(5220)</Checkbox>
     <Checkbox >WOMEN(926)</Checkbox><br />
    
     <Checkbox >TEEN(1)</Checkbox>
    
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        MATERIAL
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     <Checkbox >CELLULOSE ACETATE(661)</Checkbox>
     <Checkbox >ACETATE & TITANIUM(31)</Checkbox>
     <Checkbox >MEMORY METAL(12)</Checkbox>
     <Checkbox >TR90 & ACETATE(11)</Checkbox>
     <Checkbox >STAINLESS STEEL & TR90(149)</Checkbox>
     <Checkbox >HIGH DENSITY ACETATE(86)</Checkbox>
     
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

import React from "react";
import { Link } from "react-router-dom";
import { Box, Image, Text } from "@chakra-ui/react";


export default function CartNavbar(){
    return(
        <Box display="flex" minWidth="max-content" alignItems="center" gap="2" bg="#fff">
          <Box ml="10vw">
            <Link to="/">
              <img
                alt="lenskart-logo"
                src="https://i.imgur.com/WEp6ly8.png" width={"100px"}
              />
            </Link>
          </Box>

          <Box ml="35%" display='flex' flexDirection='row'>
            <Box >
              <Image
                src="https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/Shield.svg"
                alt="Dan Abramov"
              />
            </Box>
            <Box
              fontSize="lg"
              lineHeight="24px"
              letterSpacing="-.02em"
              color="#66668e"
              fontWeight="400"
              ml="20px" >
              <Text>100% safe and secure</Text>
            </Box>
          </Box>
        </Box>
    )
}
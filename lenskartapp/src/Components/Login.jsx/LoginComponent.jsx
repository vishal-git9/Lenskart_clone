import React, { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    Image
  } from '@chakra-ui/react';


const LoginComponent = ({isOpen,initialRef,finalRef,onClose}) => {
  const [details,setDetails] = useState({})
  const handleLogin = (e)=>{
    setDetails({...details,[e.target.name]:e.target.value})
  }
  return (
    <>
      {/* <Button onClick={onOpen}>Login</Button> */}
      {/* <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button> */}
        
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        >
        
        <ModalOverlay />
        <ModalContent>
            <Image src='https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/DesktopLoginImage.svg' />
          <ModalHeader>Login to your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input ref={initialRef} placeholder='First name' value={details.email || ""} name='email' type={"email"} onChange={handleLogin}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input placeholder='Last name' type={"password"} value={details.password || ""} name="password" onChange={handleLogin}/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Login
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      
    </>
  )
};

export default LoginComponent;
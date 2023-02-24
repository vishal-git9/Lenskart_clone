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
    Input
  } from '@chakra-ui/react';


const SignUpComponent = ({isOpen,initialRef,finalRef,onClose}) => {
  const [details,setDetails] = useState({})
  const handleSignup = (e)=>{
    setDetails({...details,[e.target.name]:e.target.value})
  }
  return (
    <>
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
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder='First name' value={details.firstName||""} name='firstName' type={"text"} onChange={handleSignup}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder='Last name' name='lastName' value={details.lastName||""} type={"text"} onChange={handleSignup}/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Mobile No.</FormLabel>
              <Input placeholder='Mobile' name='Mobile' type={"number"} value={details.Mobile||""} onChange={handleSignup}/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input type='email' placeholder='Email' name='email' value={details.email||""} onChange={handleSignup} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input type='password' placeholder='Password' name='password' value={details.password||""} onChange={handleSignup} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Create an Account
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
};

export default SignUpComponent;
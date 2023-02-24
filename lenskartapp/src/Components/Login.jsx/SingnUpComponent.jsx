import React from 'react';
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
    useDisclosure
  } from '@chakra-ui/react';
import LoginComponent from './LoginComponent';

 

const SignUpComponent = ({text, asALink}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const styleObj = {
    border:'none',background:'none', marginLeft: '-45px', color: asALink ? 'blue' : null
   };

  return (
    <>
      <Button style={styleObj}  onClick={onOpen}>{text}</Button>
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
          <ModalHeader>Create an account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder='First name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder='Last name' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Mobile No.</FormLabel>
              <Input placeholder='Mobile' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input type='email' placeholder='Email' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input type='password' placeholder='Password' />
            </FormControl>
            <br />
            <p style={{color: 'navy', fontSize: '14px'}}>Got a Referral Code?( Optional )</p>
            <br /><br />
            <input type="checkbox" /><span style={{color: 'navy', fontSize: '14px'}}> Get Updates on Whatsapp</span>
            <p style={{fontSize: '13px'}}>By creating this account, you agree to our Privacy Policy</p>
          </ModalBody>

          <ModalFooter>
            <Button  style={{width: '100%', background: '#cccccc', margin: 'auto', borderRadius: '25px', color: 'navy'}}  colorScheme='blue' mr={3}>
              Create an Account
            </Button>
            {/* <Button onClick={onClose}>Cancel</Button> */}
          </ModalFooter>
          <LoginComponent text= 'Have an account? Sign In' asALink = {true} />
        </ModalContent>
      </Modal>
    </>
  )
};

export default SignUpComponent;
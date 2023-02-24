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
    useDisclosure,
    Image
  } from '@chakra-ui/react';
import SignUpComponent from './SingnUpComponent';


const LoginComponent = ({text, asALink}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const styleObj = {
    border:'none',background:'none', color: asALink ? 'blue' : null
   };

  return (
    <>
      <Button style={styleObj} onClick={onOpen}>{text}</Button>
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
          <ModalHeader>Create your account</ModalHeader>
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
          </ModalBody>

          <ModalFooter>
            <Button style={{width: '100%', background: '#cccccc', margin: 'auto', borderRadius: '25px', color: 'navy'}} colorScheme='blue' mr={3}>
              Save
            </Button>
            {/* <Button onClick={onClose}>Cancel</Button> */}
          </ModalFooter>
          <SignUpComponent text='New member? Create an Account' asALink= {true}/>
        </ModalContent>
      </Modal>
      
    </>
  )
};

export default LoginComponent;
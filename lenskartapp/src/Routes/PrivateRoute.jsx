import { useToast } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRoute = ({children}) => {
  const isAuth = useSelector((store)=>store.authState.isAuth)
  const location  = useLocation()
  const toast = useToast()
  if(!isAuth){
    return(
      toast({
        title: 'Invalid user.',
        position:"top",
        description: "Please Login.",
        status:"error",
        duration: 2000,
        isClosable: true,
      })
    // <Navigate state={location.pathname} to={location.pathname}/>
    )
  }

  return children
}

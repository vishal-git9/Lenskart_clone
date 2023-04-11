import { useToast } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export const PrivateRoute = ({children}) => {
  const isAuth = useSelector((store)=>store.authState.isAuth)
  const toast = useToast()
  const navigate = useNavigate()
  if(!isAuth){
    return(
      toast({
        title: 'Invalid user.',
        position:"top",
        description: "Please Login.",
        status:"error",
        duration: 2000,
        isClosable: true,
      }),
      navigate(-1)
    )
  }
  return children
}

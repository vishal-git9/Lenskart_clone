import React from 'react'
import {Button} from "@chakra-ui/react"
export const Eyecard = ({props,button}) => {
    const {image,title} = props
    console.log(button)
  return (
    <div style={{display:"flex",alignItems:"center",flexDirection:"column",gap:"10px"}}>
        <img src={image} alt={title} width="80%" />
        <h3>{title}</h3>
        {button?<Button bgColor={"#56B7C3"} color="white">Explore</Button>:""}
    </div>
  )
}

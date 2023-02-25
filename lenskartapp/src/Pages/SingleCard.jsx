import React from 'react'

const SingleCard = ({id,image,Brands,FrameSize,price,ratings,reviews,title}) => {
  return (
    <div>
      <img src={image} alt="xx" />
      <h1>{title}</h1>
    </div>
  )
}

export default SingleCard

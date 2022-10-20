import React from 'react'

const ProductCard = ({produit:{category,image,price,title}}) => {
   
  return (
    <div>
        <h1> {title} </h1>
        <img src={image} alt="" width="50px" />
        <p>category :{category}</p>
        <p> {price}</p>
    </div>
  )
}

export default ProductCard
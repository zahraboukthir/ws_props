import React from 'react'
import ProductCard from './ProductCard'

const ProductLis = ({list}) => {
console.log(list)
  return (
    <div>
        {
            list.map(
                prod=><ProductCard key={prod.id} produit={prod}/>
            )
        }
    </div>
  )
}

export default ProductLis
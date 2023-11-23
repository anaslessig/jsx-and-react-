import React from 'react'
import product from './product'
import './App.css';
function Image() {
  return (
    <div>
       <img src={product.image}/>
    </div>
  )
}

export default Image
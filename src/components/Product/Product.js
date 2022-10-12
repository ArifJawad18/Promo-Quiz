import React from 'react';
import './Product.css'

const Product = ({quiz}) => {
    const {picture, name, total} = quiz;
    return (
       <div className='product'>
        <img src={picture} alt="" />
        <h2>{name}</h2>
        <h4>Total: {total}</h4>
        <button className='button'>Click</button>
       </div>
    )
        }
export default Product;
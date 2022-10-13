import React from 'react';
import './Product.css'
import Nav from 'react-bootstrap/Nav';

const Product = ({quiz}) => {
    const {picture, name, total} = quiz;
    return (
       <div className='product'>
        <img src={picture} alt="" />
        <h2>{name}</h2>
        <h4>Total: {total}</h4>
        <Nav.Link href="/quiz" className='button'>All Quiz</Nav.Link>

        
       
       </div>
    )
        }
export default Product;
import React from 'react';
import './Product.css'

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Product = ({quiz}) => {
    const {id,picture, name, total} = quiz;
    return (
       <div className='product'>
        <img src={picture} alt="" />
        <h2>{name}</h2>
        <h4>Total: {total}</h4>
        <Link to={`/quizzes/${id}`}>
          <Button variant="info">Start Quiz</Button>
          </Link>

       </div>
    )
        }
export default Product;
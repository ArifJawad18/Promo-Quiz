import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = ({quiz}) => {
    const {picture} = quiz;
    return (
      
       <div>
        <h2 className='text-center'>Select Your 4 Quiz</h2>
 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title>React</Card.Title>
        <Card.Text>
       
        </Card.Text>
        <Button variant="primary">Go Quiz</Button>
      </Card.Body>
    </Card> 
    



       </div>
    )
        }
export default Product;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import Card from 'react-bootstrap/Card';
import './Home.css'
const Home = () => {
    const quiz = useLoaderData();

    return (
        <div>
        <div>
        <Card.Text>
          <h1>Welcome To Best Online Quiz</h1>
          </Card.Text>
              <Card>
        <Card.Img variant="top" src="https://img.freepik.com/free-vector/quiz-neon-sign_1262-19629.jpg?w=826&t=st=1665673618~exp=1665674218~hmac=da81f3e4b23c38bf65aeda81ca5451613dcc521df78eb4a47601cacf6bc7a1d0" />
      </Card>
        <h1 className='text'>Start Answering</h1>
        <p className='sml-text'>Choose your favorite topic</p>
        </div>
        <div className="home-container">
            <div className="left-side">
            <div className="activity-container">
            {
                     quiz.map(quiz =><Product
                     key={quiz.id}
                    quiz={quiz}
                    ></Product>)
           }
                </div>    
            </div>
        </div>
    </div>





   
        
   
         
        
    );
};

export default Home;
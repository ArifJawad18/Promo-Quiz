import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import './Home.css'
const Home = () => {
    const quiz = useLoaderData();

    return (
        <div>
              <div>
        <h1>Start Answering</h1>
        <p>Choose your favorite topic</p>
        </div>
            <div className="home-container">
                <div className="product-container">
                {
                     quiz.map(quiz =><Product
                     key={quiz.id}
                    quiz={quiz}
                    ></Product>)
           }
                </div>
            </div>
            </div>



         
        
    );
};

export default Home;
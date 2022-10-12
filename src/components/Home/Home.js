import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const Home = () => {
    const quiz = useLoaderData();

    return (
        <div>
           {
            quiz.map(quiz => <Product
                key={quiz.id}
                quiz={quiz}
            ></Product>)
           }
        </div>
    );
};

export default Home;
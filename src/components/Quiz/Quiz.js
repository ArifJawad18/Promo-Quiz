import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Ans from '../Ans/Ans';



const Quiz = () => {
    const quiz = useLoaderData()
    console.log(quiz)
    return (
        <div>
            <h1>quiz: {quiz.length}</h1>
            {
                quiz.map(quiz => <Ans
                key={quiz.id}
                quiz={quiz}
                ></Ans>)
            }
          
        </div>
    );
};

export default Quiz;
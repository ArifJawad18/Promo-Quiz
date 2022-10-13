import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';



const Quiz = () => {
    const quiz = useLoaderData();
    console.log(quiz)
    return (
        <div>
            <h1>All Quiz: {quiz.length}</h1>
            {
            quiz.map(questions => <Questions
           key={questions.id}
           questions={questions}
           ></Questions>)
              
           }
        </div>
    );
};

export default Quiz;
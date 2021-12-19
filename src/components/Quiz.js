import React from 'react';

const Quiz = ({cat}) => {
    const {category, type, difficulty, question, correct_answer} = cat;
    return (
        <div>
            <h2>Question: {question}</h2>
            <h4>Ans: {correct_answer}</h4>
        </div>
    );
};

export default Quiz;
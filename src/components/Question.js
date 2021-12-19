import React, { useEffect, useState } from 'react';
import Quiz from './Quiz';

const Question = () => {
    const [catagory, setCatagory] = useState([]);
    useEffect(()=>{
        fetch('https://opentdb.com/api.php?amount=5&difficulty=easy')
        .then(res => res.json())
        .then(data => setCatagory(data.results))
    }, []);

    console.log(catagory)
    return (
        <div>
            <h1>Ans the Question: {catagory.length}</h1>
            {
                catagory.map(cat => <Quiz key={cat.correct_answer} cat={cat}></Quiz>)
            }
        </div>
    );
};

export default Question;
import React from 'react';

const Quiz = ({quiz}) => {
    const {question,options} = quiz.data;
    return (
        <div>
            <h3>{question}</h3>
            <h3>{options}</h3>
        </div>
    );
};

export default Quiz;
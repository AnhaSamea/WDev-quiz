import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const TopicDetails = () => {
    const topic = useLoaderData();
    console.log(topic.data.questions[0]);
    // const {question,options} = topic.data;
    // const {question}
    return (
        <div>
            <h3>Detais</h3>
            {
                topic.map(quiz=><Quiz key={quiz.id} quiz={quiz}></Quiz>)
            }

        </div>
    );
};

export default TopicDetails;
// /topic/:id
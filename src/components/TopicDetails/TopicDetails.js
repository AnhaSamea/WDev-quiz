import React from 'react';
import { useLoaderData } from 'react-router-dom';
const TopicDetails = () => {
    const topic = useLoaderData();
    console.log(topic.data[0]);
    return (
        <div>
            <h3>This is details</h3>
        </div>
    );
};

export default TopicDetails;
// /topic/:id
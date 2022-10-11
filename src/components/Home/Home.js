import React from 'react';
import { useLoaderData } from "react-router-dom";
import Topics from '../../Topics/Topics';
const Home = () => {
    const topics = useLoaderData();
    // console.log(topics);
    return (
        <div className='bg-lime-200 py-10 px-10'>
           <h2 className='m-6 text-3xl font-bold text-lime-900'> Our trivia on web development has questions about every aspect concerning web development nowadays and will test your knowledge on the matter. Can you face all these questions?</h2>
            <Topics className='p-36'></Topics>
        </div>
    );
};

export default Home;
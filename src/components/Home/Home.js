import React from 'react';
import { useLoaderData } from "react-router-dom";
import Topics from '../../Topics/Topics';
import image from './quiz.jpg'
import './Home.css'
const Home = () => {
    const topics = useLoaderData();
    // console.log(topics);
    return (
        <div className='bg-lime-200 py-10 px-10'>
            <div className='home flex'>

                <h2 className='mt-36 pt-6 text-3xl font-bold text-lime-900'> WDev Quiz has questions about every aspect concerning web development nowadays and will test your knowledge on the matter. Can you face all these questions?</h2>
                <img src={image} alt="" />
            </div>
            <Topics className='p-30'></Topics>
        </div>
    );
};

export default Home;
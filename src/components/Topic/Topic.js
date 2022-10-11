import React from 'react';
import { Link } from 'react-router-dom'
import './Topic.css'
const Topic = ({topic}) => {
    const {id,name,logo} = topic;
    return (
        <div className='topic m-12 text-lime-50 font-semibold'>
            <img src={logo} alt="" />
            <h3 className='text-3xl p-3'>{name}</h3>
            <Link to={`/topic/${id}`}>
            <button className='px-3 py-1 text-lime-900 bg-lime-400 hover:bg-lime-700 hover:text-lime-50 rounded-lg'>Start Quiz</button>
            </Link>
        </div>
    );
};

export default Topic;
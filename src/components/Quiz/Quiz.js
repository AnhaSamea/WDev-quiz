import React from 'react';
import './Quiz.css'
const Quiz = ({detail}) => {
    const {question,options} = detail;
    return (
        <div className='text-lime-900 m-9'>
            <div className='bg-lime-200 p-6 rounded-lg'>
            <h3 className='text-2xl font-bold'>{question}</h3>
            <div className='quiz-option pt-6'>
                <button className='text-xl rounded-xl p-1 bg-lime-300 text-lime-900 font-medium hover:bg-lime-800 hover:text-lime-50'>{options[0]}</button>
                <button className='text-xl rounded-xl p-1 bg-lime-300 text-lime-900 font-medium hover:bg-lime-800 hover:text-lime-50'>{options[1]}</button>
                <button className='text-xl rounded-xl p-1 bg-lime-300 text-lime-900 font-medium hover:bg-lime-800 hover:text-lime-50'>{options[2]}</button>
                <button className='text-xl rounded-xl p-1 bg-lime-300 text-lime-900 font-medium hover:bg-lime-800 hover:text-lime-50'>{options[3]}</button>
            {/* <p className='text-xl'><strong>i.</strong> {options[0]}</p> */}
            {/* <p className='text-xl'><strong>ii.</strong> {options[1]}</p>
            <p className='text-xl'><strong>iii.</strong> {options[2]}</p>
            <p className='text-xl'><strong>iv.</strong> {options[3]}</p> */}
            </div>
            </div>
        </div>
    );
};

export default Quiz;
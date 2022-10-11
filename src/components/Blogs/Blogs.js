import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='blogs text-lime-900'>
           
            <div className='bg-lime-200 m-12 p-6 rounded-lg'>
            <h3 className='text-2xl font-bold'>1. What is the purpose of react router?</h3>
            <p><strong>Answer:</strong></p>
            </div>
            <div className='bg-lime-200 m-12 p-6 rounded-lg'>
            <h3 className='text-2xl font-bold'>2. How does context api works?</h3>
            <p><strong>Answer:</strong></p>
            </div>
            <div className='bg-lime-200 m-12 p-6 rounded-lg'>
                <h3 className='text-2xl font-bold'>3. What is useRef hook?</h3>
                <p><strong>Answer:</strong></p>
            </div>

        </div>
    );
};

export default Blogs;
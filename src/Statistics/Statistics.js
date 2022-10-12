import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Statistics.css'
const Statistics = () => {
    const data = [
        {
            name: "React",
            total: 8,

        },
        {
            name: "JavaScript",
            total: 9,

        },
        {
            name: "CSS",
            total: 8,

        },
        {
            name: "Git",
            total: 11,

        }

    ];
    return (
        <div className='statistics'>
            <h3 className='text-4xl font-bold text-lime-900 p-3'>Statistics of Total question</h3>
            <LineChart className='mt-12' width={500} height={400} data={data}>
                <Line type="monotone" dataKey="total" stroke="#808000" activeDot={{ r: 8 }} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Statistics;
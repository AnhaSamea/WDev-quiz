import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Statistics.css'
const Statistics = () => {
    const data = [
        {
          name: "React",
          total: 8,
          quiz: 2400,
          amt: 2400
        },
        {
          name: "JavaScript",
          total: 9,
          quiz: 1398,
          amt: 2210
        },
        {
          name: "CSS",
          total: 8,
          quiz: 9800,
          amt: 2290
        },
        {
          name: "Git",
          total: 11,
          quiz: 3908,
          amt: 2000
        }
       
      ];
    return (
        <div className='statistics'>
             <LineChart width={500} height={400} data={data}>
            <Line type="monotone" dataKey="total" stroke="#808000" activeDot={{ r: 8 }} />
            <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Statistics;
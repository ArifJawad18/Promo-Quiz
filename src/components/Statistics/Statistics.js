import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, } from 'recharts';

const Statistics = () => {
const data = [
    {
      name: 'React',
      total: 8,
      amt: 100,
    },
    {
      name: 'JavaScript',
      total: 9,
      amt: 2210,
    },
    {
      name: 'CSS',
      total: 8,
      amt: 2290,
    },
    {
      name: 'git',
      total: 11,
      amt: 2000,
    },
  ];
    return (
        <div>
            <LineChart width={990} height={500} data={data}>
            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            <XAxis dataKey="name" />
            <CartesianGrid strokeDasharray="3 3" />
          <YAxis />
          <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Statistics;
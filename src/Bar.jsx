import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { BsChevronDown } from "react-icons/bs";

const Example = () => {
  const [data, setData] = useState([
    {
      name: 'Jan',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Mar',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Apr',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Jun',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Jul',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Aug',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
        name: 'Sep',
        uv: 6500,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Oct',
        uv: 5000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Nov',
        uv: 2000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Dec',
        uv: 8000,
        pv: 2400,
        amt: 2400,
    },
    
  ]);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (_, index) => {
    setActiveIndex(index);
  };

  const activeItem = data[activeIndex];

  return (
    <div style={{ width: '100%' }}>
         <span className='space-words'>Overviwe</span>
         <span className='space-words'>quaterly<BsChevronDown  className='icon'/></span>
        
      {/* <h2>Overviwe
           quaterly
          <BsChevronDown  className='icon'/> 
      </h2> */}
      <h5>Monthly Earning</h5>
      <ResponsiveContainer width="100%" height={100}>
        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="uv" onClick={handleClick}>
            {data.map((entry, index) => (
              <Cell
                cursor="pointer"
                fill={index === activeIndex ? '#110563fb' : '#808080'}
                key={`cell-${index}`}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="content">{`Earnig of "${activeItem.name}": ${activeItem.uv}`}</p>
    </div>
  );
  
};

export default Example;


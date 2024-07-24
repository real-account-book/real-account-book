import React, { FC, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { alphabet, MonthlyBox4 } from './MonthlyList.css.ts';

const MonthlyList4: FC = () => {
  const { year } = useParams<{ year: string }>(); 
  const [plusTotal, setPlusTotal] = useState<number>(0);
  const [minusTotal, setMinusTotal] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responsePlus = await fetch(`http://localhost:8888/api/total/plus/${year}-04-01/${year}-04-30`);
        const plusData = await responsePlus.json();
        
        const responseMinus = await fetch(`http://localhost:8888/api/total/minus/${year}-04-01/${year}-04-30`);
        const minusData = await responseMinus.json();
        
        const plusSum = plusData.reduce((acc: number, item: { plus: number }) => acc + item.plus, 0);
        const minusSum = minusData.reduce((acc: number, item: { minus: number }) => acc + item.minus, 0);

        setPlusTotal(plusSum);
        setMinusTotal(minusSum);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (year) {
      fetchData();
    }
  }, [year]);

  const handleClick = () => {
    if (year) {
      navigate(`/month/${year}04`);
    }
  };

  return (
    <button className={MonthlyBox4} onClick={handleClick}>
      <div className={alphabet}>
        <span>{`4월 (+${plusTotal})/(-${minusTotal}) 내역`}</span>
      </div>
    </button>
  );
};

export default MonthlyList4;
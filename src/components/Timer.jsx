import React, { useState, useEffect } from 'react';

export const Timer = () => {
  const [centiseconds, setCentiseconds] = useState(0);

  useEffect(() => {
    let timer;

    timer = setInterval(() => {
        setCentiseconds(prevCentiseconds => prevCentiseconds + 1);
    }, 10);

    return () => {
        clearInterval(timer);
      };
    }, []);

  return (
        <div className='timer-container'>
          <h1 className='timer'>{Math.floor(centiseconds/100)}</h1>
        </div>
  );
};
import React from 'react';

function Result({ score, totalQuestions, handleRestart }) {
  return (
    <div className='result'>
      <h2 className='score'>Your Score: {score}/{totalQuestions}</h2>
      <button className='restart-btn' onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default Result;

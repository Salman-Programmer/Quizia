import React from 'react';

function Question({ question, options, handleAnswerClick }) {
  return (
    <div className='question'>
      <h2>{question}</h2>
      <ul >
        {options.map((option, index) => (
          <li className='option' key={index} onClick={() => handleAnswerClick(option.isCorrect)}>
            {option.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;

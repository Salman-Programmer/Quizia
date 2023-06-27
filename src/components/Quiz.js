import React, { useState, useEffect } from 'react';
import Question from './Question';
import Result from './Result';

function Quiz() {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  function fetchData() {
    fetch('https://salman-programmer.github.io/my-json-apis/quizData.json')
      .then((response) => response.json())
      .then((data) => setQuizData(data))
      .catch((error) => console.log(error));
  }

  useEffect(fetchData, []);

  function handleAnswerClick(isCorrect) {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  function handleRestart() {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div >
      {quizData.length === 0 ? (
        <p>Loading...</p>
      ) : showScore ? (
        <Result
          score={score}
          totalQuestions={quizData.length}
          handleRestart={handleRestart}
        />
      ) : (
        <Question
          question={quizData[currentQuestion].question}
          options={quizData[currentQuestion].options}
          handleAnswerClick={handleAnswerClick}
        />
      )}
    </div>
  );
};

export default Quiz;

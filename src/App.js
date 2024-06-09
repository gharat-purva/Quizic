import React, { useState, useEffect } from 'react';
import './styles.css';
import Header from './Header';

const Quizic = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch('questions.json');
      if (!response.ok) {
        throw new Error('Failed to fetch questions');
      }
      const data = await response.json();
      setQuestions(data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion]?.correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(-1);
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-800 text-slate-100">
      <Header />
      <div className="container flex justify-center items-center">
        <div className="quiz-card">
          {questions.length > 0 && currentQuestion !== -1 ? (
            <>
              <p className="question">{questions[currentQuestion].question}</p>
              <div className="options-grid">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className="option-button"
                    onClick={() => handleAnswer(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div>
              <p className="text-lg">Quiz completed! Your score is {score}/{questions.length}</p>
              <button onClick={() => setCurrentQuestion(0)}>Restart Quiz</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quizic;

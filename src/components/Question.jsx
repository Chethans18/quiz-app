// src/components/Question.js
import React from 'react';
import AnswerOption from './AnswerOption';

function Question({
  question,
  currentQuestionIndex,
  totalQuestions,
  handleAnswerSelection,
  selectedAnswer,
}) 
{
  return (
    <div>
        <h2>{`question ${currentQuestionIndex+1} of ${totalQuestions}`}</h2>
        <p>dangerouslySetInnerHTML={{__htlm:question.question}}</p>
        <div>
            {question.options.map((option,index))}
        </div>
    </div>
  );
}

export default Question;

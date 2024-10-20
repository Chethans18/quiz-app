import React, { useEffect, useReducer, useRef, useState } from 'react';
import axios from 'axios';
import { useQuiz } from './context/QuizContext';
import Question from './components/Question';
import Results from './components/Results';
import './styles/styles.css';

//initial state  for managing the quiz

const initialState={
  currentQuestionIndex:0,
  score:0,
  selectedAnswer:null,
  quizComplete:false,
}

//reducer to manage the quiz
function quizReducer(state,action){
switch(action.type){
  case'SELECT_ANSWER':
    return{...state,selectedAnswer:action.playload};
  case NEXT_QUESTION:
    const isCorrect=state.selectedAnswer===action.correctAnswer;
    return{
      
    }
}
}
function App(){
  const [state,dispatch]=useReducer(quizReducer,initialState);

}


export default App;

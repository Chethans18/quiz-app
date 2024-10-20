import React,{useState,useContext,createContext, Children} from "react";

//creating the context
const QuizContext=createContext(); //QuizContext here will act as the container to store the quiz-related data that you want to share globally in your app.
//we nee to export the context and this is ia custom hook
export const useQuiz=useContext(QuizContext);

export const QuizProvider=({Children})=>{
    const[quizMode,setQuizMode]=useState('normal');

    return(
        <QuizContext.Provider value={{quizMode,setQuizMode}}>
            {Children}
        </QuizContext.Provider>
    );
};

import React from "react";
import { Quiz } from "../types";
import "./_questions.scss";

interface Data {
  quiz: Quiz;
  selectedTopic: string;
  currentIndex: number;
}
export const Questions: React.FC<Data> = ({ quiz, currentIndex }) => {
  const questionLength = quiz.questions.length;

  return quiz.questions.map(
    (question, index) =>
      currentIndex < questionLength &&
      currentIndex == index && (
        <div key={index} className='left-pane'>
          <h2 className='body-small'>
            Question {currentIndex + 1} of {questionLength}
          </h2>
          <h3 className='header-medium'>{question.question}</h3>
          <div className='progress-container'>
            <div
              className='progress'
              style={{
                width: `${(currentIndex + 1) * 10}%`,
              }}></div>
          </div>
        </div>
      )
  );
};

import React, { ChangeEvent, FormEvent, useState } from "react";
import { Quiz } from "../types";
import "./_options.scss";
import { Button } from "../Button/Button";

interface Data {
  quiz: Quiz;
  currentIndex: number;
  currentScore: number;
  onScore: (newScore: number) => void;
  changeIndex: (newIndex: number) => void;
  quizComplete?: () => void;
}

export const Options: React.FC<Data> = ({
  quiz,
  currentIndex,
  currentScore,
  onScore,
  changeIndex,
  quizComplete,
}) => {
  return quiz.questions.map((option, i) => {
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [answering, setAnswering] = useState(true);
    const [noAnswer, setNoAnswer] = useState(false);
    const newIndex = currentIndex + 1;

    const correctAnswer =
      "/Frontend-quiz-app/src/assets/images/icon-correct.svg";
    const wrongAnswer = "/Frontend-quiz-app/src/assets/images/icon-error.svg";

    async function validateAnswer(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();
      const newScore = currentScore + 1;
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        if (selectedAnswer === "") {
          setNoAnswer(true);
        } else if (selectedAnswer == option.answer) {
          onScore(newScore);
          setAnswering(false);
          console.log(`length: ${quiz.questions.length}`);
          console.log(`current index: ${currentIndex}`);
        } else {
          setAnswering(false);

          console.log(`length: ${quiz.questions.length}`);
          console.log(`current index: ${currentIndex}`);
        }
      } catch (error) {
        console.error("Answer selection error", error);
      }
    }
    function handleAnswerChange(e: ChangeEvent<HTMLInputElement>) {
      const newAnswer = e.target.value;
      setSelectedAnswer(newAnswer);
      setNoAnswer(false);
    }

    return (
      currentIndex < quiz.questions.length &&
      currentIndex == i && (
        <div key={i} className='right-pane'>
          <form id='optionForm' onSubmit={validateAnswer}>
            {option.options.map((value, i) => {
              const alphaNumIndex = String.fromCharCode(65 + i);
              return (
                <div key={i} className='form-options'>
                  <div
                    className={`option-container ${
                      !answering &&
                      (value == option.answer ? "correct" : "wrong")
                    }`}>
                    <label
                      className='option-label header-small'
                      htmlFor={`option${alphaNumIndex}`}
                      autoFocus={i === 0}>
                      <div className='option-letter'>{alphaNumIndex}</div>

                      <input
                        type='radio'
                        name='option'
                        id={`option${alphaNumIndex}`}
                        onChange={handleAnswerChange}
                        value={value}
                        disabled={!answering}
                      />
                      {value}
                    </label>
                    {!answering && (
                      <img
                        src={
                          value == option.answer ? correctAnswer : wrongAnswer
                        }
                        className='result-icon'
                      />
                    )}
                  </div>
                </div>
              );
            })}
            {answering ? (
              <Button inlineText='Submit Answer' type='submit' />
            ) : currentIndex + 1 >= quiz.questions.length ? (
              <Button
                inlineText='Show Score'
                type='button'
                onclick={quizComplete}
              />
            ) : (
              <Button
                inlineText='Next Question'
                type='button'
                onclick={() => changeIndex(newIndex)}
              />
            )}

            {noAnswer && (
              <div className='error-option body-medium'>
                <img src={wrongAnswer} className='result-icon' />
                Please select answer
              </div>
            )}
          </form>
        </div>
      )
    );
  });
};

import React, { ChangeEvent, useContext, useState } from "react";
import quizzesData from "../data.json";
import { Data } from "./components/types";
import { Header } from "./components/Header/Header";
import { Questions } from "./components/Questions/Questions";
import { Options } from "./components/Options/Options";
import { ThemeContext } from "./context/ThemeContext";
import { Subject } from "./components/Subject/Subject";
import { Score } from "./components/Score/Score";

const App: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const [subjectSelected, setSubjectSelected] = useState(true);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [currentScore, setCurrentScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const homeEndPoint = "/Frontend-quiz-app/";
  const data: Data = quizzesData;

  function handleDisplay(e: ChangeEvent<HTMLInputElement>) {
    const selectedSubject = e.target.value;
    setSelectedTopic(selectedSubject);
    setSubjectSelected(false);
  }

  function handleScoreChange(newScore: number) {
    setCurrentScore(newScore);
  }

  function handleIndexChange(newIndex: number) {
    setCurrentIndex(newIndex);
  }

  const quizCompleted = () => {
    setIsQuizCompleted(!isQuizCompleted);
  };

  return (
    <div className={`${theme} page-container`}>
      <div className='app-container'>
        <Header
          selectedTopic={selectedTopic}
          homeEndPoint={homeEndPoint}
          subjects={data.quizzes}
        />
        {subjectSelected ? (
          <main>
            <div className='main-container'>
              <div className='left-pane'>
                <h2 className='header-large'>Welcome to the</h2>
                <h3 className='header-large'>
                  <strong>Frontend Quiz!</strong>
                </h3>
                <p className='body-small'>Pick a subject to get started.</p>
              </div>
              <div className='right-pane'>
                <form>
                  {data.quizzes.map((subject, i) => {
                    return (
                      <div key={subject.title} className='option-container '>
                        <Subject
                          index={i}
                          type='radio'
                          subjectTitle={subject.title}
                          subjectIcon={subject.icon}
                          homeEndPoint={homeEndPoint}
                          onChange={handleDisplay}
                        />
                      </div>
                    );
                  })}
                </form>
              </div>
            </div>
          </main>
        ) : (
          <section>
            {!isQuizCompleted ? (
              <div className='quiz-container'>
                {data.quizzes.map(
                  (quiz) =>
                    selectedTopic == quiz.title && (
                      <Questions
                        key={quiz.title}
                        quiz={quiz}
                        selectedTopic={selectedTopic}
                        currentIndex={currentIndex}
                      />
                    )
                )}
                {/* OPTIONS PANEL */}
                {data.quizzes.map(
                  (quiz) =>
                    selectedTopic == quiz.title && (
                      <Options
                        key={quiz.title}
                        quiz={quiz}
                        currentIndex={currentIndex}
                        currentScore={currentScore}
                        onScore={handleScoreChange}
                        changeIndex={handleIndexChange}
                        quizComplete={quizCompleted}
                      />
                    )
                )}
              </div>
            ) : (
              <Score
                selectedTopic={selectedTopic}
                dataProps={data.quizzes}
                homeEndPoint={homeEndPoint}
                totalScore={currentScore}
              />
            )}
          </section>
        )}
      </div>
    </div>
  );
};

export default App;

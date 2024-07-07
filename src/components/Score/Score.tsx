import { Button } from "../Button/Button";
import { Subject } from "../Subject/Subject";
import "./score.scss";

interface SubjectProps {
  title: string;
  icon: string;
}
interface Topic {
  selectedTopic: string;
  homeEndPoint: string;
  totalScore: number;
  dataProps: SubjectProps[];
}

export const Score: React.FC<Topic> = ({
  homeEndPoint,
  selectedTopic,
  dataProps,
  totalScore,
}) => {
  function findIconByName(title: string) {
    const foundIcon = dataProps.find((data) => data.title == title);

    return foundIcon ? foundIcon.icon : "";
  }
  return (
    <div className='quiz-container'>
      <div className='left-pane'>
        <h1 className='header-large'>Quiz Completed</h1>
        <h3 className='header-large'>You scored...</h3>
      </div>
      <div className='right-pane score-container'>
        <Subject
          subjectTitle={selectedTopic}
          subjectIcon={findIconByName(selectedTopic)}
          homeEndPoint={homeEndPoint}
          type='hidden'
        />
        <h2 className='total-score'>{totalScore}</h2>
        <p className='body-medium score-text'>out of 10</p>
      </div>
      <Button
        inlineText='Play Again'
        type='button'
        onclick={() => window.location.reload()}
      />
    </div>
  );
};

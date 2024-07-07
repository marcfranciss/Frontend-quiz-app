import "./_header.scss";
import { SubjectsOnly } from "../types";
import { Subject } from "../Subject/Subject";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

interface Subject {
  selectedTopic: string;
  homeEndPoint: string;
  subjects: SubjectsOnly[];
}
export const Header: React.FC<Subject> = ({
  homeEndPoint,
  selectedTopic,
  subjects,
}) => {
  function findIconByName(title: string) {
    const foundIcon = subjects.find((data) => data.title == title);

    return foundIcon ? foundIcon.icon : "";
  }

  return (
    <header>
      <div className='header-container'>
        <Subject
          subjectTitle={selectedTopic}
          subjectIcon={findIconByName(selectedTopic)}
          homeEndPoint={homeEndPoint}
          type='hidden'
        />
        <ThemeSwitcher />
      </div>
    </header>
  );
};

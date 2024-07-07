import { ChangeEvent } from "react";
import "./subject.css";

interface SubjectProps {
  subjectTitle: string;
  subjectIcon?: string;
  index?: any;
  type?: "button" | "radio" | "hidden" | "";
  homeEndPoint?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Subject: React.FC<SubjectProps> = ({
  subjectTitle,
  subjectIcon,
  index,
  homeEndPoint,
  onChange,
  type,
}) => {
  const alphaNumIndex = String.fromCharCode(65 + index);
  return (
    <label
      className='header-small subject-container'
      htmlFor={`option${alphaNumIndex}`}
      autoFocus={index == 0}>
      <div className={`bg-${subjectTitle} subject-container_image`}>
        {subjectTitle !== "" && (
          <img
            src={`${homeEndPoint}src/${subjectIcon}`}
            alt={`${subjectTitle} icon`}
          />
        )}
      </div>

      <input
        type={type}
        name='option'
        id={`option${alphaNumIndex}`}
        value={subjectTitle}
        onChange={onChange}
      />
      {subjectTitle}
    </label>
  );
};

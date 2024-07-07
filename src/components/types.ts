// import quizzes from "../../data.json"

export interface Question {
        question: string;
        options: string[];
        answer: string;
}
export interface Quiz {
    title: string;
    icon: string;
    questions: Question[];
  }

  export interface Data {
    quizzes: Quiz[];
  }

  export interface SubjectsOnly {
    title: string;
    icon: string;
  }
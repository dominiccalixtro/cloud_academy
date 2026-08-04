export interface Question {
  id: string;
  question: string;
  options: string[];
  answer: number;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}
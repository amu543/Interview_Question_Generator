export interface Question {
  text: string;
  keyword: string;
}

export interface QuestionScore {
  questionIndex: number;
  score: number;
  answer: string;
  feedback: string;
}

export interface PerformanceLevel {
  level: string;
  color: string;
  bgColor: string;
}

export interface ScoreResult {
  score: number;
  feedback: string;
}
import { Question } from '../types';

// Generate interview questions based on keywords
export const generateQuestions = (keywords: string[]): Question[] => {
  const questionTemplates = [
    "Can you tell us about your experience with {keyword}?",
    "How have you used {keyword} in your previous roles?",
    "What projects have you worked on involving {keyword}?",
    "Describe a challenging situation where you had to use {keyword}.",
    "How would you rate your proficiency in {keyword} and why?",
    "Can you walk us through a specific example of using {keyword}?",
    "What do you find most interesting about working with {keyword}?",
    "How do you stay updated with the latest developments in {keyword}?"
  ];

  return keywords.map((keyword, index) => ({
    text: questionTemplates[index % questionTemplates.length].replace('{keyword}', keyword),
    keyword
  }));
};

// Download questions as text file
export const downloadQuestions = (questions: Question[]) => {
  const content = questions.map((q, i) => `${i + 1}. ${q.text}`).join('\n\n');
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'interview-questions.txt';
  a.click();
  URL.revokeObjectURL(url);
};
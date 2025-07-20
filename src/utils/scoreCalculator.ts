import { ScoreResult, PerformanceLevel } from '../types';

// Calculate score based on answer quality
export const calculateScore = (answer: string, keyword: string): ScoreResult => {
  const answerLower = answer.toLowerCase();
  const keywordLower = keyword.toLowerCase();
  let score = 0;
  let feedback = '';

  // Check answer length (minimum effort)
  if (answer.length < 20) {
    score = 1;
    feedback = 'Your answer is too brief. Try to provide more detailed examples and explanations.';
  } else if (answer.length < 100) {
    score = 2;
    feedback = 'Good start! Consider adding more specific examples and quantifiable results.';
  } else {
    score = 3;
  }

  // Check if keyword is mentioned
  if (answerLower.includes(keywordLower)) {
    score += 1;
  }

  // Check for STAR method indicators
  const starIndicators = ['situation', 'task', 'action', 'result', 'challenge', 'problem', 'solution', 'outcome', 'achieved', 'improved', 'increased', 'decreased', 'led', 'managed', 'developed', 'implemented'];
  const starCount = starIndicators.filter(indicator => answerLower.includes(indicator)).length;
  
  if (starCount >= 3) {
    score += 1;
  }

  // Check for specific examples
  const exampleIndicators = ['project', 'example', 'instance', 'time when', 'experience', 'worked on', 'responsible for'];
  const hasExamples = exampleIndicators.some(indicator => answerLower.includes(indicator));
  
  if (hasExamples) {
    score += 1;
  }

  // Generate feedback based on score
  if (score >= 5) {
    feedback = 'Excellent answer! You provided specific examples, mentioned the key skill, and structured your response well.';
  } else if (score >= 4) {
    feedback = 'Great answer! You covered the key points well. Consider adding more quantifiable results.';
  } else if (score >= 3) {
    feedback = 'Good answer! Try to include more specific examples and use the STAR method for better structure.';
  } else if (!feedback) {
    feedback = 'Your answer needs improvement. Include specific examples, mention the key skill, and provide more detail.';
  }

  return { score: Math.min(score, 5), feedback };
};

// Get performance level based on percentage
export const getPerformanceLevel = (percentage: number): PerformanceLevel => {
  if (percentage >= 90) return { level: 'Excellent', color: 'text-green-600', bgColor: 'bg-green-100' };
  if (percentage >= 80) return { level: 'Very Good', color: 'text-blue-600', bgColor: 'bg-blue-100' };
  if (percentage >= 70) return { level: 'Good', color: 'text-yellow-600', bgColor: 'bg-yellow-100' };
  if (percentage >= 60) return { level: 'Fair', color: 'text-orange-600', bgColor: 'bg-orange-100' };
  return { level: 'Needs Improvement', color: 'text-red-600', bgColor: 'bg-red-100' };
};
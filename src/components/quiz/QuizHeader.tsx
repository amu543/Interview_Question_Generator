import React from 'react';
import { Play, Clock } from 'lucide-react';

interface QuizHeaderProps {
  currentQuestionIndex: number;
  totalQuestions: number;
  onExit: () => void;
}

const QuizHeader: React.FC<QuizHeaderProps> = ({ 
  currentQuestionIndex, 
  totalQuestions, 
  onExit 
}) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        <Play className="text-blue-600" />
        Interview Practice
      </h1>
      <button
        onClick={onExit}
        className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
      >
        Exit Quiz
      </button>
    </div>
  );
};

export default QuizHeader;
import React from 'react';
import { Clock } from 'lucide-react';

interface QuizProgressProps {
  currentQuestionIndex: number;
  totalQuestions: number;
}

const QuizProgress: React.FC<QuizProgressProps> = ({ 
  currentQuestionIndex, 
  totalQuestions 
}) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium text-gray-600 flex items-center gap-2">
          <Clock size={16} />
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </span>
        <div className="flex gap-2">
          {Array.from({ length: totalQuestions }, (_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index < currentQuestionIndex 
                  ? 'bg-green-500' 
                  : index === currentQuestionIndex 
                  ? 'bg-blue-600' 
                  : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizProgress;
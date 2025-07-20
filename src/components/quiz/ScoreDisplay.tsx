import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { QuestionScore } from '../../types';

interface ScoreDisplayProps {
  scoreData: QuestionScore;
  onNext: () => void;
  isLastQuestion: boolean;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ 
  scoreData, 
  onNext, 
  isLastQuestion 
}) => {
  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-600 p-6 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-green-800">Your Score</h3>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={20}
                  className={`${
                    star <= scoreData.score
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  } transition-all duration-300`}
                />
              ))}
            </div>
            <span className="text-lg font-bold text-gray-800">
              {scoreData.score}/5
            </span>
          </div>
        </div>
        <p className="text-green-700 mb-4">
          {scoreData.feedback}
        </p>
        
        <div className="bg-white rounded-lg p-4">
          <h4 className="font-medium text-gray-800 mb-2">Tips for improvement:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Use the STAR method (Situation, Task, Action, Result)</li>
            <li>• Include specific examples and quantifiable results</li>
            <li>• Mention the key skill/technology directly</li>
            <li>• Aim for 100-200 words for comprehensive answers</li>
          </ul>
        </div>
      </div>
      
      <button
        onClick={onNext}
        className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
      >
        {isLastQuestion ? 'View Results' : 'Next Question'}
        <ArrowRight size={20} />
      </button>
    </div>
  );
};

export default ScoreDisplay;
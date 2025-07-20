import React from 'react';
import { Star } from 'lucide-react';
import { QuestionScore, Question } from '../../types';

interface QuestionBreakdownProps {
  scores: QuestionScore[];
  questions: Question[];
}

const QuestionBreakdown: React.FC<QuestionBreakdownProps> = ({ scores, questions }) => {
  return (
    <div className="space-y-4 mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Question Breakdown</h2>
      {scores.map((scoreData, index) => (
        <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-200">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <p className="font-medium text-gray-800 mb-2">
                Q{scoreData.questionIndex + 1}: {questions[scoreData.questionIndex].text}
              </p>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      className={`${
                        star <= scoreData.score
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-600">
                  {scoreData.score}/5
                </span>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 mb-3">
            <p className="text-sm text-gray-700 font-medium mb-1">Your Answer:</p>
            <p className="text-sm text-gray-600">{scoreData.answer}</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-3">
            <p className="text-sm text-blue-800">{scoreData.feedback}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionBreakdown;
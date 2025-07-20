import React from 'react';
import { MessageCircle, Target, Lightbulb } from 'lucide-react';
import { Question } from '../../types';

interface QuestionCardProps {
  question: Question;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border-2 border-blue-200 p-8 rounded-3xl mb-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-200/30 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-200/30 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">Interview Question</span>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-6 leading-relaxed">
          {question.text}
        </h2>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              <Target className="w-4 h-4" />
              {question.keyword}
            </span>
          </div>
          
          <div className="flex items-center gap-2 text-purple-600">
            <Lightbulb className="w-5 h-5" />
            <span className="text-sm font-medium">Use STAR method</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
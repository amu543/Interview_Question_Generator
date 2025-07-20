import React from 'react';
import { Download, Play, MessageCircle, Star, ArrowRight } from 'lucide-react';
import { Question } from '../types';
import { downloadQuestions } from '../utils/questionGenerator';

interface QuestionsListProps {
  questions: Question[];
  onStartQuiz: () => void;
}

const QuestionsList: React.FC<QuestionsListProps> = ({ questions, onStartQuiz }) => {
  if (questions.length === 0) return null;

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-purple-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-purple-100 to-transparent rounded-full -translate-y-20 -translate-x-20"></div>
      
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl shadow-lg">
            <MessageCircle className="text-white w-6 h-6" />
          </div>
          Interview Questions
        </h2>
        <div className="flex gap-4">
          <button
            onClick={() => downloadQuestions(questions)}
            className="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-2xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
          >
            <Download size={20} />
            Download
          </button>
          <button
            onClick={onStartQuiz}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 font-bold flex items-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Play size={20} className="relative z-10" />
            <span className="relative z-10">Start Practice Quiz</span>
            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
      
      <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Star className="w-5 h-5 text-purple-600" />
            <span className="text-purple-700 font-semibold">{questions.length} Personalized Questions Generated</span>
          </div>
          <div className="text-purple-600 text-sm font-medium">
            Ready for practice!
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        {questions.map((question, index) => (
          <div
            key={index}
            className="group border-2 border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-purple-300 bg-gradient-to-r from-white to-purple-50/30 relative overflow-hidden"
          >
            {/* Question number badge */}
            <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
              {index + 1}
            </div>
            
            <div className="ml-12">
              <p className="text-gray-800 font-semibold text-lg mb-4 leading-relaxed group-hover:text-purple-800 transition-colors duration-300">
                {question.text}
              </p>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold border border-purple-200 shadow-sm">
                  <Star className="w-4 h-4" />
                  {question.keyword}
                </span>
                <ArrowRight className="w-5 h-5 text-purple-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
        <div className="flex items-center gap-3 mb-3">
          <Play className="w-5 h-5 text-blue-600" />
          <span className="text-blue-800 font-semibold">Pro Tip:</span>
        </div>
        <p className="text-blue-700 text-sm leading-relaxed">
          Use the <strong>STAR method</strong> (Situation, Task, Action, Result) when practicing your answers. 
          Our AI scoring system will evaluate your responses and provide detailed feedback to help you improve!
        </p>
      </div>
    </div>
  );
};

export default QuestionsList;
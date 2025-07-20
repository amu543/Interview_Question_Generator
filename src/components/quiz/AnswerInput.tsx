import React from 'react';
import { Mic, Award, Zap, Clock } from 'lucide-react';

interface AnswerInputProps {
  answer: string;
  setAnswer: (answer: string) => void;
  onSubmit: () => void;
  isRecording: boolean;
  onToggleRecording: () => void;
}

const AnswerInput: React.FC<AnswerInputProps> = ({
  answer,
  setAnswer,
  onSubmit,
  isRecording,
  onToggleRecording
}) => {
  return (
    <div className="space-y-6">
      <div className="relative group">
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="✨ Type your answer here... Use the STAR method (Situation, Task, Action, Result) for best results."
          className="w-full h-48 p-6 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 resize-none transition-all duration-300 text-gray-700 placeholder-gray-400 bg-gradient-to-br from-white to-blue-50/30 shadow-lg"
        />
        
        {/* Character count and recording button */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
              <Zap className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-gray-600">{answer.length} chars</span>
            </div>
            {answer.length >= 100 && (
              <div className="flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-green-700">Good length!</span>
              </div>
            )}
          </div>
          
          <button
            onClick={onToggleRecording}
            className={`p-3 rounded-full transition-all duration-300 shadow-lg ${
              isRecording 
                ? 'bg-red-500 text-white animate-pulse shadow-red-200' 
                : 'bg-white text-gray-600 hover:bg-gray-50 hover:shadow-xl'
            }`}
          >
            <Mic size={18} />
          </button>
        </div>
      </div>
      
      {/* Tips section */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-4">
        <div className="flex items-center gap-2 mb-2">
          <Clock className="w-4 h-4 text-yellow-600" />
          <span className="text-yellow-800 font-semibold text-sm">Quick Tips:</span>
        </div>
        <ul className="text-yellow-700 text-sm space-y-1">
          <li>• <strong>Situation:</strong> Set the context</li>
          <li>• <strong>Task:</strong> Describe your responsibility</li>
          <li>• <strong>Action:</strong> Explain what you did</li>
          <li>• <strong>Result:</strong> Share the outcome</li>
        </ul>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-500 flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${answer.length >= 100 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
            Aim for 100+ characters for detailed answers
          </div>
        </div>
        <button
          onClick={onSubmit}
          disabled={answer.trim().length < 10}
          className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-bold disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed flex items-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105 disabled:transform-none disabled:shadow-lg"
        >
          <Award size={20} />
          <span>Submit Answer</span>
          {!answer.trim() && <span className="text-xs opacity-75">(min 10 chars)</span>}
        </button>
      </div>
    </div>
  );
};

export default AnswerInput;
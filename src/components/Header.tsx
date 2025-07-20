import React from 'react';
import { Brain, Sparkles, Target } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="text-center mb-12 relative">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-20 right-1/3 w-16 h-16 bg-purple-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-5 right-1/4 w-12 h-12 bg-teal-200 rounded-full opacity-25 animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 rounded-2xl mb-6 shadow-2xl transform hover:scale-110 transition-all duration-500 hover:rotate-3">
          <Brain className="w-10 h-10 text-white animate-pulse" />
          <Sparkles className="w-4 h-4 text-yellow-300 absolute -top-1 -right-1 animate-ping" />
        </div>
        
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-6 leading-tight">
          AI Interview Coach
        </h1>
        
        <div className="flex items-center justify-center gap-2 mb-6">
          <Target className="w-5 h-5 text-blue-500" />
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Powered by Advanced AI</span>
          <Target className="w-5 h-5 text-blue-500" />
        </div>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Generate <span className="font-semibold text-blue-600">personalized interview questions</span>, 
          practice with our <span className="font-semibold text-purple-600">interactive quiz mode</span>, 
          and get <span className="font-semibold text-teal-600">AI-powered feedback</span> to ace your next interview!
        </p>
        
        <div className="flex items-center justify-center gap-8 mt-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-2 mx-auto">
              <span className="text-blue-600 font-bold text-lg">1</span>
            </div>
            <span className="text-sm text-gray-500">Upload Content</span>
          </div>
          <div className="w-8 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300"></div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-purple-200 rounded-full flex items-center justify-center mb-2 mx-auto">
              <span className="text-purple-600 font-bold text-lg">2</span>
            </div>
            <span className="text-sm text-gray-500">Generate Questions</span>
          </div>
          <div className="w-8 h-0.5 bg-gradient-to-r from-purple-300 to-teal-300"></div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-100 to-teal-200 rounded-full flex items-center justify-center mb-2 mx-auto">
              <span className="text-teal-600 font-bold text-lg">3</span>
            </div>
            <span className="text-sm text-gray-500">Practice & Score</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
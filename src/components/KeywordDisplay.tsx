import React from 'react';
import { CheckCircle, Sparkles, TrendingUp } from 'lucide-react';

interface KeywordDisplayProps {
  keywords: string[];
}

const KeywordDisplay: React.FC<KeywordDisplayProps> = ({ keywords }) => {
  if (keywords.length === 0) return null;

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-green-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-100 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
      
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg">
            <CheckCircle className="text-white w-6 h-6" />
          </div>
          Matching Keywords
        </h2>
        <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
          <TrendingUp className="w-4 h-4 text-green-600" />
          <span className="text-green-700 font-bold text-lg">{keywords.length}</span>
          <span className="text-green-600 text-sm">matches</span>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-4">
        {keywords.map((keyword, index) => (
          <div
            key={index}
            className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-2xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 cursor-pointer"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 opacity-80" />
              <span>{keyword}</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
        <p className="text-green-700 text-sm flex items-center gap-2">
          <CheckCircle className="w-4 h-4" />
          <span className="font-medium">Great match!</span> These keywords appear in both your resume and the job description.
        </p>
      </div>
    </div>
  );
};

export default KeywordDisplay;
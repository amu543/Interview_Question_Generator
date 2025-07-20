import React from 'react';
import { Trophy } from 'lucide-react';

const ResultsHeader: React.FC = () => {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
        <Trophy className="w-10 h-10 text-white" />
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Quiz Complete!</h1>
      <p className="text-gray-600">Here's how you performed</p>
    </div>
  );
};

export default ResultsHeader;
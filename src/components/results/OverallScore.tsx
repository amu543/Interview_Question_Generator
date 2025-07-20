import React from 'react';
import { PerformanceLevel } from '../../types';

interface OverallScoreProps {
  percentage: number;
  performance: PerformanceLevel;
  totalScore: number;
  totalPossibleScore: number;
  averageScore: number;
}

const OverallScore: React.FC<OverallScoreProps> = ({
  percentage,
  performance,
  totalScore,
  totalPossibleScore,
  averageScore
}) => {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-6">
      <div className="text-center">
        <div className="text-4xl font-bold text-gray-800 mb-2">{percentage}%</div>
        <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${performance.bgColor} ${performance.color}`}>
          {performance.level}
        </div>
        <div className="mt-4 text-gray-600">
          {totalScore} out of {totalPossibleScore} points • Average: {averageScore.toFixed(1)}/5
        </div>
      </div>
    </div>
  );
};

export default OverallScore;
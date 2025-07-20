import React from 'react';
import { RotateCcw } from 'lucide-react';

interface ResultsActionsProps {
  onRestart: () => void;
  onExit: () => void;
}

const ResultsActions: React.FC<ResultsActionsProps> = ({ onRestart, onExit }) => {
  return (
    <div className="flex gap-4 justify-center">
      <button
        onClick={onRestart}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2"
      >
        <RotateCcw size={20} />
        Retake Quiz
      </button>
      <button
        onClick={onExit}
        className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
      >
        Back to Generator
      </button>
    </div>
  );
};

export default ResultsActions;
import React from 'react';
import { Brain } from 'lucide-react';

interface EmptyStateProps {
  jobDescription: string;
  resume: string;
  hasMatchingKeywords: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({ jobDescription, resume, hasMatchingKeywords }) => {
  if (!jobDescription || !resume) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-12 text-center hover:shadow-xl transition-shadow duration-300">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full mb-4">
          <Brain className="w-10 h-10 text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-600 mb-2">
          Ready to Generate Questions?
        </h3>
        <p className="text-gray-500">
          Fill in both the job description and your resume to get started with personalized interview questions.
        </p>
      </div>
    );
  }

  if (!hasMatchingKeywords) {
    return (
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-8 text-center">
        <h3 className="text-xl font-semibold text-yellow-800 mb-2">
          No Matching Keywords Found
        </h3>
        <p className="text-yellow-700">
          Try adding more specific skills or technologies to your resume that match the job description.
        </p>
      </div>
    );
  }

  return null;
};

export default EmptyState;
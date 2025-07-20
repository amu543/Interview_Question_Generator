import React from 'react';
import { Target, FileText, Upload, Zap } from 'lucide-react';

interface InputSectionProps {
  jobDescription: string;
  setJobDescription: (value: string) => void;
  resume: string;
  setResume: (value: string) => void;
}

const InputSection: React.FC<InputSectionProps> = ({
  jobDescription,
  setJobDescription,
  resume,
  setResume
}) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      <div className="group bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100 hover:border-blue-300">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
              <Target className="text-white w-6 h-6" />
            </div>
            Job Description
          </h2>
          <Upload className="w-5 h-5 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="relative">
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="✨ Paste the job description here and watch the magic happen..."
            className="w-full h-72 p-6 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 resize-none transition-all duration-300 text-gray-700 placeholder-gray-400 bg-gradient-to-br from-blue-50/30 to-white"
          />
          <div className="absolute bottom-4 right-4 flex items-center gap-2">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-xs text-blue-500 font-medium">{jobDescription.length} chars</span>
          </div>
        </div>
      </div>

      <div className="group bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-teal-100 hover:border-teal-300">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
              <FileText className="text-white w-6 h-6" />
            </div>
            Your Resume
          </h2>
          <Upload className="w-5 h-5 text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="relative">
          <textarea
            value={resume}
            onChange={(e) => setResume(e.target.value)}
            placeholder="🚀 Paste your resume content here to unlock personalized questions..."
            className="w-full h-72 p-6 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 resize-none transition-all duration-300 text-gray-700 placeholder-gray-400 bg-gradient-to-br from-teal-50/30 to-white"
          />
          <div className="absolute bottom-4 right-4 flex items-center gap-2">
            <Zap className="w-4 h-4 text-teal-400" />
            <span className="text-xs text-teal-500 font-medium">{resume.length} chars</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputSection;
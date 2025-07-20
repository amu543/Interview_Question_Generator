import React, { useState, useMemo } from 'react';
import { Question, QuestionScore } from './types';
import { findMatchingKeywords } from './utils/keywordExtractor';
import { generateQuestions } from './utils/questionGenerator';
import { calculateScore, getPerformanceLevel } from './utils/scoreCalculator';

// Components
import Header from './components/Header';
import InputSection from './components/InputSection';
import KeywordDisplay from './components/KeywordDisplay';
import QuestionsList from './components/QuestionsList';
import EmptyState from './components/EmptyState';

// Quiz Components
import QuizHeader from './components/quiz/QuizHeader';
import QuizProgress from './components/quiz/QuizProgress';
import QuestionCard from './components/quiz/QuestionCard';
import AnswerInput from './components/quiz/AnswerInput';
import ScoreDisplay from './components/quiz/ScoreDisplay';

// Results Components
import ResultsHeader from './components/results/ResultsHeader';
import OverallScore from './components/results/OverallScore';
import QuestionBreakdown from './components/results/QuestionBreakdown';
import ResultsActions from './components/results/ResultsActions';

function App() {
  const [jobDescription, setJobDescription] = useState('');
  const [resume, setResume] = useState('');
  const [quizMode, setQuizMode] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [scores, setScores] = useState<QuestionScore[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  // Find matching keywords between job description and resume
  const matchingKeywords = useMemo(() => {
    return findMatchingKeywords(jobDescription, resume);
  }, [jobDescription, resume]);

  // Generate interview questions
  const questions: Question[] = useMemo(() => {
    return generateQuestions(matchingKeywords);
  }, [matchingKeywords]);

  const startQuiz = () => {
    setQuizMode(true);
    setCurrentQuestionIndex(0);
    setShowAnswer(false);
    setCurrentAnswer('');
    setScores([]);
    setShowResults(false);
  };

  const submitAnswer = () => {
    const { score, feedback } = calculateScore(currentAnswer, questions[currentQuestionIndex].keyword);
    const newScore: QuestionScore = {
      questionIndex: currentQuestionIndex,
      score,
      answer: currentAnswer,
      feedback
    };
    
    setScores([...scores, newScore]);
    setShowAnswer(true);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowAnswer(false);
      setCurrentAnswer('');
    } else {
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setShowAnswer(false);
    setCurrentAnswer('');
    setScores([]);
    setShowResults(false);
  };

  const exitQuiz = () => {
    setQuizMode(false);
    setShowResults(false);
    setScores([]);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // In a real app, you'd implement speech-to-text here
  };

  // Calculate overall performance
  const averageScore = scores.length > 0 ? scores.reduce((sum, s) => sum + s.score, 0) / scores.length : 0;
  const totalPossibleScore = scores.length * 5;
  const totalScore = scores.reduce((sum, s) => sum + s.score, 0);
  const percentage = scores.length > 0 ? Math.round((totalScore / totalPossibleScore) * 100) : 0;
  const performance = getPerformanceLevel(percentage);

  // Results screen
  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 via-pink-50 to-teal-50 p-6 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-purple-200 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full opacity-15 animate-bounce"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 mb-8 border border-white/50">
            <ResultsHeader />
            <OverallScore
              percentage={percentage}
              performance={performance}
              totalScore={totalScore}
              totalPossibleScore={totalPossibleScore}
              averageScore={averageScore}
            />
            <QuestionBreakdown scores={scores} questions={questions} />
            <ResultsActions onRestart={restartQuiz} onExit={exitQuiz} />
          </div>
        </div>
      </div>
    );
  }

  // Quiz mode
  if (quizMode && questions.length > 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 via-pink-50 to-teal-50 p-6 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-purple-200 rounded-full opacity-15 animate-bounce"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-white/50">
            <QuizHeader
              currentQuestionIndex={currentQuestionIndex}
              totalQuestions={questions.length}
              onExit={exitQuiz}
            />
            
            <QuizProgress
              currentQuestionIndex={currentQuestionIndex}
              totalQuestions={questions.length}
            />
            
            <QuestionCard question={questions[currentQuestionIndex]} />
            
            {!showAnswer ? (
              <AnswerInput
                answer={currentAnswer}
                setAnswer={setCurrentAnswer}
                onSubmit={submitAnswer}
                isRecording={isRecording}
                onToggleRecording={toggleRecording}
              />
            ) : (
              <ScoreDisplay
                scoreData={scores[scores.length - 1]}
                onNext={nextQuestion}
                isLastQuestion={currentQuestionIndex >= questions.length - 1}
              />
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 via-pink-50 to-teal-50 p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-200 rounded-full opacity-15 animate-bounce"></div>
        <div className="absolute top-1/2 left-3/4 w-64 h-64 bg-teal-200 rounded-full opacity-10 animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <Header />
        
        <InputSection
          jobDescription={jobDescription}
          setJobDescription={setJobDescription}
          resume={resume}
          setResume={setResume}
        />

        {matchingKeywords.length > 0 && (
          <div className="space-y-6">
            <KeywordDisplay keywords={matchingKeywords} />
            <QuestionsList questions={questions} onStartQuiz={startQuiz} />
          </div>
        )}

        <EmptyState
          jobDescription={jobDescription}
          resume={resume}
          hasMatchingKeywords={matchingKeywords.length > 0}
        />
      </div>
    </div>
  );
}

export default App;
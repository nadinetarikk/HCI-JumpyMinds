import image_74becc2693a7031d3b3fcf01ad634fc3236430a1 from 'figma:asset/74becc2693a7031d3b3fcf01ad634fc3236430a1.png';
import image_b6babe35940e05d27b0ad021239febc9489ab47f from 'figma:asset/b6babe35940e05d27b0ad021239febc9489ab47f.png';
import image_93955451c7d6aeed0950956639544d3f5889170e from 'figma:asset/93955451c7d6aeed0950956639544d3f5889170e.png';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Trophy, Heart, BookOpen, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import logoImage from 'figma:asset/3622f114575d6e32261a4828a0673423e1f4e7e2.png';
import brainMascotImage from 'figma:asset/e1e39d682bcad6a3c687f8afc8b31c266870e0eb.png';
import celebrationBrainImage from 'figma:asset/23a10d459887ac372b51def1d3bd39c64a0a6721.png';
import brainTrophyImage from 'figma:asset/34f657abe6e907e9948aa54ca520bf80cb1dbc45.png';
import mathBrainImage from 'figma:asset/979026e716e7b7592e6b105e30b4b7e536a53060.png';
import scienceBrainImage from 'figma:asset/e9834cfdd41b400eefe9df8efa57faa27e87aa9f.png';
import readingBrainImage from 'figma:asset/86e49e03d83aefaa7dd8759168dcdf639817c469.png';

export default function LessonPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [completed, setCompleted] = useState(false);

  const lessons: any = {
    '1': {
      title: 'Math: Fractions Fun',
      icon: '🔢',
      image: mathBrainImage,
      color: 'bg-purple-500',
      questions: [
        {
          question: 'What is 1/2 + 1/4?',
          options: ['1/6', '2/6', '3/4', '1/3'],
          correct: 2,
          explanation: 'Great job! 1/2 = 2/4, so 2/4 + 1/4 = 3/4',
        },
        {
          question: 'Which fraction is bigger: 1/3 or 1/4?',
          options: ['1/3', '1/4', 'They are equal', 'Cannot compare'],
          correct: 0,
          explanation: 'Perfect! 1/3 is bigger because the denominator is smaller.',
        },
        {
          question: 'What is 2/3 of 12?',
          options: ['6', '8', '9', '10'],
          correct: 1,
          explanation: 'Excellent! 12 ÷ 3 = 4, and 4 × 2 = 8',
        },
      ],
    },
    '2': {
      title: 'Science: Plant Life',
      icon: '🌱',
      image: scienceBrainImage,
      color: 'bg-green-500',
      questions: [
        {
          question: 'What do plants need to make food?',
          options: ['Water only', 'Sunlight, water, and carbon dioxide', 'Soil only', 'Air only'],
          correct: 1,
          explanation: 'Perfect! Plants use photosynthesis with sunlight, water, and CO2.',
        },
        {
          question: 'Which part of the plant absorbs water?',
          options: ['Leaves', 'Flowers', 'Roots', 'Stem'],
          correct: 2,
          explanation: 'Awesome! Roots absorb water and nutrients from the soil.',
        },
      ],
    },
    '3': {
      title: 'Reading: Adventure Stories',
      icon: '📚',
      image: readingBrainImage,
      color: 'bg-blue-500',
      questions: [
        {
          question: 'What is the main character called in a story?',
          options: ['Antagonist', 'Protagonist', 'Narrator', 'Setting'],
          correct: 1,
          explanation: 'Great! The protagonist is the main character of the story.',
        },
        {
          question: 'What does "setting" mean in a story?',
          options: ['The characters', 'When and where the story happens', 'The ending', 'The title'],
          correct: 1,
          explanation: 'Perfect! Setting tells us when and where the story takes place.',
        },
      ],
    },
  };

  const lesson = lessons[id || '1'] || lessons['1'];
  const questions = lesson.questions;
  const totalQuestions = questions.length;

  const encouragementMessages = [
    'Amazing work!',
    'You\'re doing great!',
    'Keep it up!',
    'Fantastic!',
    'You\'re a star!',
  ];

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    const isCorrect = answerIndex === questions[currentQuestion].correct;
    
    if (isCorrect) {
      setScore(score + 1);
    }
    
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setCompleted(true);
    }
  };

  const handleFinish = () => {
    navigate('/child-dashboard');
  };

  if (completed) {
    const percentage = Math.round((score / totalQuestions) * 100);
    const earnedPoints = score * 50;

    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-teal-50 flex items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white rounded-3xl p-12 shadow-xl text-center">
          {/* Celebration Animation */}
          <div className="mb-4 animate-bounce flex justify-center">
            <img src={image_74becc2693a7031d3b3fcf01ad634fc3236430a1} alt="Achievement" className="w-64 h-64 object-contain" />
          </div>

          <h1 className="text-3xl sm:text-4xl mb-4 font-bold">
            {percentage >= 80
              ? 'Outstanding Work!'
              : percentage >= 60
              ? 'Great Job!'
              : 'Nice Try!'}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 font-bold">
            {encouragementMessages[Math.floor(Math.random() * encouragementMessages.length)]}
          </p>

          {/* Score Display */}
          <div className="bg-gradient-to-r from-orange-100 to-teal-100 rounded-2xl p-8 mb-8">
            <div className="text-6xl mb-4">{percentage}%</div>
            <p className="text-xl mb-2">
              You got {score} out of {totalQuestions} questions correct!
            </p>
            <div className="flex items-center justify-center gap-2 text-orange-600">
              <Trophy className="w-6 h-6" />
              <span className="text-2xl">+{earnedPoints} points</span>
            </div>
          </div>

          {/* Motivational Message */}
          <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6 mb-8">
            <p className="text-lg text-purple-900">
              {percentage >= 80
                ? 'You\'re a superstar! Your hard work is paying off!'
                : percentage >= 60
                ? 'You\'re making great progress! Keep learning and growing!'
                : 'Every mistake is a chance to learn! You\'re doing amazing by trying!'}
            </p>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-orange-50 rounded-xl p-4">
              <div className="text-3xl mb-2">🔥</div>
              <p className="text-sm">Streak +1</p>
            </div>
            <div className="bg-teal-50 rounded-xl p-4">
              <div className="text-3xl mb-2">⭐</div>
              <p className="text-sm">New Badge</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-4">
              <div className="text-3xl mb-2">🎯</div>
              <p className="text-sm">Goal Met</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => window.location.reload()}
              className="flex-1 bg-gray-200 hover:bg-gray-300 py-4 rounded-xl transition-colors"
            >
              Try Again
            </button>
            <button
              onClick={handleFinish}
              className="flex-1 bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white py-4 rounded-xl transition-colors"
            >
              Continue Learning
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const isCorrect = selectedAnswer === currentQ.correct;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-teal-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoImage} alt="Jumpy Minds" className="h-12" />
          </Link>
          <Link to="/child-dashboard" className="flex items-center gap-2 text-orange-500 hover:text-orange-600">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Dashboard</span>
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Lesson Header */}
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm border border-gray-100">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center shrink-0">
              <img src={lesson.image} alt="" className="w-full h-full object-contain" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl mb-1">{lesson.title}</h1>
              <div className="flex items-center gap-4 text-gray-600">
                <span>Question {currentQuestion + 1} of {totalQuestions}</span>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${lesson.color} transition-all`}
                    style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl p-8 mb-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl">{currentQ.question}</h2>
            <div className="flex items-center gap-4 shrink-0">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                <Heart className="w-5 h-5 text-red-500 fill-red-500" />
              </div>
              <div className="flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full">
                <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
                <span className="text-orange-600">{score * 50} pts</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {currentQ.options.map((option: string, index: number) => (
              <button
                key={index}
                onClick={() => !showFeedback && handleAnswer(index)}
                disabled={showFeedback}
                className={`w-full text-left p-6 rounded-xl border-2 transition-all ${
                  showFeedback
                    ? index === currentQ.correct
                      ? 'border-green-500 bg-green-50'
                      : index === selectedAnswer
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-200 bg-gray-50'
                    : selectedAnswer === index
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                      showFeedback && index === currentQ.correct
                        ? 'bg-green-500 text-white'
                        : showFeedback && index === selectedAnswer
                        ? 'bg-red-500 text-white'
                        : selectedAnswer === index
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {showFeedback && index === currentQ.correct ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      String.fromCharCode(65 + index)
                    )}
                  </div>
                  <span className="text-lg">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Feedback */}
        {showFeedback && (
          <div
            className={`rounded-2xl p-6 mb-6 border-2 ${
              isCorrect
                ? 'bg-green-50 border-green-300'
                : 'bg-orange-50 border-orange-300'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">{isCorrect ? <img src={image_b6babe35940e05d27b0ad021239febc9489ab47f} alt="Celebration brain" className="w-32 h-32 object-contain" /> : <img src={image_93955451c7d6aeed0950956639544d3f5889170e} alt="Brain mascot" className="w-32 h-32 object-contain" />}</div>
              <div className="flex-1 mx-[0px] my-[20px]">
                <h3 className="text-xl mb-2 text-center font-bold text-[24px]">
                  {isCorrect ? 'Awesome! That\'s correct!' : 'Not quite, but that\'s okay!'}
                </h3>
                <p className="text-gray-700 text-center text-[20px]">{currentQ.explanation}</p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        {showFeedback && (
          <div className="flex justify-end">
            <button
              onClick={handleNext}
              className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white px-12 py-4 rounded-xl text-lg transition-colors"
            >
              {currentQuestion < totalQuestions - 1 ? 'Next Question →' : 'Finish Lesson'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

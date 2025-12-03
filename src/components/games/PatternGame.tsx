import { useState, useEffect } from 'react';
import { Star, Trophy, Sparkles } from 'lucide-react';

interface PatternGameProps {
  onComplete: (points: number) => void;
}

export default function PatternGame({ onComplete }: PatternGameProps) {
  const [score, setScore] = useState(0);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [showEncouragement, setShowEncouragement] = useState(false);

  const patterns = [
    {
      sequence: ['🔴', '🔵', '🔴', '🔵', '🔴'],
      options: ['🔴', '🔵', '🟢', '🟡'],
      correct: 1,
      difficulty: 'Easy'
    },
    {
      sequence: ['⭐', '⭐', '🌙', '⭐', '⭐'],
      options: ['⭐', '🌙', '☀️', '🌟'],
      correct: 1,
      difficulty: 'Easy'
    },
    {
      sequence: ['🐶', '🐱', '🐶', '🐱', '🐶'],
      options: ['🐶', '🐱', '🐭', '🐰'],
      correct: 1,
      difficulty: 'Easy'
    },
    {
      sequence: ['🔺', '🔺', '🔻', '🔺', '🔺'],
      options: ['🔺', '🔻', '⬜', '🔶'],
      correct: 1,
      difficulty: 'Medium'
    },
    {
      sequence: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣'],
      options: ['5️⃣', '6️⃣', '7️⃣', '8️⃣'],
      correct: 1,
      difficulty: 'Medium'
    },
    {
      sequence: ['🌸', '🌸', '🌺', '🌸', '🌸', '🌺'],
      options: ['🌸', '🌺', '🌻', '🌷'],
      correct: 0,
      difficulty: 'Medium'
    },
    {
      sequence: ['🔵', '🔴', '🔵', '🔵', '🔴', '🔵', '🔵', '🔵'],
      options: ['🔵', '🔴', '🟢', '🟡'],
      correct: 1,
      difficulty: 'Hard'
    },
    {
      sequence: ['🍎', '🍎', '🍊', '🍊', '🍎', '🍎', '🍊'],
      options: ['🍎', '🍊', '🍋', '🍇'],
      correct: 1,
      difficulty: 'Hard'
    },
    {
      sequence: ['⬆️', '➡️', '⬇️', '⬅️', '⬆️', '➡️', '⬇️'],
      options: ['⬆️', '➡️', '⬇️', '⬅️'],
      correct: 3,
      difficulty: 'Hard'
    },
    {
      sequence: ['🌟', '⭐', '✨', '🌟', '⭐', '✨', '🌟', '⭐'],
      options: ['🌟', '⭐', '✨', '💫'],
      correct: 2,
      difficulty: 'Expert'
    }
  ];

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    const isCorrect = index === patterns[currentLevel].correct;
    
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    
    if (isCorrect) {
      const points = currentLevel < 3 ? 10 : currentLevel < 6 ? 15 : 20;
      setScore(prev => prev + points);
      setShowEncouragement(true);
      setTimeout(() => setShowEncouragement(false), 2000);
    }
    
    setTimeout(() => {
      if (currentLevel < patterns.length - 1) {
        setCurrentLevel(prev => prev + 1);
        setSelectedAnswer(null);
        setFeedback(null);
      } else {
        onComplete(score + (isCorrect ? 20 : 0));
      }
    }, 1500);
  };

  const encouragements = [
    "Pattern master!",
    "Brilliant thinking!",
    "Great job!",
    "You got it!",
    "Excellent!"
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl">
          <span className="text-pink-500">Pattern Master</span>
        </h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-pink-50 px-4 py-2 rounded-full">
            <Trophy className="w-5 h-5 text-pink-500" />
            <span className="text-pink-600">{score} points</span>
          </div>
          <div className="text-gray-600">
            Level {currentLevel + 1} / {patterns.length}
          </div>
        </div>
      </div>

      {showEncouragement && (
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 border-2 border-pink-200 rounded-xl p-4 mb-6 animate-bounce">
          <p className="text-center text-pink-700 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5" />
            {encouragements[Math.floor(Math.random() * encouragements.length)]}
          </p>
        </div>
      )}

      <div className="text-center mb-8">
        <div className="inline-block mb-4">
          <span className={`px-4 py-2 rounded-full text-sm ${
            patterns[currentLevel].difficulty === 'Easy' 
              ? 'bg-green-100 text-green-700'
              : patterns[currentLevel].difficulty === 'Medium'
              ? 'bg-yellow-100 text-yellow-700'
              : patterns[currentLevel].difficulty === 'Hard'
              ? 'bg-orange-100 text-orange-700'
              : 'bg-red-100 text-red-700'
          }`}>
            {patterns[currentLevel].difficulty}
          </span>
        </div>

        <p className="text-xl text-gray-600 mb-6">What comes next in the pattern?</p>
        
        <div className="inline-block bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 mb-8">
          <div className="flex gap-4 items-center justify-center flex-wrap">
            {patterns[currentLevel].sequence.map((item, idx) => (
              <div
                key={idx}
                className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-4xl shadow-md"
              >
                {item}
              </div>
            ))}
            <div className="w-16 h-16 bg-white border-4 border-dashed border-pink-300 rounded-lg flex items-center justify-center text-3xl">
              ?
            </div>
          </div>
        </div>

        <p className="text-gray-500 mb-6">Choose the correct answer:</p>

        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {patterns[currentLevel].options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              disabled={feedback !== null}
              className={`h-24 rounded-xl text-5xl flex items-center justify-center transition-all transform hover:scale-105 ${
                selectedAnswer === idx
                  ? feedback === 'correct'
                    ? 'bg-green-100 border-4 border-green-500'
                    : 'bg-red-100 border-4 border-red-500'
                  : 'bg-gradient-to-br from-gray-100 to-gray-200 hover:from-pink-100 hover:to-pink-200'
              } ${feedback !== null ? 'cursor-not-allowed' : ''}`}
            >
              {option}
            </button>
          ))}
        </div>

        {feedback && (
          <div className={`mt-6 py-3 rounded-xl ${
            feedback === 'correct' 
              ? 'bg-green-100 text-green-700' 
              : 'bg-red-100 text-red-700'
          }`}>
            {feedback === 'correct' ? (
              <div className="flex items-center justify-center gap-2">
                <Star className="w-6 h-6 fill-current" />
                <span className="text-xl">Correct! Great pattern recognition!</span>
              </div>
            ) : (
              <span className="text-xl">
                Not quite. The correct answer is {patterns[currentLevel].options[patterns[currentLevel].correct]}
              </span>
            )}
          </div>
        )}
      </div>

      <div className="mt-8">
        <div className="flex gap-1">
          {patterns.map((_, index) => (
            <div
              key={index}
              className={`flex-1 h-2 rounded-full ${
                index < currentLevel
                  ? 'bg-green-500'
                  : index === currentLevel
                  ? 'bg-pink-500'
                  : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

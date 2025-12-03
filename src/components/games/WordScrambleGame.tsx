import { useState, useEffect } from 'react';
import { Star, Trophy, Sparkles, RotateCcw } from 'lucide-react';

interface WordScrambleGameProps {
  onComplete: (points: number) => void;
}

export default function WordScrambleGame({ onComplete }: WordScrambleGameProps) {
  const [score, setScore] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [showEncouragement, setShowEncouragement] = useState(false);
  const [hint, setHint] = useState(false);

  const words = [
    { word: 'ELEPHANT', hint: 'A large animal with a trunk', category: 'Animals' },
    { word: 'RAINBOW', hint: 'Colorful arc in the sky', category: 'Nature' },
    { word: 'BUTTERFLY', hint: 'Insect with colorful wings', category: 'Animals' },
    { word: 'MOUNTAIN', hint: 'Very tall landform', category: 'Nature' },
    { word: 'TELESCOPE', hint: 'Used to see stars', category: 'Science' },
    { word: 'DINOSAUR', hint: 'Ancient reptile', category: 'History' },
    { word: 'CHOCOLATE', hint: 'Sweet brown treat', category: 'Food' },
    { word: 'COMPUTER', hint: 'Electronic device for typing', category: 'Technology' },
    { word: 'RAINBOW', hint: 'Appears after rain', category: 'Nature' },
    { word: 'SUBMARINE', hint: 'Underwater vehicle', category: 'Transportation' }
  ];

  const scrambleWord = (word: string) => {
    const arr = word.split('');
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
  };

  const [scrambledWords] = useState(() => 
    words.map(w => ({ ...w, scrambled: scrambleWord(w.word) }))
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const isCorrect = answer.toUpperCase() === words[currentWord].word;
    
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    
    if (isCorrect) {
      const points = hint ? 5 : 10;
      setScore(prev => prev + points);
      setShowEncouragement(true);
      setTimeout(() => setShowEncouragement(false), 2000);
    }
    
    setTimeout(() => {
      if (currentWord < words.length - 1) {
        setCurrentWord(prev => prev + 1);
        setAnswer('');
        setFeedback(null);
        setHint(false);
      } else {
        onComplete(score + (isCorrect ? (hint ? 5 : 10) : 0));
      }
    }, 1500);
  };

  const encouragements = [
    "Excellent spelling!",
    "Word wizard!",
    "Great job!",
    "You're awesome!",
    "Keep going!"
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl">
          <span className="text-green-500">Word Scramble</span>
        </h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
            <Trophy className="w-5 h-5 text-green-500" />
            <span className="text-green-600">{score} points</span>
          </div>
          <div className="text-gray-600">
            Word {currentWord + 1} / {words.length}
          </div>
        </div>
      </div>

      {showEncouragement && (
        <div className="bg-gradient-to-r from-green-50 to-teal-50 border-2 border-green-200 rounded-xl p-4 mb-6 animate-bounce">
          <p className="text-center text-green-700 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5" />
            {encouragements[Math.floor(Math.random() * encouragements.length)]}
          </p>
        </div>
      )}

      <div className="text-center mb-8">
        <div className="inline-block mb-4">
          <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm">
            {scrambledWords[currentWord].category}
          </span>
        </div>
        
        <div className="inline-block bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-12 mb-6">
          <div className="flex gap-2 justify-center mb-4">
            {scrambledWords[currentWord].scrambled.split('').map((letter, idx) => (
              <div
                key={idx}
                className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-2xl shadow-md"
              >
                {letter}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 justify-center text-gray-500">
            <RotateCcw className="w-4 h-4" />
            <span className="text-sm">Unscramble the letters</span>
          </div>
        </div>

        {!hint ? (
          <button
            onClick={() => setHint(true)}
            className="text-sm text-gray-500 hover:text-gray-700 underline"
          >
            Need a hint? (5 points instead of 10)
          </button>
        ) : (
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-3 inline-block">
            <p className="text-yellow-800">💡 {scrambledWords[currentWord].hint}</p>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Type the word"
          className="w-full px-6 py-4 text-2xl text-center border-2 border-gray-300 rounded-xl focus:border-green-500 focus:outline-none mb-4 uppercase"
          autoFocus
          disabled={feedback !== null}
        />
        
        {feedback === null ? (
          <button
            type="submit"
            disabled={!answer}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl hover:from-green-600 hover:to-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit Answer
          </button>
        ) : (
          <div className={`text-center py-4 rounded-xl ${
            feedback === 'correct' 
              ? 'bg-green-100 text-green-700' 
              : 'bg-red-100 text-red-700'
          }`}>
            {feedback === 'correct' ? (
              <div className="flex items-center justify-center gap-2">
                <Star className="w-6 h-6 fill-current" />
                <span className="text-xl">Correct! +{hint ? 5 : 10} points</span>
              </div>
            ) : (
              <span className="text-xl">
                Not quite. The word is {words[currentWord].word}
              </span>
            )}
          </div>
        )}
      </form>

      <div className="mt-8">
        <div className="flex gap-1">
          {words.map((_, index) => (
            <div
              key={index}
              className={`flex-1 h-2 rounded-full ${
                index < currentWord
                  ? 'bg-green-500'
                  : index === currentWord
                  ? 'bg-green-400'
                  : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

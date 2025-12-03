import { useState, useEffect } from 'react';
import { Star, Trophy, Sparkles } from 'lucide-react';

interface MathQuizGameProps {
  onComplete: (points: number) => void;
}

export default function MathQuizGame({ onComplete }: MathQuizGameProps) {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [showEncouragement, setShowEncouragement] = useState(false);

  const generateQuestion = (index: number) => {
    const operations = ['+', '-', '×'];
    const operation = operations[index % 3];
    
    let num1, num2, correctAnswer;
    
    if (operation === '+') {
      num1 = Math.floor(Math.random() * 50) + 1;
      num2 = Math.floor(Math.random() * 50) + 1;
      correctAnswer = num1 + num2;
    } else if (operation === '-') {
      num1 = Math.floor(Math.random() * 50) + 20;
      num2 = Math.floor(Math.random() * num1);
      correctAnswer = num1 - num2;
    } else {
      num1 = Math.floor(Math.random() * 12) + 1;
      num2 = Math.floor(Math.random() * 12) + 1;
      correctAnswer = num1 * num2;
    }
    
    return {
      question: `${num1} ${operation} ${num2}`,
      answer: correctAnswer
    };
  };

  const [questions] = useState(() => 
    Array.from({ length: 10 }, (_, i) => generateQuestion(i))
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const userAnswer = parseInt(answer);
    const isCorrect = userAnswer === questions[currentQuestion].answer;
    
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    
    if (isCorrect) {
      setScore(prev => prev + 10);
      setShowEncouragement(true);
      setTimeout(() => setShowEncouragement(false), 2000);
    }
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setAnswer('');
        setFeedback(null);
      } else {
        onComplete(score + (isCorrect ? 10 : 0));
      }
    }, 1500);
  };

  const encouragements = [
    "Awesome work!",
    "You're a math star!",
    "Great job!",
    "Fantastic!",
    "Keep it up!"
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl">
          <span className="text-blue-500">Math Challenge</span>
        </h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
            <Trophy className="w-5 h-5 text-blue-500" />
            <span className="text-blue-600">{score} points</span>
          </div>
          <div className="text-gray-600">
            Question {currentQuestion + 1} / {questions.length}
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
        <div className="inline-block bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12 mb-6">
          <p className="text-6xl text-gray-800 mb-4">{questions[currentQuestion].question}</p>
          <p className="text-2xl text-gray-600">= ?</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <input
          type="number"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Your answer"
          className="w-full px-6 py-4 text-2xl text-center border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none mb-4"
          autoFocus
          disabled={feedback !== null}
        />
        
        {feedback === null ? (
          <button
            type="submit"
            disabled={!answer}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
                <span className="text-xl">Correct! +10 points</span>
              </div>
            ) : (
              <span className="text-xl">
                Not quite. The answer is {questions[currentQuestion].answer}
              </span>
            )}
          </div>
        )}
      </form>

      <div className="mt-8">
        <div className="flex gap-1">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`flex-1 h-2 rounded-full ${
                index < currentQuestion
                  ? 'bg-green-500'
                  : index === currentQuestion
                  ? 'bg-blue-500'
                  : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

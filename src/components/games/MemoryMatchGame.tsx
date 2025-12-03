import { useState, useEffect } from 'react';
import { Trophy, Sparkles, Star } from 'lucide-react';

interface MemoryMatchGameProps {
  onComplete: (points: number) => void;
}

interface Card {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export default function MemoryMatchGame({ onComplete }: MemoryMatchGameProps) {
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [showEncouragement, setShowEncouragement] = useState(false);

  const emojis = ['🐶', '🐱', '🐼', '🦁', '🐸', '🦋', '🌸', '⭐'];

  const initializeCards = (): Card[] => {
    const duplicated = [...emojis, ...emojis];
    const shuffled = duplicated
      .map((emoji, index) => ({
        id: index,
        emoji,
        isFlipped: false,
        isMatched: false
      }))
      .sort(() => Math.random() - 0.5);
    return shuffled;
  };

  const [cards, setCards] = useState<Card[]>(initializeCards());

  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2) return;
    if (cards[id].isFlipped || cards[id].isMatched) return;
    if (flippedCards.includes(id)) return;

    const newFlippedCards = [...flippedCards, id];
    setFlippedCards(newFlippedCards);

    setCards(prev =>
      prev.map(card =>
        card.id === id ? { ...card, isFlipped: true } : card
      )
    );

    if (newFlippedCards.length === 2) {
      setMoves(prev => prev + 1);
      const [first, second] = newFlippedCards;
      const firstCard = cards.find(card => card.id === first);
      const secondCard = cards.find(card => card.id === second);

      if (firstCard && secondCard && firstCard.emoji === secondCard.emoji) {
        // Match found
        setTimeout(() => {
          setCards(prev =>
            prev.map(card =>
              card.id === first || card.id === second
                ? { ...card, isMatched: true }
                : card
            )
          );
          setScore(prev => prev + 20);
          setShowEncouragement(true);
          setTimeout(() => setShowEncouragement(false), 1500);
          setFlippedCards([]);
        }, 500);
      } else {
        // No match
        setTimeout(() => {
          setCards(prev =>
            prev.map(card =>
              card.id === first || card.id === second
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    const allMatched = cards.every(card => card.isMatched);
    if (allMatched && cards.length > 0) {
      setTimeout(() => {
        const bonus = Math.max(0, 100 - moves * 5);
        onComplete(score + bonus);
      }, 1000);
    }
  }, [cards]);

  const encouragements = [
    "Perfect match!",
    "Great memory!",
    "Awesome!",
    "You found it!",
    "Excellent!"
  ];

  const matchedPairs = cards.filter(card => card.isMatched).length / 2;
  const totalPairs = emojis.length;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl">
          <span className="text-purple-500">Memory Match</span>
        </h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full">
            <Trophy className="w-5 h-5 text-purple-500" />
            <span className="text-purple-600">{score} points</span>
          </div>
          <div className="text-gray-600">
            Moves: {moves}
          </div>
        </div>
      </div>

      {showEncouragement && (
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-4 mb-6 animate-bounce">
          <p className="text-center text-purple-700 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5" />
            {encouragements[Math.floor(Math.random() * encouragements.length)]}
          </p>
        </div>
      )}

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">
            Pairs Found: {matchedPairs} / {totalPairs}
          </span>
          <span className="text-sm text-gray-600">
            {totalPairs - matchedPairs} remaining
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-purple-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(matchedPairs / totalPairs) * 100}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`aspect-square rounded-xl text-5xl flex items-center justify-center transition-all transform hover:scale-105 ${
              card.isFlipped || card.isMatched
                ? 'bg-gradient-to-br from-purple-100 to-purple-200'
                : 'bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300'
            } ${card.isMatched ? 'opacity-50' : ''}`}
            disabled={card.isMatched}
          >
            {card.isFlipped || card.isMatched ? (
              <span>{card.emoji}</span>
            ) : (
              <span className="text-4xl">❓</span>
            )}
          </button>
        ))}
      </div>

      <div className="mt-8 text-center text-gray-600">
        <p>Click cards to find matching pairs!</p>
        <p className="text-sm mt-2">Fewer moves = Bonus points!</p>
      </div>
    </div>
  );
}

import image_760ca3da819a457457b4461c6775b250946cf947 from 'figma:asset/760ca3da819a457457b4461c6775b250946cf947.png';
import image_6ecaaff802e160efbfff13386990ff5a062b9bd1 from 'figma:asset/6ecaaff802e160efbfff13386990ff5a062b9bd1.png';
import image_760ca3da819a457457b4461c6775b250946cf947 from 'figma:asset/760ca3da819a457457b4461c6775b250946cf947.png';
import image_6ecaaff802e160efbfff13386990ff5a062b9bd1 from 'figma:asset/6ecaaff802e160efbfff13386990ff5a062b9bd1.png';
import image_760ca3da819a457457b4461c6775b250946cf947 from 'figma:asset/760ca3da819a457457b4461c6775b250946cf947.png';
import image_979026e716e7b7592e6b105e30b4b7e536a53060 from 'figma:asset/979026e716e7b7592e6b105e30b4b7e536a53060.png';
import image_760ca3da819a457457b4461c6775b250946cf947 from 'figma:asset/760ca3da819a457457b4461c6775b250946cf947.png';
import image_8f46e1cf6acdfad69aeb9280cb9df77e3dc769e1 from 'figma:asset/8f46e1cf6acdfad69aeb9280cb9df77e3dc769e1.png';
import image_6ecaaff802e160efbfff13386990ff5a062b9bd1 from 'figma:asset/6ecaaff802e160efbfff13386990ff5a062b9bd1.png';
import image_6016d0de322bfda841067d853c84e82010c9d6fb from 'figma:asset/6016d0de322bfda841067d853c84e82010c9d6fb.png';
import image_6ecaaff802e160efbfff13386990ff5a062b9bd1 from 'figma:asset/6ecaaff802e160efbfff13386990ff5a062b9bd1.png';
import image_6016d0de322bfda841067d853c84e82010c9d6fb from 'figma:asset/6016d0de322bfda841067d853c84e82010c9d6fb.png';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy } from 'lucide-react';
import { useState } from 'react';
import logoImage from 'figma:asset/3622f114575d6e32261a4828a0673423e1f4e7e2.png';
import brainMascot from 'figma:asset/bb0d35bcce1c5ffbdea1dac86cfbf99ac764e16f.png';
import MathQuizGame from './games/MathQuizGame';
import WordScrambleGame from './games/WordScrambleGame';
import MemoryMatchGame from './games/MemoryMatchGame';
import PatternGame from './games/PatternGame';

export default function GamesPage() {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [totalPoints, setTotalPoints] = useState(1250);

  const games = [
    {
      id: 'math-quiz',
      title: 'Math Challenge',
      emoji: '🔢',
      description: 'Solve fun math problems',
      color: 'from-blue-50 to-blue-100',
      component: MathQuizGame,
      image: image_979026e716e7b7592e6b105e30b4b7e536a53060
    },
    {
      id: 'word-scramble',
      title: 'Word Scramble',
      emoji: '📝',
      description: 'Unscramble the words',
      color: 'from-green-50 to-green-100',
      component: WordScrambleGame,
      image: image_6ecaaff802e160efbfff13386990ff5a062b9bd1
    },
    {
      id: 'memory-match',
      title: 'Memory Match',
      emoji: '🧠',
      description: 'Match the pairs',
      color: 'from-purple-50 to-purple-100',
      component: MemoryMatchGame,
      image: image_760ca3da819a457457b4461c6775b250946cf947
    },
    {
      id: 'pattern',
      title: 'Pattern Master',
      emoji: '🎨',
      description: 'Complete the patterns',
      color: 'from-pink-50 to-pink-100',
      component: PatternGame,
      image: image_6016d0de322bfda841067d853c84e82010c9d6fb
    }
  ];

  const handleGameComplete = (points: number) => {
    setTotalPoints(prev => prev + points);
    setSelectedGame(null);
  };

  const selectedGameData = games.find(g => g.id === selectedGame);

  if (selectedGame && selectedGameData) {
    const GameComponent = selectedGameData.component;
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-teal-50">
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img src={logoImage} alt="Jumpy Minds" className="h-12" />
            </Link>
            <button
              onClick={() => setSelectedGame(null)}
              className="flex items-center gap-2 text-[#FF6B3D] hover:text-orange-600"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-6 py-8">
          <GameComponent onComplete={handleGameComplete} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-teal-50">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoImage} alt="Jumpy Minds" className="h-12" />
          </Link>
          <Link
            to="/child-dashboard"
            className="flex items-center gap-2 text-[#FF6B3D] hover:text-orange-600"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-4 text-gray-800">
            <span>Educational</span>{' '}
            <span>Games</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Learn while you play! Choose a game to start earning points
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {games.map((game) => (
            <button
              key={game.id}
              onClick={() => setSelectedGame(game.id)}
              className={`bg-gradient-to-br ${game.color} rounded-2xl p-8 hover:shadow-xl transition-all text-center group`}
            >
              <div className="mb-4 group-hover:scale-110 transition-transform flex justify-center">
                <img src={game.image} alt={game.title} className="w-32 h-32 object-cover rounded-xl" />
              </div>
              <h2 className="text-2xl mb-2 text-gray-800">{game.title}</h2>
              <p className="text-gray-600 mb-4">{game.description}</p>
              <div className="flex items-center justify-center gap-2 bg-white px-4 py-2 rounded-full text-sm w-fit mx-auto">
                <Trophy className="w-4 h-4 text-orange-500" />
                <span className="text-gray-700">Earn points</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

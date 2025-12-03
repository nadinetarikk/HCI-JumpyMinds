import image_73e632d6f9c40d29950d1de6aea8e7fd1e8dace4 from 'figma:asset/73e632d6f9c40d29950d1de6aea8e7fd1e8dace4.png';
import image_e0eefb62b989661d308a2538a9264465db1392ef from 'figma:asset/e0eefb62b989661d308a2538a9264465db1392ef.png';
import image_9201cb7b73a9dca6623d1ab640ae1c357bb8f77f from 'figma:asset/9201cb7b73a9dca6623d1ab640ae1c357bb8f77f.png';
import image_38d5e31487b5f5dde080e1e5134374ead06b9cf7 from 'figma:asset/38d5e31487b5f5dde080e1e5134374ead06b9cf7.png';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Pause, RotateCcw, Wind, Coffee, Sparkles, Ear } from 'lucide-react';
import { useState, useEffect } from 'react';
import logoImage from 'figma:asset/3622f114575d6e32261a4828a0673423e1f4e7e2.png';
import brainBreathingImage from 'figma:asset/b4ea25a9e90a37ae3d60e1fe67e3e12e80a6e823.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function MindfulnessBreak() {
  const navigate = useNavigate();
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [timer, setTimer] = useState(120);
  const [breathPhase, setBreathPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');

  const activities = [
    {
      id: 'breathing',
      title: 'Deep Breathing',
      icon: <img src={image_38d5e31487b5f5dde080e1e5134374ead06b9cf7} alt="Brain breathing" className="w-24 h-24" />,
      duration: '2 minutes',
      description: 'Breathing exercises to calm your mind',
      color: 'from-blue-50 to-blue-100',
    },
    {
      id: 'stretch',
      title: 'Quick Stretch',
      icon: <img src={image_e0eefb62b989661d308a2538a9264465db1392ef} alt="Brain mascot" className="w-24 h-24" />,
      duration: '3 minutes',
      description: 'Simple stretches to relax your body',
      color: 'from-green-50 to-green-100',
    },
    {
      id: 'gratitude',
      title: 'Gratitude Moment',
      icon: <ImageWithFallback src={image_9201cb7b73a9dca6623d1ab640ae1c357bb8f77f} alt="Brain mascot" className="w-24 h-24" />,
      duration: '2 minutes',
      description: 'Think of three things you\'re grateful for',
      color: 'from-purple-50 to-purple-100',
    },
    {
      id: 'visualization',
      title: 'Happy Place',
      icon: <ImageWithFallback src={image_73e632d6f9c40d29950d1de6aea8e7fd1e8dace4} alt="Brain mascot" className="w-24 h-24" />,
      duration: '3 minutes',
      description: 'Imagine your favorite peaceful place',
      color: 'from-pink-50 to-pink-100',
    },
  ];

  const breathingExercises = [
    { phase: 'inhale', duration: 4, instruction: 'Breathe in slowly...' },
    { phase: 'hold', duration: 4, instruction: 'Hold your breath...' },
    { phase: 'exhale', duration: 4, instruction: 'Breathe out slowly...' },
    { phase: 'hold', duration: 2, instruction: 'Pause...' },
  ];

  const stretchExercises = [
    { name: 'Arm Circles', duration: 30, instruction: 'Make big circles with your arms' },
    { name: 'Shoulder Rolls', duration: 30, instruction: 'Roll your shoulders back and forward' },
    { name: 'Neck Stretch', duration: 30, instruction: 'Gently tilt your head side to side' },
    { name: 'Touch Your Toes', duration: 30, instruction: 'Reach down towards your toes' },
  ];

  const gratitudePrompts = [
    'What made you smile today?',
    'Who is someone you appreciate?',
    'What is something fun you did recently?',
  ];

  const visualizationGuide = [
    'Close your eyes and take a deep breath...',
    'Picture your favorite place...',
    'What do you see around you?',
    'What sounds do you hear?',
    'How does this place make you feel?',
    'Take a moment to enjoy this feeling...',
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            setIsActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);

  useEffect(() => {
    if (selectedActivity === 'breathing' && isActive) {
      const cycleTime = 14; // 4 + 4 + 4 + 2
      const elapsed = 120 - timer; // Calculate elapsed time from start
      const currentTime = elapsed % cycleTime;
      
      if (currentTime < 4) {
        setBreathPhase('inhale');
      } else if (currentTime < 8) {
        setBreathPhase('hold');
      } else if (currentTime < 12) {
        setBreathPhase('exhale');
      } else {
        setBreathPhase('hold');
      }
    }
  }, [timer, isActive, selectedActivity]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleComplete = () => {
    setIsActive(false);
    setTimeout(() => {
      navigate('/child-dashboard');
    }, 2000);
  };

  if (!selectedActivity) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-teal-50">
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img src={logoImage} alt="Jumpy Minds" className="h-12" />
            </Link>
            
            <Link to="/child-dashboard" className="flex items-center gap-2 text-[#FF6B3D] hover:text-orange-600">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Dashboard</span>
            </Link>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-center mb-12">

            <h1 className="text-4xl mb-4 text-gray-800">Time for a Break!</h1>
            <p className="text-xl text-gray-600">
              Take a few minutes to relax and recharge!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((activity) => (
              <button
                key={activity.id}
                onClick={() => setSelectedActivity(activity.id)}
                className={`bg-gradient-to-br ${activity.color} rounded-2xl p-8 hover:shadow-xl transition-all text-center group flex flex-col items-center`}
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                  {activity.icon}
                </div>
                <h3 className="text-2xl mb-2 text-gray-800">{activity.title}</h3>
                <p className="text-gray-600 mb-3">{activity.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>⏱️</span>
                  <span>{activity.duration}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="mt-12 bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl mb-6 flex items-center justify-center gap-2 text-gray-800">
              <span className="text-2xl">💭</span>
              Mindfulness Tips
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-teal-100 rounded-full p-3">
                    <Coffee className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg text-gray-800">Take Regular Breaks</h3>
                </div>
                <p className="text-gray-700">
                  Every 30 minutes, take a short 2-minute break to rest your mind and eyes.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-orange-100 rounded-full p-3">
                    <Sparkles className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-lg text-gray-800">Stay Present</h3>
                </div>
                <p className="text-gray-700">
                  Focus on what you're doing right now. One thing at a time works best!
                </p>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-slate-100 rounded-full p-3">
                    <Ear className="w-6 h-6 text-slate-600" />
                  </div>
                  <h3 className="text-lg text-gray-800">Listen to Your Body</h3>
                </div>
                <p className="text-gray-700">
                  If you feel tired or stressed, it's okay to take a longer break!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentActivity = activities.find((a) => a.id === selectedActivity)!;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-teal-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoImage} alt="Jumpy Minds" className="h-12" />
          </Link>
          
          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                setSelectedActivity(null);
                setIsActive(false);
                setTimer(120);
              }}
              className="flex items-center gap-2 text-[#FF6B3D] hover:text-orange-600"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {selectedActivity !== 'breathing' && (
          <div className="text-center mb-8">
            <div className={`w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full ${currentActivity.iconBg} flex items-center justify-center text-5xl sm:text-6xl mb-6 shadow-lg`}>
              {currentActivity.icon}
            </div>
            <h1 className="text-3xl sm:text-4xl mb-2 text-gray-800">{currentActivity.title}</h1>
            <p className="text-lg sm:text-xl text-gray-600">{currentActivity.description}</p>
          </div>
        )}

        {/* Breathing Exercise */}
        {selectedActivity === 'breathing' && (
          <div className="bg-white rounded-3xl p-12 shadow-xl text-center">
            <h2 className="text-3xl mb-12 text-gray-800 flex items-center justify-center gap-3">
              <Wind className="w-8 h-8 text-[#4DB8C1]" />
              Breathing Exercise
            </h2>
            
            {/* Circular breathing indicator with outer ring */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto mb-8">
              {/* Outer light ring */}
              <div className="absolute inset-0 rounded-full bg-[#4DB8C1]/20"></div>
              
              {/* Inner circle */}
              <div
                className={`absolute inset-8 sm:inset-10 rounded-full bg-[#4DB8C1] flex flex-col items-center justify-center transition-all duration-1000 ${
                  isActive
                    ? breathPhase === 'inhale'
                      ? 'scale-110'
                      : breathPhase === 'exhale'
                      ? 'scale-90'
                      : 'scale-100'
                    : 'scale-100'
                }`}
              >
                <Wind className="w-10 h-10 sm:w-12 sm:h-12 text-white mb-3" />
                <div className="text-white text-xl sm:text-2xl text-center px-4">
                  {isActive
                    ? breathPhase === 'inhale'
                      ? 'Breathe In'
                      : breathPhase === 'exhale'
                      ? 'Breathe Out'
                      : 'Hold'
                    : 'Breathe In'}
                </div>
              </div>
            </div>

            {/* Time Remaining */}
            <div className="mb-8">
              <p className="text-sm text-gray-500 mb-2">Time Remaining</p>
              <div className="text-5xl text-gray-800">{timer}s</div>
            </div>
          </div>
        )}

        {/* Stretch Exercise */}
        {selectedActivity === 'stretch' && (
          <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-[#FF6B3D]/20">
            <div className="space-y-6">
              {stretchExercises.map((exercise, index) => (
                <div
                  key={index}
                  className="bg-teal-50 rounded-2xl p-6 border-2 border-[#4DB8C1]/30"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#4DB8C1] rounded-full flex items-center justify-center text-white text-xl">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl mb-1 text-gray-800">{exercise.name}</h3>
                      <p className="text-gray-600">{exercise.instruction}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gratitude Exercise */}
        {selectedActivity === 'gratitude' && (
          <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-[#4DB8C1]/20">
            <div className="space-y-8">
              {gratitudePrompts.map((prompt, index) => (
                <div key={index} className="bg-[#4DB8C1]/10 rounded-2xl p-6 border-2 border-[#4DB8C1]/30">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">💭</div>
                    <div className="flex-1">
                      <p className="text-xl mb-4 text-gray-800">{prompt}</p>
                      <textarea
                        className="w-full p-4 border-2 border-[#4DB8C1]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4DB8C1] bg-white"
                        rows={3}
                        placeholder="Type your thoughts here..."
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Visualization Exercise */}
        {selectedActivity === 'visualization' && (
          <div className="bg-white rounded-3xl p-12 shadow-xl text-center border-2 border-[#FF6B3D]/20">
            <div className="max-w-2xl mx-auto space-y-6">
              {visualizationGuide.map((instruction, index) => (
                <div
                  key={index}
                  className="bg-[#4DB8C1]/10 rounded-2xl p-6 border-2 border-[#4DB8C1]/30 text-xl text-gray-700"
                >
                  {instruction}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Time Remaining - for stretch, gratitude, and visualization */}
        {selectedActivity !== 'breathing' && (
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 mb-2">Time Remaining</p>
            <div className="text-5xl text-gray-800">{formatTime(timer)}</div>
          </div>
        )}

        {/* Controls */}
        <div className="mt-8 flex justify-center gap-4">
          {!isActive ? (
            <>
              <button
                onClick={() => setIsActive(true)}
                className="bg-[#FF6B3D] hover:bg-orange-600 text-white px-12 py-4 rounded-xl text-xl flex items-center gap-3 shadow-lg transition-all"
              >
                <Play className="w-6 h-6" />
                {timer === 120 ? 'Start' : 'Resume'}
              </button>
              {timer < 120 && (
                <button
                  onClick={() => setTimer(120)}
                  className="bg-gray-400 hover:bg-gray-500 text-white px-12 py-4 rounded-xl text-xl flex items-center gap-3 shadow-lg transition-all"
                >
                  <RotateCcw className="w-6 h-6" />
                  Reset
                </button>
              )}
            </>
          ) : (
            <>
              <button
                onClick={() => setIsActive(false)}
                className="bg-[#FF6B3D] hover:bg-orange-600 text-white px-12 py-4 rounded-xl text-xl flex items-center gap-3 shadow-lg transition-all"
              >
                <Pause className="w-6 h-6" />
                Pause
              </button>
              <button
                onClick={() => setTimer(120)}
                className="bg-gray-400 hover:bg-gray-500 text-white px-12 py-4 rounded-xl text-xl flex items-center gap-3 shadow-lg transition-all"
              >
                <RotateCcw className="w-6 h-6" />
                Reset
              </button>
            </>
          )}
        </div>

        {timer <= 0 && (
          <div className="mt-8 bg-gradient-to-br from-orange-50 to-teal-50 border-2 border-[#4DB8C1] rounded-2xl p-8 text-center shadow-lg">
            <div className="text-6xl mb-4">✨</div>
            <h2 className="text-3xl mb-4 text-gray-800">Great Job!</h2>
            <p className="text-xl text-gray-700 mb-6">
              You completed your mindfulness break! Feel proud of taking time for yourself.
            </p>
            <button
              onClick={handleComplete}
              className="bg-[#FF6B3D] hover:bg-orange-600 text-white px-12 py-4 rounded-xl text-xl shadow-lg transition-all"
            >
              Continue Learning
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

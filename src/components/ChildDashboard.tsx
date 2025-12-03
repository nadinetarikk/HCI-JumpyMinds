import image_08649803145a19d83527991d6f5a1f879cb8e97f from 'figma:asset/08649803145a19d83527991d6f5a1f879cb8e97f.png';
import image_979026e716e7b7592e6b105e30b4b7e536a53060 from 'figma:asset/979026e716e7b7592e6b105e30b4b7e536a53060.png';
import image_a49f9c5c0c462e9c6a846a441f6881cd32c2ffbb from 'figma:asset/a49f9c5c0c462e9c6a846a441f6881cd32c2ffbb.png';
import image_c0e477bbd6d49d4354f60f1f4a524cd705f833ef from 'figma:asset/c0e477bbd6d49d4354f60f1f4a524cd705f833ef.png';
import image_160474e3c2b69e42d79ec725381e420850be6f5a from 'figma:asset/160474e3c2b69e42d79ec725381e420850be6f5a.png';
import image_86e49e03d83aefaa7dd8759168dcdf639817c469 from 'figma:asset/86e49e03d83aefaa7dd8759168dcdf639817c469.png';
import image_e9834cfdd41b400eefe9df8efa57faa27e87aa9f from 'figma:asset/e9834cfdd41b400eefe9df8efa57faa27e87aa9f.png';
import image_08649803145a19d83527991d6f5a1f879cb8e97f from 'figma:asset/08649803145a19d83527991d6f5a1f879cb8e97f.png';
import { Link } from 'react-router-dom';
import { Bell, Trophy, Star, Heart, Brain, BookOpen, Clock, Sparkles, Award, TrendingUp, ArrowRight, Zap } from 'lucide-react';
import { useState } from 'react';
import logoImage from 'figma:asset/3622f114575d6e32261a4828a0673423e1f4e7e2.png';
import brainMascotImage from 'figma:asset/e1e39d682bcad6a3c687f8afc8b31c266870e0eb.png';
import gamingBrainImage from 'figma:asset/08951afc9c7163bbdcc1455e8b75c47d31e1876e.png';
import clockBrainImage from 'figma:asset/8fd9d2a8d6da29ab86f1e63a84b83b30f65e6a0d.png';

export default function ChildDashboard() {
  const [points, setPoints] = useState(1250);
  const [streak, setStreak] = useState(7);
  const [showEncouragement, setShowEncouragement] = useState(false);
  const [checkedActivities, setCheckedActivities] = useState<number[]>([]);

  const encouragementMessages = [
    "You're doing amazing! Keep it up!",
    "Believe in yourself! You can do this!",
    "Every step forward is progress!",
    "You're smarter than you think!",
    "Take your time, you're doing great!",
  ];

  const lessons = [
    { id: 1, title: 'Math: Fractions Fun', progress: 75, color: 'bg-purple-500', icon: '🔢', difficulty: 'Medium', image: image_979026e716e7b7592e6b105e30b4b7e536a53060 },
    { id: 2, title: 'Science: Plant Life', progress: 40, color: 'bg-green-500', icon: '🌱', difficulty: 'Easy', image: image_e9834cfdd41b400eefe9df8efa57faa27e87aa9f },
    { id: 3, title: 'Reading: Adventure Stories', progress: 90, color: 'bg-blue-500', icon: '📚', difficulty: 'Easy', image: image_86e49e03d83aefaa7dd8759168dcdf639817c469 },
    { id: 4, title: 'Art: Creative Drawing', progress: 60, color: 'bg-pink-500', icon: '🎨', difficulty: 'Fun', image: image_160474e3c2b69e42d79ec725381e420850be6f5a },
  ];

  const achievements = [
    { id: 1, title: '7 Day Streak', icon: '🔥', unlocked: true },
    { id: 2, title: 'Math Master', icon: '🧮', unlocked: true },
    { id: 4, title: 'Book Worm', icon: '📖', unlocked: false },
    { id: 5, title: 'Science Star', icon: '⭐', unlocked: false },
  ];

  const upcomingActivities = [
    { time: '2:00 PM', activity: 'Break', icon: '🧘', color: 'bg-teal-100' },
    { time: '3:30 PM', activity: 'Math Quiz', icon: '🎯', color: 'bg-orange-100' },
    { time: '4:00 PM', activity: 'Drink Water', icon: '💧', color: 'bg-blue-100' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-teal-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoImage} alt="Jumpy Minds" className="h-12" />
          </Link>
          
          <div className="flex items-center gap-6">
            <button className="relative">
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full text-white text-xs flex items-center justify-center">
                2
              </span>
            </button>
            <div className="flex items-center gap-3 bg-orange-50 px-4 py-2 rounded-full">
              <Trophy className="w-5 h-5 text-orange-500" />
              <span className="text-orange-600">{points} points</span>
            </div>
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white" style={{ background: 'linear-gradient(to bottom right, #FF6636, #07A3B6)' }}>
              N
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl sm:text-4xl mb-2 font-bold">Welcome back, Nadine!</h1>
              <p className="text-gray-600 text-lg italic">Ready to learn and grow today?</p>
            </div>

          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Stats Cards */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-3xl">
                  🔥
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Current Streak</p>
                  <p className="text-2xl text-orange-600">{streak} Days</p>
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-500 italic">Keep going! You're on fire!</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-3xl">
                  ⏰
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Screen Time Today</p>
                  <p className="text-2xl text-teal-600">45 min</p>
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-500 italic">15 minutes left today!</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-3xl">
                  🏆
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Lessons Complete</p>
                  <p className="text-2xl text-purple-600">23 / 30</p>
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-500 italic">Almost there this week!</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Lessons & Activities */}
          <div className="lg:col-span-2 space-y-6">
            {/* Daily Motivation */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-2xl mb-6 flex items-center gap-2 font-bold">
                <Sparkles className="w-6 h-6 text-orange-500" />
                Daily Motivation
              </h2>
              <div className="bg-pink-100 rounded-xl p-6 text-center">
                <p className="text-gray-800 italic mb-2 text-xl sm:text-2xl">
                  {encouragementMessages[Math.floor(Math.random() * encouragementMessages.length)]}
                </p>

                <button
                  onClick={() => setShowEncouragement(!showEncouragement)}
                  className="bg-white text-gray-700 px-4 py-2 rounded-lg hover:shadow-md transition-all text-sm inline-flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Continue Learning */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-2xl mb-6 flex items-center gap-2 font-bold">
                <BookOpen className="w-6 h-6 text-orange-500" />
                Continue Learning
              </h2>
              <div className="space-y-4">
                {lessons.map((lesson) => (
                  <Link
                    key={lesson.id}
                    to={lesson.id === 4 ? '/creative-drawing' : `/lesson/${lesson.id}`}
                    className="block bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-32 h-32 flex items-center justify-center shrink-0">
                        <img src={lesson.image} alt="" className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg">{lesson.title}</h3>
                          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                            {lesson.difficulty}
                          </span>
                        </div>
                        <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`absolute top-0 left-0 h-full ${lesson.color} transition-all`}
                            style={{ width: `${lesson.progress}%` }}
                          />
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{lesson.progress}% Complete</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Achievements & Schedule */}
          <div className="flex flex-col space-y-6 h-full">
            {/* Achievements */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-2xl mb-6 flex items-center gap-2 font-bold">
                <Award className="w-6 h-6 text-orange-500" />
                Achievements
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`aspect-square rounded-xl flex flex-col items-center justify-center text-center p-4 transition-all ${
                      achievement.unlocked
                        ? 'bg-gradient-to-br from-orange-100 to-yellow-100 border-2 border-orange-300'
                        : 'bg-gray-100 opacity-50'
                    }`}
                  >
                    <div className="text-4xl sm:text-5xl mb-2">{achievement.icon}</div>
                    <p className="text-sm">{achievement.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Activities */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col flex-1">
              <h2 className="text-2xl mb-4 flex items-center gap-2 font-bold">
                <Clock className="w-6 h-6 text-orange-500" />
                Coming Up Today
              </h2>
              <div className="space-y-4 flex-1 flex flex-col justify-center">
                {upcomingActivities.map((item, index) => {
                  const isChecked = checkedActivities.includes(index);
                  const toggleCheck = () => {
                    setCheckedActivities(prev =>
                      prev.includes(index)
                        ? prev.filter(i => i !== index)
                        : [...prev, index]
                    );
                  };
                  
                  // Map color classes to checkbox colors
                  const checkboxColor = item.color === 'bg-teal-100' ? 'bg-teal-500' :
                                       item.color === 'bg-orange-100' ? 'bg-orange-500' :
                                       item.color === 'bg-blue-100' ? 'bg-blue-500' :
                                       'bg-gray-400';
                  
                  return (
                    <div key={index} className={`${item.color} rounded-lg p-3`}>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={toggleCheck}
                          className={`w-7 h-7 rounded-md flex items-center justify-center transition-all border-2 ${
                            isChecked
                              ? `${checkboxColor} border-transparent`
                              : 'bg-white border-gray-300'
                          }`}
                        >
                          {isChecked && (
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </button>
                        <div className="flex-1">
                          <p className="text-sm">{item.activity}</p>
                          <p className="text-xs text-gray-600">{item.time}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mood Tracker */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
              <h2 className="text-2xl mb-4 font-bold">How are you feeling?</h2>
              <div className="flex justify-between gap-2">
                {['😄', '😐', '😢', '😴'].map((emoji, index) => (
                  <button
                    key={index}
                    className="text-4xl hover:scale-125 transition-transform"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions - Separate Section */}
        <div className="mt-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-2xl mb-6 flex items-center gap-2 font-bold">
              <Zap className="w-6 h-6 text-orange-500" />
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link
                to="/mindfulness"
                className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 hover:shadow-md transition-all text-center"
              >
                <div className="mb-2 flex justify-center"><img src={image_c0e477bbd6d49d4354f60f1f4a524cd705f833ef} alt="Brain Mascot" className="h-24 w-24 sm:h-32 sm:w-32 object-contain" /></div>
                <p className="text-sm italic">Take a Break</p>
              </Link>
              <Link to="/screen-time" className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 hover:shadow-md transition-all text-center block">
                <div className="mb-2 flex justify-center"><img src={image_08649803145a19d83527991d6f5a1f879cb8e97f} alt="Clock Brain Mascot" className="h-24 w-24 sm:h-32 sm:w-32 object-contain" /></div>
                <p className="text-sm italic">Screen Time Management</p>
              </Link>
              <Link to="/games" className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 hover:shadow-md transition-all text-center block">
                <div className="mb-2 flex justify-center"><img src={image_a49f9c5c0c462e9c6a846a441f6881cd32c2ffbb} alt="Gaming Brain Mascot" className="h-24 w-24 sm:h-32 sm:w-32 object-contain" /></div>
                <p className="text-sm italic">Play Game</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

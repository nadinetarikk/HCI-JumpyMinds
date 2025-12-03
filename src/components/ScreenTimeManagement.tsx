import { Link } from 'react-router-dom';
import { ArrowLeft, Play, RotateCcw, Pause, Eye, Sun, Moon, Clock, Lightbulb, BarChart } from 'lucide-react';
import { useState, useEffect } from 'react';
import logoImage from 'figma:asset/3622f114575d6e32261a4828a0673423e1f4e7e2.png';

export default function ScreenTimeManagement() {
  const [selectedTime, setSelectedTime] = useState(30); // in minutes
  const [timeRemaining, setTimeRemaining] = useState(30 * 60); // in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [todayScreenTime, setTodayScreenTime] = useState(45); // in minutes
  const [breaksTaken, setBreaksTaken] = useState(2);

  const timeOptions = [15, 30, 45, 60];
  const dailyLimit = 120; // 2 hours

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isRunning && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            // Show completion notification
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeRemaining]);

  const handleStart = () => {
    if (timeRemaining > 0) {
      setIsRunning(!isRunning);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeRemaining(selectedTime * 60);
  };

  const handleTimeSelect = (time: number) => {
    setSelectedTime(time);
    setTimeRemaining(time * 60);
    setIsRunning(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const averageSession = Math.round(todayScreenTime / (breaksTaken + 1));

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-teal-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/child-dashboard" className="flex items-center gap-2">
            <img src={logoImage} alt="Jumpy Minds" className="h-12" />
          </Link>
          
          <Link 
            to="/child-dashboard"
            className="flex items-center gap-2 text-[#FF6B3D] hover:text-orange-600 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Dashboard</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl mb-4 text-gray-800">Screen Time Management</h1>
          <p className="text-gray-600 text-lg">Take control of your screen time and stay healthy!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Timer Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl mb-6 text-center text-gray-800 flex items-center justify-center gap-2">
              <Clock className="w-6 h-6 text-[#FF6B3D]" />
              Session Timer
            </h2>
            
            {/* Time Selection */}
            <div className="flex gap-3 justify-center mb-8">
              {timeOptions.map((time) => (
                <button
                  key={time}
                  onClick={() => handleTimeSelect(time)}
                  className={`px-6 py-3 rounded-lg transition-all ${
                    selectedTime === time
                      ? 'bg-[#FF6B3D] text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {time}m
                </button>
              ))}
            </div>

            {/* Timer Display with Circular Progress */}
            <div className="flex justify-center mb-8">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64">
                {/* SVG Circle Progress */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background Circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="8"
                  />
                  {/* Progress Circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#FF6B3D"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${(1 - timeRemaining / (selectedTime * 60)) * 283} 283`}
                    className="transition-all duration-1000"
                  />
                </svg>
                
                {/* Timer Text in Center */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-4xl sm:text-5xl text-gray-800 tracking-wider">
                    {formatTime(timeRemaining)}
                  </div>
                  <div className="text-gray-500 text-sm mt-2">
                    / {selectedTime} minutes
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex gap-4 justify-center">
              <button
                onClick={handleStart}
                className={`flex items-center gap-2 px-8 py-4 rounded-xl text-white transition-all ${
                  isRunning
                    ? 'bg-[#4DB8C1] hover:bg-[#3da7b0]'
                    : 'bg-[#4DB8C1] hover:bg-[#3da7b0]'
                }`}
              >
                {isRunning ? (
                  <>
                    <Pause size={20} />
                    Pause Session
                  </>
                ) : (
                  <>
                    <Play size={20} />
                    {timeRemaining === selectedTime * 60 ? 'Start Session' : 'Resume Session'}
                  </>
                )}
              </button>
              {timeRemaining < selectedTime * 60 && (
                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all"
                >
                  <RotateCcw size={20} />
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Statistics Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl mb-6 text-center text-gray-800 flex items-center justify-center gap-2">
              <BarChart className="w-6 h-6 text-[#FF6B3D]" />
              Today's Statistics
            </h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 text-center">
                <div className="text-4xl mb-2">📱</div>
                <div className="text-3xl mb-1 text-gray-800">{todayScreenTime}m</div>
                <div className="text-gray-600 text-sm">Today's Screen Time</div>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-6 text-center">
                <div className="text-4xl mb-2">🎯</div>
                <div className="text-3xl mb-1 text-gray-800">{dailyLimit}m</div>
                <div className="text-gray-600 text-sm">Daily Limit</div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center">
                <div className="text-4xl mb-2">☕</div>
                <div className="text-3xl mb-1 text-gray-800">30m</div>
                <div className="text-gray-600 text-sm">Total Break Time</div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl p-6 text-center">
                <div className="text-4xl mb-2">⏱️</div>
                <div className="text-3xl mb-1 text-gray-800">{averageSession}m</div>
                <div className="text-gray-600 text-sm">Average Session</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-8">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Daily Progress</span>
                <span className="text-sm text-gray-600">{Math.round((todayScreenTime / dailyLimit) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-[#FF6B3D] to-[#4DB8C1] h-3 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min((todayScreenTime / dailyLimit) * 100, 100)}%` }}
                />
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">
                {dailyLimit - todayScreenTime > 0
                  ? `${dailyLimit - todayScreenTime} minutes remaining today`
                  : 'Daily limit reached! Time for a break 🎉'}
              </p>
            </div>
          </div>
        </div>

        {/* Healthy Screen Time Tips */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl mb-6 text-center text-gray-800 flex items-center justify-center gap-2">
            <Lightbulb className="w-6 h-6 text-[#FF6B3D]" />
            Healthy Screen Time Tips
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* 20-20-20 Rule */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-teal-100 rounded-full p-3">
                  <Eye className="text-teal-600" size={24} />
                </div>
                <h3 className="text-lg text-gray-800">20-20-20 Rule</h3>
              </div>
              <p className="text-gray-700">
                Every 20 minutes, look at something 20 feet away for 20 seconds to rest your eyes.
              </p>
            </div>

            {/* Bright Environment */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-100 rounded-full p-3">
                  <Sun className="text-orange-500" size={24} />
                </div>
                <h3 className="text-lg text-gray-800">Bright Environment</h3>
              </div>
              <p className="text-gray-700">
                Use your device in a well-lit room to reduce eye strain and prevent headaches.
              </p>
            </div>

            {/* Blue Light */}
            <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-slate-100 rounded-full p-3">
                  <Moon className="text-slate-600" size={24} />
                </div>
                <h3 className="text-lg text-gray-800">Blue Light</h3>
              </div>
              <p className="text-gray-700">
                Reduce blue light exposure before bedtime for better sleep quality.
              </p>
            </div>
          </div>
        </div>

        {/* Encouragement Message */}

      </main>
    </div>
  );
}

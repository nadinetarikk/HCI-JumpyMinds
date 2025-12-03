import image_b6babe35940e05d27b0ad021239febc9489ab47f from 'figma:asset/b6babe35940e05d27b0ad021239febc9489ab47f.png';
import image_86e49e03d83aefaa7dd8759168dcdf639817c469 from 'figma:asset/86e49e03d83aefaa7dd8759168dcdf639817c469.png';
import image_e9834cfdd41b400eefe9df8efa57faa27e87aa9f from 'figma:asset/e9834cfdd41b400eefe9df8efa57faa27e87aa9f.png';
import image_c0e477bbd6d49d4354f60f1f4a524cd705f833ef from 'figma:asset/c0e477bbd6d49d4354f60f1f4a524cd705f833ef.png';
import { Link } from 'react-router-dom';
import { Bell, TrendingUp, Clock, Heart, Book, Trophy, Calendar, Download, Share2, BarChart3, AlertCircle, Lightbulb, BookOpen, Activity } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import logoImage from 'figma:asset/3622f114575d6e32261a4828a0673423e1f4e7e2.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function ParentDashboard() {
  const weeklyProgress = [
    { day: 'Mon', lessons: 4, minutes: 45 },
    { day: 'Tue', lessons: 5, minutes: 60 },
    { day: 'Wed', lessons: 3, minutes: 40 },
    { day: 'Thu', lessons: 6, minutes: 70 },
    { day: 'Fri', lessons: 4, minutes: 50 },
    { day: 'Sat', lessons: 2, minutes: 25 },
    { day: 'Sun', lessons: 1, minutes: 15 },
  ];

  const subjectProgress = [
    { subject: 'Math', value: 85, color: '#FF6B3D' },
    { subject: 'Science', value: 72, color: '#4DB8C1' },
    { subject: 'Reading', value: 95, color: '#A855F7' },
    { subject: 'Art', value: 78, color: '#EC4899' },
  ];

  const emotionalWellness = [
    { date: 'Week 1', mood: 4.2, stress: 2.1 },
    { date: 'Week 2', mood: 4.5, stress: 1.8 },
    { date: 'Week 3', mood: 4.8, stress: 1.5 },
    { date: 'Week 4', mood: 4.6, stress: 1.9 },
  ];

  const recentActivity = [
    { date: 'Today, 1:15 PM', activity: 'Took Mindfulness Break', duration: '5 min', icon: image_c0e477bbd6d49d4354f60f1f4a524cd705f833ef },
    { date: 'Today, 11:00 AM', activity: 'Started Science: Plant Life', progress: '40%', icon: image_e9834cfdd41b400eefe9df8efa57faa27e87aa9f },
    { date: 'Yesterday', activity: 'Earned Achievement: 7 Day Streak', icon: image_b6babe35940e05d27b0ad021239febc9489ab47f },
    { date: 'Yesterday', activity: 'Completed Reading Challenge', score: '100%', icon: image_86e49e03d83aefaa7dd8759168dcdf639817c469 },
  ];

  const recommendations = [
    {
      title: 'Great Progress in Math!',
      description: 'Nadine is excelling in fractions. Consider introducing multiplication next.',
      icon: 'BarChart3',
      type: 'success',
    },
    {
      title: 'Screen Time Reminder',
      description: 'Nadine has 15 minutes of screen time left today. Consider a break soon.',
      icon: 'Clock',
      type: 'warning',
    },
    {
      title: 'Emotional Check-in',
      description: 'Nadine reported feeling stressed yesterday. A mindfulness activity might help.',
      icon: 'Heart',
      type: 'info',
    },
  ];

  const milestones = [
    { title: '100 Lessons Completed', achieved: true, date: 'Nov 15' },
    { title: '30 Day Streak', achieved: false, progress: '7/30' },
    { title: 'Master of Math', achieved: true, date: 'Nov 20' },
    { title: 'Kindness Champion', achieved: false, progress: '12/20' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-teal-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoImage} alt="Jumpy Minds" className="h-12" />
          </Link>
          
          <div className="flex items-center gap-4">
            <button className="relative">
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full text-white text-xs flex items-center justify-center">
                3
              </span>
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-teal-500 flex items-center justify-center text-white">
              P
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl mb-2">Nadine's Progress Dashboard</h1>
          <p className="text-gray-600 text-lg">Track your child's learning journey and well-being</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Trophy className="w-6 h-6 text-orange-500" />
              </div>
            </div>
            <p className="text-3xl mb-1">1,250</p>
            <p className="text-sm text-gray-600">Total Points</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <Book className="w-6 h-6 text-teal-500" />
              </div>
            </div>
            <p className="text-3xl mb-1">23</p>
            <p className="text-sm text-gray-600">Lessons This Week</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-purple-500" />
              </div>
            </div>
            <p className="text-3xl mb-1">5.2 hrs</p>
            <p className="text-sm text-gray-600">Learning Time</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-pink-500" />
              </div>
            </div>
            <p className="text-3xl mb-1">4.5 / 5</p>
            <p className="text-sm text-gray-600">Well-being Score</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {/* Left Column - Charts and Progress */}
          <div className="lg:col-span-2 space-y-6">
            {/* Weekly Activity */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl flex items-center gap-2">
                  <TrendingUp className="w-6 h-6" style={{ color: '#FF6B3D' }} />
                  Weekly Activity
                </h2>
                <div className="flex gap-2">
                  <button className="text-sm text-gray-600 hover:text-gray-900 px-3 py-1 rounded-lg hover:bg-gray-100">
                    Week
                  </button>
                  <button className="text-sm text-gray-600 hover:text-gray-900 px-3 py-1 rounded-lg hover:bg-gray-100">
                    Month
                  </button>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={weeklyProgress}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="lessons" fill="#FF6B3D" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="minutes" fill="#4DB8C1" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Lessons Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#4DB8C1' }}></div>
                  <span className="text-sm text-gray-600">Minutes Learned</span>
                </div>
              </div>
            </div>

            {/* Subject Progress */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-2xl mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6" style={{ color: '#FF6B3D' }} />
                Subject Progress
              </h2>
              <div className="space-y-4">
                {subjectProgress.map((subject) => (
                  <div key={subject.subject}>
                    <div className="flex items-center justify-between mb-2">
                      <span>{subject.subject}</span>
                      <span className="text-sm text-gray-600">{subject.value}%</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${subject.value}%`,
                          backgroundColor: subject.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emotional Well-being Trends */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-2xl mb-6 flex items-center gap-2">
                <Heart className="w-6 h-6" style={{ color: '#FF6B3D' }} />
                Emotional Well-being Trends
              </h2>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={emotionalWellness}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="date" />
                  <YAxis domain={[0, 5]} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="mood"
                    stroke="#10B981"
                    strokeWidth={3}
                    dot={{ fill: '#10B981', r: 5 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="stress"
                    stroke="#EF4444"
                    strokeWidth={3}
                    dot={{ fill: '#EF4444', r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Mood (1-5)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Stress Level (1-5)</span>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-2xl mb-6 flex items-center gap-2">
                <Activity className="w-6 h-6" style={{ color: '#FF6B3D' }} />
                Recent Activity
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {recentActivity.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 border border-gray-100 rounded-lg">
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                      <ImageWithFallback src={item.icon} alt={item.activity} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="mb-1">{item.activity}</p>
                      <p className="text-sm text-gray-600">{item.date}</p>
                    </div>
                    {item.score && (
                      <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
                        {item.score}
                      </span>
                    )}
                    {item.duration && (
                      <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                        {item.duration}
                      </span>
                    )}
                    {item.progress && (
                      <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                        {item.progress}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Insights and Actions */}
          <div className="space-y-6">
            {/* Recommendations */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl mb-4 flex items-center gap-2">
                <Lightbulb className="w-6 h-6" style={{ color: '#FF6B3D' }} />
                Insights & Tips
              </h2>
              <div className="space-y-4">
                {recommendations.map((rec, index) => {
                  const IconComponent = rec.icon === 'BarChart3' ? BarChart3 : rec.icon === 'Clock' ? Clock : Heart;
                  const iconColor = rec.type === 'success' ? 'text-green-600' : rec.type === 'warning' ? 'text-orange-600' : 'text-blue-600';
                  
                  return (
                    <div
                      key={index}
                      className={`p-4 rounded-xl border-2 ${
                        rec.type === 'success'
                          ? 'bg-green-50 border-green-200'
                          : rec.type === 'warning'
                          ? 'bg-orange-50 border-orange-200'
                          : 'bg-blue-50 border-blue-200'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <IconComponent className={`w-8 h-8 ${iconColor}`} />
                        <div>
                          <h3 className="mb-1">{rec.title}</h3>
                          <p className="text-sm text-gray-600">{rec.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Milestones */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl mb-4 flex items-center gap-2">
                <Trophy className="w-6 h-6" style={{ color: '#FF6B3D' }} />
                Milestones
              </h2>
              <div className="space-y-3">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg ${
                      milestone.achieved ? 'bg-orange-50 border border-orange-200' : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm mb-1">{milestone.title}</p>
                        <p className="text-xs text-gray-600">
                          {milestone.achieved ? `Achieved ${milestone.date}` : milestone.progress}
                        </p>
                      </div>
                      {milestone.achieved ? (
                        <span className="text-2xl">✅</span>
                      ) : (
                        <span className="text-2xl opacity-30">🏆</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Screen Time Summary */}
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
              <h2 className="text-xl mb-8 flex items-center gap-2">
                <Clock className="w-6 h-6" style={{ color: '#FF6B3D' }} />
                Screen Time This Week
              </h2>
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">5.2 hrs</div>
                <p className="text-sm text-gray-600">Average: 45 min/day</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-5">
                <p className="text-sm text-green-700 text-center">
                  ✓ Within healthy limits
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-400 text-white rounded-2xl py-13 px-9">
              <h2 className="text-xl mb-6">Quick Actions</h2>
              <div className="space-y-4">
                <button className="w-full bg-white text-orange-600 py-4 rounded-lg hover:bg-orange-50 transition-colors flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Report
                </button>
                <button className="w-full bg-white/20 backdrop-blur text-white py-4 rounded-lg hover:bg-white/30 transition-colors flex items-center justify-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share Progress
                </button>
                <Link
                  to="/child-dashboard"
                  className="block w-full bg-white/20 backdrop-blur text-white py-4 rounded-lg hover:bg-white/30 transition-colors text-center"
                >
                  View Child's Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import image_807469f40c2617f0439926c3c9196b535475d7c9 from 'figma:asset/807469f40c2617f0439926c3c9196b535475d7c9.png';
import image_1b2540f5544cb6b9547b306ab25dc37440e77ce4 from 'figma:asset/1b2540f5544cb6b9547b306ab25dc37440e77ce4.png';
import { Link } from 'react-router-dom';
import svgPaths from '../imports/svg-jixjev1rms';
import imgLogo from 'figma:asset/3622f114575d6e32261a4828a0673423e1f4e7e2.png';
import imgJumpyMinds from 'figma:asset/8fbeaaab23203d29d21e6e6eb9f36d3b544791b4.png';
import imgFamily from 'figma:asset/b50f315365ed318fa17232fdf66d24f85aacee19.png';
import imgImage from 'figma:asset/c4ed455821512b22f5f6bb11ef1e08025e3d71cf.png';
import imgImage1 from 'figma:asset/9b9cd71dd16ef88a45fef3f9b68b8848820623a3.png';
import imgImage2 from 'figma:asset/74b8cc427166b50df9d3b6c2ad0fb5b22ef30aad.png';
import imgChatGptImageNov232025091417Pm1 from 'figma:asset/d4ba25336f9e1f7548efbe70607193bb64126698.png';
import imgParentDashboard from 'figma:asset/4e94fcdc9425a5c3d9e9a005524873b3e8d37ad3.png';
import imgChatGptImageNov232025090858Pm1 from 'figma:asset/a092e2e7180cd698093970de72104e94dd4886c0.png';
import imgPositiveFeedback from 'figma:asset/b011d8002140c80dff04211637d41c489553af39.png';
import imgSelfCare from 'figma:asset/3a44954cbc42fbb5702f82eef345d42fb09537ad.png';
import imgChatGptImageNov232025084636Pm1 from 'figma:asset/c0e477bbd6d49d4354f60f1f4a524cd705f833ef.png';
import imgLogo1 from 'figma:asset/e1135ef1f8b54b36b59c775b00ecfbb1af36d39c.png';

export default function LandingPage() {
  return (
    <div className="bg-white min-h-screen relative overflow-x-hidden">
      {/* Main Header with Logo and Search */}
      <div className="bg-white border-b border-gray-200 w-full">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img alt="Jumpy Minds" className="h-12" src={imgLogo} />
          </Link>

          {/* Search and Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            {/* Browse Dropdown - Hidden on small screens */}
            <div className="hidden lg:block bg-white h-12 w-48 border border-gray-200 relative rounded-lg">
              <p className="absolute left-5 text-gray-600 top-1/2 -translate-y-1/2">Browse</p>
              <svg className="absolute right-5 w-4 h-4 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 16 16">
                <path d="M13 6L8 11L3 6" stroke="#4E5566" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>

            {/* Search Input - Hidden on small screens */}
            <div className="hidden md:flex bg-white border border-gray-200 h-12 w-full md:w-80 relative rounded-lg">
              <div className="absolute flex gap-3 items-center left-5 top-1/2 -translate-y-1/2">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p452f780} stroke="#1D2026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d={svgPaths.p294aea80} stroke="#1D2026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
                <p className="text-gray-400">What do you want learn...</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <Link to="/create-account" className="bg-[#FF6B3D] text-white px-6 h-12 flex items-center justify-center rounded-lg hover:bg-[#e55a2f] transition-colors">
                <p>Create Account</p>
              </Link>
              <Link to="/signin" className="bg-white border-2 border-[#FF6B3D] text-[#FF6B3D] px-6 h-12 flex items-center justify-center rounded-lg hover:bg-[#fff5f2] transition-colors">
                <p>Sign In</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-transparent to-gray-100 w-full py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 max-w-4xl mx-auto">
            "Learn, play, and feel good"
          </h1>
          <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Introducing a kinder way to learn online. <br />
            Lessons, challenges, and games that support both academic and emotional well-being.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <Link to="/signin" className="bg-[#ffeee8] flex gap-3 h-20 items-center justify-center px-6 w-full sm:w-48 rounded-lg hover:bg-[#ffddd0] transition-colors">
              <p className="text-[#ff6636]">I'm a parent</p>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                <path d="M3.75 12H20.25" stroke="#FF6636" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p176caaa0} stroke="#FF6636" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </Link>
            <Link to="/create-account" className="bg-[#ffeee8] flex gap-3 h-20 items-center justify-center px-6 w-full sm:w-48 rounded-lg hover:bg-[#ffddd0] transition-colors">
              <p className="text-[#ff6636]">I'm a Student</p>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                <path d="M3.75 12H20.25" stroke="#FF6636" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p176caaa0} stroke="#FF6636" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Brain Mascot - Responsive positioning */}
        <div className="absolute right-4 md:right-12 lg:right-20 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 top-1/2 -translate-y-1/2 hidden sm:block">
          <img alt="" className="w-full h-full object-contain" src={image_807469f40c2617f0439926c3c9196b535475d7c9} />
        </div>
      </div>

      {/* Top Features */}
      <div className="bg-white w-full">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
          <h2 className="text-3xl md:text-4xl text-center mb-10">Top Features</h2>
        
          <div className="flex flex-col gap-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Interactive Learning */}
              <div className="bg-[#ebebff] flex flex-col sm:flex-row gap-5 items-center justify-center p-5 rounded-lg">
                <div className="bg-white flex items-center justify-center p-4 w-32 h-32 shrink-0">
                  <img alt="" className="w-full h-full object-contain" src={imgChatGptImageNov232025091417Pm1} />
                </div>
                <div className="flex flex-col gap-2 text-center sm:text-left">
                  <p className="text-gray-900">Interactive Learning</p>
                </div>
              </div>

              {/* Parent Dashboard */}
              <div className="bg-[#f5f7fa] flex flex-col sm:flex-row gap-5 items-center justify-center p-5 rounded-lg">
                <div className="bg-white flex items-center justify-center p-4 w-32 h-32 shrink-0">
                  <img alt="" className="w-full h-full object-contain" src={imgParentDashboard} />
                </div>
                <div className="flex flex-col gap-2 text-center sm:text-left">
                  <p className="text-gray-900">Parent Dashboard</p>
                </div>
              </div>

              {/* Screen Time Management */}
              <div className="bg-[#fff2e5] flex flex-col sm:flex-row gap-5 items-center justify-center p-5 rounded-lg">
                <div className="bg-white flex items-center justify-center p-4 w-32 h-32 shrink-0">
                  <img alt="" className="w-full h-full object-contain" src={imgChatGptImageNov232025090858Pm1} />
                </div>
                <div className="flex flex-col gap-2 text-center sm:text-left">
                  <p className="text-gray-900">Screen-Time Management</p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Positive Feedback */}
              <div className="bg-[#e1f7e3] flex flex-col sm:flex-row gap-5 items-center justify-center p-5 rounded-lg">
                <div className="bg-white flex items-center justify-center p-4 w-32 h-32 shrink-0">
                  <img alt="" className="w-full h-full object-contain" src={imgPositiveFeedback} />
                </div>
                <div className="flex flex-col gap-2 text-center sm:text-left">
                  <p className="text-gray-900">Positive Feedback System</p>
                </div>
              </div>

              {/* Self-Care Reminders */}
              <div className="bg-[#ffeee8] flex flex-col sm:flex-row gap-5 items-center justify-center p-5 rounded-lg">
                <div className="bg-white flex items-center justify-center p-4 w-32 h-32 shrink-0">
                  <img alt="" className="w-full h-full object-contain" src={imgSelfCare} />
                </div>
                <div className="flex flex-col gap-2 text-center sm:text-left">
                  <p className="text-gray-900">Self-Care Reminders</p>
                </div>
              </div>

              {/* Mindfulness Breaks */}
              <div className="bg-[#f5f7fa] flex flex-col sm:flex-row gap-5 items-center justify-center p-5 rounded-lg">
                <div className="bg-white flex items-center justify-center p-4 w-32 h-32 shrink-0">
                  <img alt="" className="w-full h-full object-contain" src={imgChatGptImageNov232025084636Pm1} />
                </div>
                <div className="flex flex-col gap-2 text-center sm:text-left">
                  <p className="text-gray-900">Mindfulness Breaks</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 items-center justify-center mt-8">
            <p className="text-gray-600 text-sm">We have more features.</p>
            <button className="bg-white flex gap-2 items-center">
              <p className="text-[#ff6636] text-sm">Browse All</p>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                <path d="M3.75 12H20.25" stroke="#FF6636" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p176caaa0} stroke="#FF6636" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#f5f7fa] w-full">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Join Our Family */}
            <div className="bg-[#ff6636] flex flex-col md:flex-row gap-6 items-center justify-between p-6 rounded-lg">
              <div className="flex flex-col gap-3 flex-1">
                <h2 className="text-white text-2xl md:text-3xl">Join Our Family Now!</h2>
                <p className="text-white text-sm">Give your child a safe space to learn, play, and unwind. Jumpy Minds turns everyday screen time into fun adventures that build both skills and confidence.</p>
                <Link to="/create-account" className="bg-white border-2 border-white text-white px-6 h-12 flex items-center justify-center gap-3 rounded-lg hover:bg-[#fff5f2] transition-colors w-fit">
                  <p className="text-[#FF6B3D]">Join Now</p>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <path d="M3.75 12H20.25" stroke="#FF6B3D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.p176caaa0} stroke="#FF6B3D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </Link>
              </div>
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-white flex items-center justify-center p-4 shrink-0">
                <img alt="" className="w-full h-full object-contain" src={imgFamily} />
              </div>
            </div>

            {/* Steps */}
            <div className="bg-white flex flex-col gap-6 p-6 md:p-10 rounded-lg">
              <h2 className="text-2xl md:text-3xl text-gray-900">Steps</h2>
              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex gap-4 items-center">
                    <div className="bg-[#ebebff] flex items-center justify-center rounded-full w-14 h-14 shrink-0">
                      <p className="text-[#564ffd] text-2xl">1</p>
                    </div>
                    <p className="text-gray-900">Sign up</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="bg-[#fff0f0] flex items-center justify-center rounded-full w-14 h-14 shrink-0">
                      <p className="text-[#ff6636] text-2xl">2</p>
                    </div>
                    <p className="text-gray-900">Set up your profile</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex gap-4 items-center">
                    <div className="bg-[#fff0f0] flex items-center justify-center rounded-full w-14 h-14 shrink-0">
                      <p className="text-[#e34444] text-2xl">3</p>
                    </div>
                    <p className="text-gray-900">Choose your preferences</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="bg-[#e1f7e3] flex items-center justify-center rounded-full w-14 h-14 shrink-0">
                      <p className="text-[#23bd33] text-2xl">4</p>
                    </div>
                    <p className="text-gray-900">Start your first adventure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Students */}
      <div className="bg-white border-t border-gray-200 w-full">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
          <h2 className="text-3xl md:text-4xl text-center mb-10">Top Students of The Month</h2>
        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Student 1 */}
            <div className="bg-white border border-gray-200 flex flex-col gap-2 items-center pb-2 rounded-lg">
              <img alt="" className="w-full aspect-square object-cover rounded-t-lg" src={imgImage} />
              <p className="text-gray-900 text-sm">Samir Elbatal</p>
              <p className="text-gray-500 text-xs">Grade 2</p>
              <div className="h-px w-full bg-gray-200" />
              <div className="flex items-center justify-center gap-1 px-3">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p9518500} fill="#FD8E1F" />
                </svg>
                <p className="text-gray-600 text-xs">850 Points</p>
              </div>
            </div>

            {/* Student 2 */}
            <div className="bg-white border border-gray-200 flex flex-col gap-2 items-center pb-2 rounded-lg">
              <img alt="" className="w-full aspect-square object-cover rounded-t-lg" src={imgImage1} />
              <p className="text-gray-900 text-sm">Nadine Tarek</p>
              <p className="text-gray-500 text-xs">Grade 3</p>
              <div className="h-px w-full bg-gray-200" />
              <div className="flex items-center justify-center gap-1 px-3">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p9518500} fill="#FD8E1F" />
                </svg>
                <p className="text-gray-600 text-xs">920 Points</p>
              </div>
            </div>

            {/* Student 3 */}
            <div className="bg-white border border-gray-200 flex flex-col gap-2 items-center pb-2 rounded-lg">
              <img alt="" className="w-full aspect-square object-cover rounded-t-lg" src={imgImage2} />
              <p className="text-gray-900 text-sm">Menna Kassem</p>
              <p className="text-gray-500 text-xs">Grade 5</p>
              <div className="h-px w-full bg-gray-200" />
              <div className="flex items-center justify-center gap-1 px-3">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p9518500} fill="#FD8E1F" />
                </svg>
                <p className="text-gray-600 text-xs">1,050 Points</p>
              </div>
            </div>
          </div>

          <div className="flex gap-2 items-center justify-center mt-8">
            <Link to="/create-account" className="bg-white flex gap-2 items-center hover:opacity-80 transition-opacity">
              <p className="text-[#ff6636] text-sm">Become a Student</p>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                <path d="M3.75 12H20.25" stroke="#FF6636" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p176caaa0} stroke="#FF6636" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Trusted Companies */}
      <div className="bg-white w-full">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl md:text-3xl text-gray-900 text-center lg:text-left">2k trusted companies</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full lg:w-auto">
              <div className="bg-white flex items-center justify-center px-8 py-4 shadow-md rounded-lg h-24">
                <svg className="w-20 h-20" fill="none" viewBox="0 0 100 100">
                  <path d={svgPaths.p3a82ac80} fill="#D81F26" />
                </svg>
              </div>
              <div className="bg-white flex items-center justify-center px-8 py-4 shadow-md rounded-lg h-24">
                <svg className="w-20 h-12" fill="none" viewBox="0 0 100 23">
                  <path d={svgPaths.p301f7580} fill="#FF0000" />
                  <path clipRule="evenodd" d={svgPaths.p21f43730} fill="#282828" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p31158e80} fill="#282828" fillRule="evenodd" />
                </svg>
              </div>
              <div className="bg-white flex items-center justify-center px-8 py-4 shadow-md rounded-lg h-24">
                <svg className="w-20 h-16" fill="none" viewBox="0 0 100 33">
                  <path d={svgPaths.p2e3fc2b0} fill="#3780FF" />
                  <path d={svgPaths.pb34f300} fill="#38B137" />
                  <path d={svgPaths.p27e1b700} fill="#FA3913" />
                  <path d={svgPaths.p11ce4100} fill="#FCBD06" />
                  <path d={svgPaths.p3d03fd00} fill="#3780FF" />
                  <path d={svgPaths.p11e92180} fill="#FA3913" />
                </svg>
              </div>
              <div className="bg-white flex items-center justify-center px-8 py-4 shadow-md rounded-lg h-24">
                <svg className="w-20 h-12" fill="none" viewBox="0 0 100 22">
                  <path d={svgPaths.p15d23e00} fill="#706D6E" />
                  <path d={svgPaths.p2963dd30} fill="#F1511B" />
                  <path d={svgPaths.p1b3aebf1} fill="#80CC28" />
                  <path d={svgPaths.p2a5a280} fill="#00ADEF" />
                  <path d={svgPaths.p313aeb00} fill="#FBBC09" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#1d2026] w-full">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 border-t border-gray-700">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-between">
            <div className="flex flex-col gap-8 text-center lg:text-left">
              <h2 className="text-white text-3xl md:text-4xl max-w-xl">Start learning with 20k students around the world.</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/create-account" className="bg-[#FF6B3D] text-white px-6 h-12 flex items-center justify-center rounded-lg hover:bg-[#e55a2f] transition-colors">
                  <p>Join the Family</p>
                </Link>
                <Link to="/" className="bg-white border-2 border-white text-[#FF6B3D] px-6 h-12 flex items-center justify-center rounded-lg hover:bg-[#fff5f2] transition-colors">
                  <p>Browse all Features</p>
                </Link>
              </div>
            </div>
            <div className="flex gap-8 md:gap-12">
              <div className="flex flex-col gap-3 text-center">
                <p className="text-white text-3xl md:text-4xl">1k</p>
                <p className="text-gray-400">Online Lessons/Games</p>
              </div>
              <div className="flex flex-col gap-3 text-center">
                <p className="text-white text-3xl md:text-4xl">89.9%</p>
                <p className="text-gray-400">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#1d2026] w-full">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
          <div className="flex flex-col lg:flex-row gap-12 justify-between">
            {/* Logo and Social */}
            <div className="flex flex-col gap-6 items-center lg:items-start">
              <div className="flex flex-col gap-5 items-center">
                <div className="flex items-center">
                  <img alt="" className="w-24 h-24" src={image_1b2540f5544cb6b9547b306ab25dc37440e77ce4} />
                </div>
                <p className="text-gray-400 text-sm max-w-sm text-center">Lessons, challenges, and games that support both academic and emotional well-being.</p>
              </div>
              <div className="flex gap-3 justify-center items-center w-full">
                <div className="bg-gray-800 p-3 rounded cursor-pointer hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p16b05700} fill="white" />
                  </svg>
                </div>
                <div className="bg-gray-800 p-3 rounded cursor-pointer hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p39477700} fill="white" />
                    <path d={svgPaths.p3f2f4b80} fill="white" />
                    <path d={svgPaths.p2e5d1280} fill="white" />
                  </svg>
                </div>
                <div className="bg-[#ff6636] p-3 rounded shadow-lg cursor-pointer hover:bg-[#e55a2f] transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p18088880} fill="white" />
                    <path d={svgPaths.p2ff5bd00} fill="white" />
                    <path d={svgPaths.p110a5e00} fill="white" />
                  </svg>
                </div>
                <div className="bg-gray-800 p-3 rounded cursor-pointer hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 18 15">
                    <path d={svgPaths.p26460c80} fill="white" />
                  </svg>
                </div>
                <div className="bg-gray-800 p-3 rounded cursor-pointer hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p949300} fill="white" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-5">
              <p className="text-white text-sm uppercase">Quick Links</p>
              <div className="flex flex-col">
                <div className="p-2">
                  <p className="text-gray-400 text-sm">About</p>
                </div>
                <Link to="/create-account" className="p-2 border-b-2 border-[#ff6636] hover:opacity-80 transition-opacity">
                  <p className="text-white text-sm">Become a Student</p>
                </Link>
                <div className="p-2">
                  <p className="text-gray-400 text-sm">Contact</p>
                </div>
                <div className="p-2">
                  <p className="text-gray-400 text-sm">Career</p>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="flex flex-col gap-5">
              <p className="text-white text-sm uppercase">Support</p>
              <div className="flex flex-col">
                <div className="p-2">
                  <p className="text-gray-400 text-sm">Help Center</p>
                </div>
                <div className="p-2">
                  <p className="text-gray-400 text-sm">FAQs</p>
                </div>
                <div className="p-2">
                  <p className="text-gray-400 text-sm">Terms & Condition</p>
                </div>
                <div className="p-2">
                  <p className="text-gray-400 text-sm">Privacy Policy</p>
                </div>
              </div>
            </div>

            {/* Download Our App */}
            <div className="flex flex-col gap-5">
              <p className="text-white text-sm uppercase">Download Our App</p>
              <div className="flex flex-col gap-3">
                <div className="bg-gray-800 flex gap-3 items-center p-3 rounded cursor-pointer hover:bg-gray-700 transition-colors">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div className="flex flex-col">
                    <p className="text-gray-400 text-xs">Download on the</p>
                    <p className="text-white">App Store</p>
                  </div>
                </div>
                <div className="bg-gray-800 flex gap-3 items-center p-3 rounded cursor-pointer hover:bg-gray-700 transition-colors">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                    <path d="M3.609 3.025L13.694 13.11 3.609 23.194a1.976 1.976 0 01-.609-1.419V4.444c0-.55.226-1.05.609-1.419z" fill="#32BBFF"/>
                    <path d="M20.485 11.42l-3.11-1.76-3.681 3.45 3.681 3.45 3.11-1.76c.72-.407 1.205-1.158 1.205-2.19s-.485-1.783-1.205-2.19z" fill="#FEC107"/>
                    <path d="M3.609 3.025l10.085 10.085-3.681 3.45L3.609 3.025z" fill="#F84437"/>
                    <path d="M10.013 16.56l3.681-3.45 3.681 3.45-10.362 5.865 3-5.865z" fill="#2AB347"/>
                  </svg>
                  <div className="flex flex-col">
                    <p className="text-gray-400 text-xs">Get it on</p>
                    <p className="text-white">Google Play</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

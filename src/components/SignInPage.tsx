import image_e1135ef1f8b54b36b59c775b00ecfbb1af36d39c from 'figma:asset/e1135ef1f8b54b36b59c775b00ecfbb1af36d39c.png';
import welcomeBackImage from 'figma:asset/9643375fddcb5ceb55bceadd4ba9f56f2210c8ea.png';
import logoImage from 'figma:asset/3622f114575d6e32261a4828a0673423e1f4e7e2.png';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<'child' | 'parent'>('child');
  const navigate = useNavigate();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (userType === 'child') {
      navigate('/child-dashboard');
    } else {
      navigate('/parent-dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="w-full px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/">
            <img src={logoImage} alt="Jumpy Minds" className="h-12" />
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-gray-600 hidden sm:inline">Don't have account?</span>
            <Link to="/create-account" className="bg-orange-100 hover:bg-orange-200 text-orange-500 px-6 py-2 rounded-lg">
              Create Account
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side - Mascot */}
          <div className="flex justify-center">
            <div className="relative">
              <ImageWithFallback 
                src={image_e1135ef1f8b54b36b59c775b00ecfbb1af36d39c} 
                alt="Welcome Back brain mascot" 
                className="w-full max-w-md rounded-[100px]"
              />
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="max-w-md mx-auto w-full">
            <h1 className="text-4xl mb-8">Sign in to your account</h1>
            
            {/* User Type Selection */}
            <div className="flex gap-4 mb-6">
              <button
                type="button"
                onClick={() => setUserType('child')}
                className={`flex-1 py-3 rounded-lg border-2 transition-colors ${
                  userType === 'child'
                    ? 'border-orange-500 bg-orange-50 text-orange-600'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                I'm a Student
              </button>
              <button
                type="button"
                onClick={() => setUserType('parent')}
                className={`flex-1 py-3 rounded-lg border-2 transition-colors ${
                  userType === 'parent'
                    ? 'border-orange-500 bg-orange-50 text-orange-600'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                I'm a Parent
              </button>
            </div>

            <form onSubmit={handleSignIn} className="space-y-6">
              <div>
                <label className="block mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Username or email address..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block mb-2">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <input type="checkbox" id="remember" className="w-4 h-4 text-orange-500" />
                <label htmlFor="remember" className="ml-2 text-gray-700">
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg flex items-center justify-center gap-2"
              >
                Sign In →
              </button>

              <div className="text-center">
                <p className="text-gray-500 text-sm mb-4">SIGN IN WITH</p>
                <div className="grid grid-cols-3 gap-4">
                  <button
                    type="button"
                    className="border border-gray-300 rounded-lg py-3 hover:bg-gray-50 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="text-sm">Google</span>
                  </button>
                  <button
                    type="button"
                    className="border border-gray-300 rounded-lg py-3 hover:bg-gray-50 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5 fill-blue-600" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="text-sm">Facebook</span>
                  </button>
                  <button
                    type="button"
                    className="border border-gray-300 rounded-lg py-3 hover:bg-gray-50 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                    <span className="text-sm">Apple</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

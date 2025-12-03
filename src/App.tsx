import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignInPage from './components/SignInPage';
import CreateAccountPage from './components/CreateAccountPage';
import ChildInfoPage from './components/ChildInfoPage';
import ChildDashboard from './components/ChildDashboard';
import ParentDashboard from './components/ParentDashboard';
import LessonPage from './components/LessonPage';
import MindfulnessBreak from './components/MindfulnessBreak';
import GamesPage from './components/GamesPage';
import ScreenTimeManagement from './components/ScreenTimeManagement';
import CreativeDrawing from './components/CreativeDrawing';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/child-info" element={<ChildInfoPage />} />
        <Route path="/child-dashboard" element={<ChildDashboard />} />
        <Route path="/parent-dashboard" element={<ParentDashboard />} />
        <Route path="/lesson/:id" element={<LessonPage />} />
        <Route path="/mindfulness" element={<MindfulnessBreak />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/screen-time" element={<ScreenTimeManagement />} />
        <Route path="/creative-drawing" element={<CreativeDrawing />} />
      </Routes>
    </Router>
  );
}

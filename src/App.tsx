import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import { IntroAnimation } from './components/IntroAnimation';

export default function App() {
  const [showIntro, setShowIntro] = useState(false);
  const [hasSeenIntro, setHasSeenIntro] = useState(false);

  useEffect(() => {
    // Check if desktop and if user has already seen the intro in this session
    const isDesktop = window.innerWidth >= 1024; // lg breakpoint
    const introSeen = sessionStorage.getItem('introSeen');
    
    if (isDesktop && !introSeen) {
      setShowIntro(true);
    } else {
      setShowIntro(false);
      setHasSeenIntro(true);
    }
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem('introSeen', 'true');
    setShowIntro(false);
    setHasSeenIntro(true);
  };

  return (
    <Router>
      {showIntro && !hasSeenIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

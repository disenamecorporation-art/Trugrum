import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { LiveDashboardPreview } from './components/LiveDashboardPreview';
import { VenezuelaServicesSlider } from './components/VenezuelaServicesSlider';
import { VenezuelaEcosystemInfo } from './components/VenezuelaEcosystemInfo';
import { VenezuelaCtaBanner } from './components/VenezuelaCtaBanner';
import { AuthModal } from './components/AuthModal';
import { AiAdvisorModal } from './components/AiAdvisorModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<'landing' | 'dashboard'>('landing');
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Default to logged in so the live terminal is fully visible and impressive!
  const [userEmail, setUserEmail] = useState('alexander.vance@trugrum.com');
  const [isAiOpen, setIsAiOpen] = useState(false);

  const handleOpenAuth = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  const handleSuccessfulLogin = (email: string) => {
    setIsLoggedIn(true);
    setUserEmail(email);
    setActiveTab('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab('landing');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0B132B] flex flex-col font-['Montserrat',sans-serif]">
      
      {/* Navbar */}
      <Navbar
        onOpenAuth={handleOpenAuth}
        isLoggedIn={isLoggedIn}
        userEmail={userEmail}
        onLogout={handleLogout}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenAiAdvisor={() => setIsAiOpen(true)}
      />

      {/* Main Content Body */}
      <main className="flex-1">
        {activeTab === 'landing' ? (
          <>
            <Hero
              onGetStarted={() => handleOpenAuth('register')}
              onExploreDashboard={() => setActiveTab('dashboard')}
            />
            <VenezuelaServicesSlider />
            <VenezuelaEcosystemInfo />
            <Features />
            <VenezuelaCtaBanner onOpenAuth={() => handleOpenAuth('register')} />
            <LiveDashboardPreview />
          </>
        ) : (
          <div className="py-8">
            <LiveDashboardPreview />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <AuthModal
        isOpen={isAuthOpen}
        initialMode={authMode}
        onClose={() => setIsAuthOpen(false)}
        onSuccessfulLogin={handleSuccessfulLogin}
      />

      <AiAdvisorModal
        isOpen={isAiOpen}
        onClose={() => setIsAiOpen(false)}
      />

    </div>
  );
}


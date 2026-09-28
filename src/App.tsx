import React, { useState, useEffect } from 'react';
import { ViewState, UserAnswers, CompletedLevel } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GuidanceWizard } from './components/GuidanceWizard';
import { ResultsView } from './components/ResultsView';
import { BrowseAllView } from './components/BrowseAllView';
import { SavedView } from './components/SavedView';
import { Footer } from './components/Footer';

const INITIAL_ANSWERS: UserAnswers = {
  completedLevel: null,
  interests: [],
  subjects: []
};

export default function App() {
  const [view, setView] = useState<ViewState>('home');
  const [answers, setAnswers] = useState<UserAnswers>(INITIAL_ANSWERS);
  const [savedCourseIds, setSavedCourseIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('margdarshak_saved_courses');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('margdarshak_saved_courses', JSON.stringify(savedCourseIds));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  }, [savedCourseIds]);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  const handleStartGuidance = (levelPreset?: CompletedLevel) => {
    if (levelPreset) {
      setAnswers(prev => ({
        ...prev,
        completedLevel: levelPreset
      }));
    }
    setView('guidance');
  };

  const handleGuidanceComplete = (submittedAnswers: UserAnswers) => {
    setAnswers(submittedAnswers);
    setView('results');
  };

  const handleToggleSave = (courseId: string) => {
    setSavedCourseIds(prev =>
      prev.includes(courseId)
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

  const handleClearSaved = () => {
    setSavedCourseIds([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 antialiased">
      {/* Top Navigation */}
      <Header
        currentView={view}
        onNavigate={setView}
        savedCount={savedCourseIds.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {view === 'home' && (
          <Hero
            onStartGuidance={handleStartGuidance}
            onExploreAll={() => setView('browse')}
          />
        )}

        {view === 'guidance' && (
          <GuidanceWizard
            initialAnswers={answers}
            onComplete={handleGuidanceComplete}
            onHome={() => setView('home')}
          />
        )}

        {view === 'results' && (
          <ResultsView
            answers={answers}
            onHome={() => setView('home')}
            onBackToQuestions={() => setView('guidance')}
            savedCourseIds={savedCourseIds}
            onToggleSave={handleToggleSave}
          />
        )}

        {view === 'browse' && (
          <BrowseAllView
            onHome={() => setView('home')}
            onStartGuidance={handleStartGuidance}
            savedCourseIds={savedCourseIds}
            onToggleSave={handleToggleSave}
          />
        )}

        {view === 'saved' && (
          <SavedView
            savedCourseIds={savedCourseIds}
            onToggleSave={handleToggleSave}
            onClearAll={handleClearSaved}
            onHome={() => setView('home')}
            onStartGuidance={() => handleStartGuidance()}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={setView} />
    </div>
  );
}

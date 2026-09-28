import React from 'react';
import { Compass, Bookmark, BookOpen, Sparkles } from 'lucide-react';
import { ViewState } from '../types';

interface HeaderProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  savedCount: number;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate, savedCount }) => {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onNavigate('home')}
          className="group flex items-center gap-2.5 text-left focus:outline-none"
        >
          <div className="w-9 h-9 rounded-lg bg-amber-600 text-white flex items-center justify-center shadow-sm group-hover:bg-amber-700 transition-colors">
            <Compass className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
          </div>
          <div>
            <span className="font-serif-display text-xl font-bold tracking-tight text-slate-900 block leading-tight">
              MargDarshak
            </span>
            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium block">
              Student Career Guide
            </span>
          </div>
        </button>

        {/* Zone 2: 4 Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <button
            onClick={() => onNavigate('home')}
            className={`transition-colors hover:text-slate-900 py-1 ${
              currentView === 'home' ? 'text-amber-700 font-semibold border-b-2 border-amber-600' : ''
            }`}
          >
            Home
          </button>
          <button
            onClick={() => onNavigate('guidance')}
            className={`transition-colors hover:text-slate-900 py-1 ${
              currentView === 'guidance' || currentView === 'results'
                ? 'text-amber-700 font-semibold border-b-2 border-amber-600'
                : ''
            }`}
          >
            Career Guidance
          </button>
          <button
            onClick={() => onNavigate('browse')}
            className={`transition-colors hover:text-slate-900 py-1 ${
              currentView === 'browse' ? 'text-amber-700 font-semibold border-b-2 border-amber-600' : ''
            }`}
          >
            Explore All Courses
          </button>
          <button
            onClick={() => onNavigate('saved')}
            className={`transition-colors hover:text-slate-900 py-1 flex items-center gap-1.5 ${
              currentView === 'saved' ? 'text-amber-700 font-semibold border-b-2 border-amber-600' : ''
            }`}
          >
            <span>Saved Courses</span>
            {savedCount > 0 && (
              <span className="text-xs bg-amber-100 text-amber-800 font-semibold px-1.5 py-0.2 rounded-full tabular-nums">
                {savedCount}
              </span>
            )}
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('saved')}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 relative"
            title="Saved Courses"
            aria-label="Saved Courses"
          >
            <Bookmark className="w-5 h-5" />
            {savedCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-amber-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {savedCount}
              </span>
            )}
          </button>

          <button
            onClick={() => onNavigate('browse')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Course Catalog</span>
          </button>

          <button
            onClick={() => onNavigate('guidance')}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 active:scale-[0.98] rounded-lg shadow-sm transition-all whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start Guidance</span>
          </button>
        </div>
      </div>
    </header>
  );
};

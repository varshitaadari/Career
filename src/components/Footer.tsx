import React from 'react';
import { Compass, Heart, GraduationCap } from 'lucide-react';
import { ViewState } from '../types';

interface FooterProps {
  onNavigate: (view: ViewState) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white border-t border-slate-200 mt-16 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-amber-600 text-white flex items-center justify-center">
                <Compass className="w-4 h-4" />
              </div>
              <span className="font-serif-display text-lg font-bold text-slate-900">
                MargDarshak
              </span>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed text-xs">
              An open, student-friendly career guidance platform helping students in India make informed, confident educational decisions after 10th and Intermediate.
            </p>
            <div className="text-[11px] text-slate-400">
              Free educational resource for students, parents, and educators.
            </div>
          </div>

          {/* After 10th Column */}
          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider">
              After 10th Standard
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-500">
              <li>Intermediate (MPC, BiPC, MEC, CEC, HEC)</li>
              <li>Polytechnic Diploma in CSE, ECE, Civil, Mech</li>
              <li>ITI Vocational Trades (COPA, Electrician)</li>
              <li>Paramedical & Design Diplomas</li>
            </ul>
          </div>

          {/* After Intermediate Column */}
          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider">
              After Intermediate
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-500">
              <li>Engineering (B.Tech CSE & Core)</li>
              <li>Medicine & Pharmacy (MBBS, BDS, B.Pharm)</li>
              <li>Commerce & Management (B.Com, BBA, CA)</li>
              <li>Arts, Law (BA LLB) & Defence (NDA)</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} MargDarshak. Built for student empowerment.
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('home')} className="hover:text-slate-700 cursor-pointer">
              Home
            </button>
            <button onClick={() => onNavigate('guidance')} className="hover:text-slate-700 cursor-pointer">
              Career Guidance
            </button>
            <button onClick={() => onNavigate('browse')} className="hover:text-slate-700 cursor-pointer">
              All Courses
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

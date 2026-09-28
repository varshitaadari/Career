import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  GraduationCap, 
  Compass, 
  BookOpen, 
  Briefcase, 
  CheckCircle2, 
  Layers, 
  ShieldCheck,
  Award
} from 'lucide-react';
import { CompletedLevel } from '../types';

interface HeroProps {
  onStartGuidance: (levelPreset?: CompletedLevel) => void;
  onExploreAll: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartGuidance, onExploreAll }) => {
  return (
    <div className="space-y-16 py-8 md:py-14">
      {/* Primary Hero Section */}
      <section className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white via-amber-50/20 to-slate-50 p-6 sm:p-10 lg:p-14 shadow-xs">
        {/* Subtle decorative background lines */}
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-amber-200/20 blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-orange-100/30 blur-2xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          {/* Metadata Discipline: Unboxed clean text with separators */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-800 tracking-wide">
            <span>Career Pathway Planner</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Classes 10th & Intermediate</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Free & Student-Friendly</span>
          </div>

          {/* Website Name & Heading */}
          <div className="space-y-3">
            <p className="font-serif-display text-amber-700 text-lg md:text-xl font-semibold tracking-normal">
              MargDarshak
            </p>
            <h1 className="font-serif-display text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.15] text-balance">
              Find the Right Career Path for You
            </h1>
          </div>

          {/* Short description */}
          <p className="text-slate-600 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Explore courses and career options based on your interests and strengths.
          </p>

          {/* Primary Action Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onStartGuidance()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white bg-amber-600 hover:bg-amber-700 active:scale-[0.98] rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer whitespace-nowrap"
            >
              <Sparkles className="w-5 h-5 text-amber-200" />
              <span>Start Career Guidance</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <button
              onClick={onExploreAll}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-colors cursor-pointer whitespace-nowrap"
            >
              <BookOpen className="w-4 h-4 text-slate-500" />
              <span>Explore All Courses</span>
            </button>
          </div>

          {/* Zero-Pill Unboxed Feature Highlights */}
          <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 10th Options (Inter, Polytechnic, ITI)
            </span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Intermediate Degree & Professional Paths
            </span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Entrance Exams & Step-by-Step Roadmaps
            </span>
          </div>
        </div>
      </section>

      {/* Two Direct Entry Channels: 10th vs Intermediate */}
      <section className="space-y-6">
        <div className="text-center space-y-1.5 max-w-xl mx-auto">
          <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-slate-900">
            Choose Where You Are Today
          </h2>
          <p className="text-slate-600 text-sm">
            Whether you just passed 10th or completed Intermediate (+2), tailored guidance awaits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Card 1: Completed 10th */}
          <div className="group relative bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-lg">
                10th
              </div>
              <div className="space-y-1">
                <h3 className="font-serif-display text-xl font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                  Completed 10th Standard?
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Decide between 2-year Intermediate streams (MPC, BiPC, MEC, CEC, HEC), 3-year technical Polytechnic diplomas, or practical Vocational ITI courses.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span><strong>Intermediate:</strong> MPC, BiPC, MEC, CEC, HEC</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span><strong>Polytechnic Diplomas:</strong> CSE, ECE, Civil, Mech, EEE</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span><strong>Vocational Trades:</strong> ITI COPA, Electrician, DMLT, Design</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onStartGuidance('10th')}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-900 hover:bg-amber-600 text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
              >
                <span>Find Paths After 10th</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Completed Intermediate */}
          <div className="group relative bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-700 flex items-center justify-center font-bold text-lg">
                12th
              </div>
              <div className="space-y-1">
                <h3 className="font-serif-display text-xl font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                  Completed Intermediate (+2)?
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Discover undergraduate degrees, medical colleges, engineering specializations, Chartered Accountancy (CA), Law, Design, or Defence careers.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <span><strong>Engineering & Computing:</strong> B.Tech CSE/Core, BCA</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <span><strong>Medical & Healthcare:</strong> MBBS, BDS, B.Pharm, Nursing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <span><strong>Commerce & Professional:</strong> B.Com, BBA, CA, Law, NDA</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onStartGuidance('Intermediate')}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-900 hover:bg-amber-600 text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
              >
                <span>Find Paths After Intermediate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How MargDarshak Works (3 Clear Steps) */}
      <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
              Step-by-Step Guidance
            </span>
            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-slate-900">
              How MargDarshak Guides You
            </h2>
            <p className="text-slate-600 text-sm max-w-lg mx-auto">
              Three quick questions to help you navigate through hundreds of educational and career opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-sm">
                1
              </div>
              <h3 className="font-semibold text-slate-900 text-base">Select Completed Level</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tell us whether you completed 10th or Intermediate so we filter courses with the exact eligibility criteria.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-sm">
                2
              </div>
              <h3 className="font-semibold text-slate-900 text-base">Choose Interests & Passion</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                From computers and coding to medicine, business, design, civil services, or core engineering disciplines.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-sm">
                3
              </div>
              <h3 className="font-semibold text-slate-900 text-base">Pick Subjects You Love</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Select subjects like Mathematics, Biology, Computer Science, Commerce, or Arts to match your natural strengths.
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => onStartGuidance()}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              <span>Begin Guidance Questionnaire</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Student Testimonials & Guidance Tips */}
      <section className="space-y-6 max-w-5xl mx-auto">
        <div className="text-center space-y-1">
          <h2 className="font-serif-display text-2xl font-bold text-slate-900">
            Real Stories, Clear Pathways
          </h2>
          <p className="text-slate-600 text-sm">
            Empowering students and parents across India to choose with clarity and confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
            <p className="text-xs text-slate-600 italic leading-relaxed">
              "After 10th I was confused between MPC and Polytechnic. MargDarshak showed me how a Diploma in Computer Engineering lets me do lateral entry to B.Tech directly. Saved my year!"
            </p>
            <div className="pt-2 border-t border-slate-100 text-xs">
              <strong className="block text-slate-800">Rohan K.</strong>
              <span className="text-slate-500">Polytechnic CSE Student, Hyderabad</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
            <p className="text-xs text-slate-600 italic leading-relaxed">
              "I finished BiPC but was anxious about NEET marks. MargDarshak helped me discover B.Pharm, B.Sc Agriculture, and Clinical Lab Technology as amazing backup careers."
            </p>
            <div className="pt-2 border-t border-slate-100 text-xs">
              <strong className="block text-slate-800">Sneha P.</strong>
              <span className="text-slate-500">1st Year B.Pharm Scholar, Vijayawada</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
            <p className="text-xs text-slate-600 italic leading-relaxed">
              "My parents wanted me in engineering, but I loved economics and civics. MargDarshak helped us sit together and explore 5-Year Integrated Law and CA Foundation."
            </p>
            <div className="pt-2 border-t border-slate-100 text-xs">
              <strong className="block text-slate-800">Aditya V.</strong>
              <span className="text-slate-500">CLAT Aspirant (MEC Stream), Pune</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

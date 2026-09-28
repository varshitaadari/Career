import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Home, 
  Check, 
  CheckCircle2, 
  Sparkles,
  Laptop,
  Cpu,
  Stethoscope,
  TrendingUp,
  Palette,
  Atom,
  Landmark,
  Compass,
  Binary,
  FlaskConical,
  Dna,
  Code,
  BadgePercent,
  BookOpen
} from 'lucide-react';
import { CompletedLevel, InterestArea, SubjectLike, UserAnswers } from '../types';
import { INTEREST_OPTIONS, SUBJECT_OPTIONS } from '../data/coursesData';

interface GuidanceWizardProps {
  initialAnswers: UserAnswers;
  onComplete: (answers: UserAnswers) => void;
  onHome: () => void;
}

const INTEREST_ICON_MAP: Record<string, React.ReactNode> = {
  Laptop: <Laptop className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  Stethoscope: <Stethoscope className="w-5 h-5" />,
  TrendingUp: <TrendingUp className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  Atom: <Atom className="w-5 h-5" />,
  Landmark: <Landmark className="w-5 h-5" />,
  Compass: <Compass className="w-5 h-5" />
};

const SUBJECT_ICON_MAP: Record<string, React.ReactNode> = {
  Binary: <Binary className="w-5 h-5" />,
  FlaskConical: <FlaskConical className="w-5 h-5" />,
  Dna: <Dna className="w-5 h-5" />,
  Code: <Code className="w-5 h-5" />,
  BadgePercent: <BadgePercent className="w-5 h-5" />,
  BookOpen: <BookOpen className="w-5 h-5" />
};

export const GuidanceWizard: React.FC<GuidanceWizardProps> = ({
  initialAnswers,
  onComplete,
  onHome
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [level, setLevel] = useState<CompletedLevel | null>(initialAnswers.completedLevel);
  const [selectedInterests, setSelectedInterests] = useState<InterestArea[]>(
    initialAnswers.interests || []
  );
  const [selectedSubjects, setSelectedSubjects] = useState<SubjectLike[]>(
    initialAnswers.subjects || []
  );

  const toggleInterest = (interest: InterestArea) => {
    setSelectedInterests(prev =>
      prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest]
    );
  };

  const toggleSubject = (subject: SubjectLike) => {
    setSelectedSubjects(prev =>
      prev.includes(subject) ? prev.filter(s => s !== subject) : [...prev, subject]
    );
  };

  const handleNext = () => {
    if (step === 1 && level) {
      setStep(2);
    } else if (step === 2 && selectedInterests.length > 0) {
      setStep(3);
    } else if (step === 3 && selectedSubjects.length > 0) {
      onComplete({
        completedLevel: level,
        interests: selectedInterests,
        subjects: selectedSubjects
      });
    }
  };

  const handleBack = () => {
    if (step === 3) {
      setStep(2);
    } else if (step === 2) {
      setStep(1);
    } else {
      onHome();
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-6 sm:py-10 space-y-6">
      {/* Top Navigation Bar with Home & Back */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <button
            onClick={onHome}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>

          <button
            onClick={handleBack}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>
        </div>

        {/* Step Indicator */}
        <div className="text-right">
          <span className="text-xs font-semibold text-amber-700">
            Step {step} of 3
          </span>
          <span className="block text-[11px] text-slate-500">
            {step === 1 && 'Completed Level'}
            {step === 2 && 'Area of Interest'}
            {step === 3 && 'Favorite Subjects'}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
        <div
          className="bg-amber-600 h-1.5 transition-all duration-300 rounded-full"
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>

      {/* QUESTION 1: What have you completed? */}
      {step === 1 && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
              Question 1
            </span>
            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-slate-900">
              What have you completed?
            </h2>
            <p className="text-sm text-slate-600">
              Select your current education milestone to see only the eligible courses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Option 1: 10th */}
            <button
              type="button"
              onClick={() => {
                setLevel('10th');
              }}
              className={`p-6 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                level === '10th'
                  ? 'border-amber-600 bg-amber-50/50 ring-2 ring-amber-500/20 shadow-sm'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-lg">
                  10th
                </div>
                <div
                  className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                    level === '10th'
                      ? 'border-amber-600 bg-amber-600 text-white'
                      : 'border-slate-300 bg-white'
                  }`}
                >
                  {level === '10th' && <Check className="w-3.5 h-3.5" />}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 text-lg">10th Standard</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Secondary School Certificate (SSC / CBSE / ICSE 10th). Ready for Intermediate (+2), Polytechnic Diplomas, or ITI.
                </p>
              </div>

              <div className="text-[11px] font-medium text-amber-800 bg-amber-100/60 px-2 py-1 rounded-md self-start">
                Intermediate · Polytechnic · Vocational
              </div>
            </button>

            {/* Option 2: Intermediate */}
            <button
              type="button"
              onClick={() => {
                setLevel('Intermediate');
              }}
              className={`p-6 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                level === 'Intermediate'
                  ? 'border-amber-600 bg-amber-50/50 ring-2 ring-amber-500/20 shadow-sm'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-lg bg-orange-100 text-orange-800 flex items-center justify-center font-bold text-lg">
                  +2
                </div>
                <div
                  className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                    level === 'Intermediate'
                      ? 'border-amber-600 bg-amber-600 text-white'
                      : 'border-slate-300 bg-white'
                  }`}
                >
                  {level === 'Intermediate' && <Check className="w-3.5 h-3.5" />}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 text-lg">Intermediate (+2 / 12th)</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Higher Secondary (MPC, BiPC, MEC, CEC, HEC / 12th). Ready for Degree colleges, Medical, Engineering, or CA.
                </p>
              </div>

              <div className="text-[11px] font-medium text-orange-800 bg-orange-100/60 px-2 py-1 rounded-md self-start">
                B.Tech · MBBS · B.Com · BBA · Law · NDA
              </div>
            </button>
          </div>

          <div className="flex justify-end pt-4">
            <button
              onClick={handleNext}
              disabled={!level}
              className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl shadow-xs transition-all cursor-pointer ${
                level
                  ? 'bg-amber-600 hover:bg-amber-700 text-white'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span>Next: Area of Interest</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* QUESTION 2: What are you interested in? */}
      {step === 2 && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
              Question 2
            </span>
            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-slate-900">
              What are you interested in?
            </h2>
            <p className="text-sm text-slate-600">
              Select one or more fields that excite your curiosity and ambition.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {INTEREST_OPTIONS.map(opt => {
              const isSelected = selectedInterests.includes(opt.id);
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => toggleInterest(opt.id)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-3.5 ${
                    isSelected
                      ? 'border-amber-600 bg-amber-50/60 ring-2 ring-amber-500/20 shadow-xs'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-lg shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-amber-600 text-white'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {INTEREST_ICON_MAP[opt.icon]}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-slate-900 text-sm block">
                        {opt.label}
                      </span>
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-2 ${
                          isSelected
                            ? 'border-amber-600 bg-amber-600 text-white'
                            : 'border-slate-300 bg-white'
                        }`}
                      >
                        {isSelected && <Check className="w-2.5 h-2.5" />}
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                      {opt.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-4">
            <button
              onClick={() => setStep(1)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>

            <button
              onClick={handleNext}
              disabled={selectedInterests.length === 0}
              className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl shadow-xs transition-all cursor-pointer ${
                selectedInterests.length > 0
                  ? 'bg-amber-600 hover:bg-amber-700 text-white'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span>Next: Favorite Subjects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* QUESTION 3: Which subjects do you like? */}
      {step === 3 && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
              Question 3
            </span>
            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-slate-900">
              Which subjects do you like?
            </h2>
            <p className="text-sm text-slate-600">
              Choose the subjects you enjoy studying or perform well in at school/college.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {SUBJECT_OPTIONS.map(subj => {
              const isSelected = selectedSubjects.includes(subj.id);
              return (
                <button
                  key={subj.id}
                  type="button"
                  onClick={() => toggleSubject(subj.id)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                    isSelected
                      ? 'border-amber-600 bg-amber-50/60 ring-2 ring-amber-500/20 shadow-xs'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`p-2 rounded-lg transition-colors ${
                        isSelected
                          ? 'bg-amber-600 text-white'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {SUBJECT_ICON_MAP[subj.icon]}
                    </div>
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'border-amber-600 bg-amber-600 text-white'
                          : 'border-slate-300 bg-white'
                      }`}
                    >
                      {isSelected && <Check className="w-2.5 h-2.5" />}
                    </div>
                  </div>

                  <div>
                    <span className="font-semibold text-slate-900 text-sm block">
                      {subj.label}
                    </span>
                    <span className="text-xs text-slate-500 block mt-0.5">
                      {subj.subtitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-4">
            <button
              onClick={() => setStep(2)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>

            <button
              onClick={handleNext}
              disabled={selectedSubjects.length === 0}
              className={`inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded-xl shadow-xs transition-all cursor-pointer ${
                selectedSubjects.length > 0
                  ? 'bg-amber-600 hover:bg-amber-700 text-white'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>View Recommended Career Paths</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

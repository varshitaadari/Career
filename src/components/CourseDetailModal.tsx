import React from 'react';
import { 
  X, 
  Clock, 
  GraduationCap, 
  Briefcase, 
  BookOpen, 
  CheckCircle2, 
  Layers, 
  Bookmark, 
  Compass, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { CourseItem } from '../types';

interface CourseDetailModalProps {
  course: CourseItem | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (courseId: string) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  onClose,
  isSaved,
  onToggleSave
}) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-3xl rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 bg-slate-50/70 flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-800">
              <span>{course.category}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="flex items-center gap-1 text-slate-600">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                {course.duration}
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-500">For {course.forLevel}</span>
            </div>
            <h2 className="font-serif-display text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
              {course.name}
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onToggleSave(course.id)}
              className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                isSaved
                  ? 'bg-amber-50 border-amber-300 text-amber-700'
                  : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
              title={isSaved ? 'Remove from Saved' : 'Save this course'}
              aria-label="Save Course"
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-amber-600' : ''}`} />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm text-slate-700">
          {/* Overview */}
          <div className="space-y-2">
            <h3 className="font-serif-display text-base font-semibold text-slate-900">
              Overview
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {course.shortDescription}
            </p>
          </div>

          {/* Eligibility & Ideal Candidate */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
            <div className="space-y-1">
              <strong className="text-xs font-semibold text-slate-900 block uppercase tracking-wider">
                Eligibility
              </strong>
              <p className="text-xs text-slate-600">
                {course.eligibility}
              </p>
            </div>
            <div className="space-y-1">
              <strong className="text-xs font-semibold text-slate-900 block uppercase tracking-wider">
                Pacing & Atmosphere
              </strong>
              <p className="text-xs text-slate-600">
                {course.difficultyOrPacing}
              </p>
            </div>
          </div>

          {/* Who is it ideal for */}
          <div className="space-y-1.5 p-3.5 bg-amber-50/60 border border-amber-200/70 rounded-xl">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-900">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Who Is This Ideal For?</span>
            </div>
            <p className="text-xs text-amber-950/80 leading-relaxed">
              {course.idealForWho}
            </p>
          </div>

          {/* Key Entrance Exams */}
          {course.keyEntranceExams && course.keyEntranceExams.length > 0 && (
            <div className="space-y-2">
              <strong className="text-xs font-semibold text-slate-900 uppercase tracking-wider block">
                Key Entrance Exams to Prepare For
              </strong>
              <div className="flex flex-wrap gap-2">
                {course.keyEntranceExams.map((exam, i) => (
                  <span
                    key={i}
                    className="inline-block text-xs font-medium text-slate-800 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md"
                  >
                    {exam}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Core Subjects Taught */}
          <div className="space-y-2">
            <strong className="text-xs font-semibold text-slate-900 uppercase tracking-wider block">
              Key Subjects Covered
            </strong>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {course.keySubjectsTaught.map((subject, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-700 bg-white p-2 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>{subject}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Further Study Options */}
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-900 uppercase tracking-wider">
              <GraduationCap className="w-4 h-4 text-amber-600" />
              <span>Further Study Options (Degrees & Higher Education)</span>
            </div>
            <ul className="space-y-1.5 pl-1">
              {course.furtherStudy.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                  <span className="text-amber-600 font-bold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Related Career Areas */}
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-900 uppercase tracking-wider">
              <Briefcase className="w-4 h-4 text-amber-600" />
              <span>Related Career Areas & Job Profiles</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {course.relatedCareers.map((career, i) => (
                <span
                  key={i}
                  className="text-xs font-medium text-amber-900 bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded-md"
                >
                  {career}
                </span>
              ))}
            </div>
          </div>

          {/* Step-by-Step Roadmap */}
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-900 uppercase tracking-wider">
              <Layers className="w-4 h-4 text-amber-600" />
              <span>Step-by-Step Pathway</span>
            </div>
            <div className="space-y-2 relative pl-4 border-l-2 border-amber-200">
              {course.roadmapSteps.map((step, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-[21px] top-0.5 w-3 h-3 rounded-full bg-amber-600 ring-2 ring-white" />
                  <p className="text-xs text-slate-700">
                    <strong className="text-slate-900 font-semibold mr-1">Stage {i + 1}:</strong>
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
          <button
            onClick={() => onToggleSave(course.id)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 cursor-pointer"
          >
            <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-amber-600 text-amber-600' : ''}`} />
            <span>{isSaved ? 'Saved to Your Plan' : 'Save Course to Compare'}</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { 
  Home, 
  Trash2, 
  Clock, 
  GraduationCap, 
  Briefcase, 
  Sparkles, 
  Scale, 
  Printer, 
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { CourseItem } from '../types';
import { COURSES_DATABASE } from '../data/coursesData';
import { CourseDetailModal } from './CourseDetailModal';
import { CompareModal } from './CompareModal';

interface SavedViewProps {
  savedCourseIds: string[];
  onToggleSave: (courseId: string) => void;
  onClearAll: () => void;
  onHome: () => void;
  onStartGuidance: () => void;
}

export const SavedView: React.FC<SavedViewProps> = ({
  savedCourseIds,
  onToggleSave,
  onClearAll,
  onHome,
  onStartGuidance
}) => {
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);
  const [compareList, setCompareList] = useState<string[]>([]);
  const [showCompare, setShowCompare] = useState(false);

  const savedCourses = COURSES_DATABASE.filter(c => savedCourseIds.includes(c.id));

  const toggleCompare = (id: string) => {
    if (compareList.includes(id)) {
      setCompareList(prev => prev.filter(cId => cId !== id));
    } else {
      if (compareList.length >= 3) {
        alert('You can compare up to 3 courses.');
        return;
      }
      setCompareList(prev => [...prev, id]);
    }
  };

  const coursesToCompare = COURSES_DATABASE.filter(c => compareList.includes(c.id));

  return (
    <div className="py-6 sm:py-10 space-y-8 max-w-5xl mx-auto">
      {/* Top Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200">
        <button
          onClick={onHome}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors cursor-pointer"
        >
          <Home className="w-4 h-4 text-slate-600" />
          <span>Home</span>
        </button>

        <div className="flex items-center gap-2">
          {compareList.length > 0 && (
            <button
              onClick={() => setShowCompare(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-amber-900 bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded-lg transition-colors cursor-pointer"
            >
              <Scale className="w-3.5 h-3.5" />
              <span>Compare Selected ({compareList.length})</span>
            </button>
          )}

          {savedCourses.length > 0 && (
            <>
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-slate-500" />
                <span>Print Plan</span>
              </button>

              <button
                onClick={onClearAll}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-lg cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear All</span>
              </button>
            </>
          )}
        </div>
      </div>

      <div className="space-y-1">
        <h1 className="font-serif-display text-3xl font-bold text-slate-900">
          Saved Career Pathways
        </h1>
        <p className="text-sm text-slate-600">
          Your shortlisted courses and degrees. You can print this list or compare options side-by-side.
        </p>
      </div>

      {savedCourses.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center mx-auto">
            <BookOpen className="w-6 h-6" />
          </div>
          <h2 className="font-serif-display text-xl font-bold text-slate-900">
            No Saved Courses Yet
          </h2>
          <p className="text-xs text-slate-600 max-w-sm mx-auto">
            Click the bookmark icon on any course card during guidance or when exploring the directory to keep it here.
          </p>
          <button
            onClick={onStartGuidance}
            className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start Career Guidance</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {savedCourses.map(course => {
            const isCompared = compareList.includes(course.id);
            return (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-amber-300 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span className="font-semibold text-amber-800">{course.category}</span>
                        <span aria-hidden="true">·</span>
                        <span className="flex items-center gap-1 font-medium text-slate-700">
                          <Clock className="w-3.5 h-3.5 text-amber-600" />
                          {course.duration}
                        </span>
                      </div>
                      <h2 className="font-serif-display text-lg font-bold text-slate-900 mt-1">
                        {course.name}
                      </h2>
                    </div>

                    <button
                      onClick={() => onToggleSave(course.id)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors cursor-pointer"
                      title="Remove from saved"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {course.shortDescription}
                  </p>

                  <div className="space-y-1 pt-2 border-t border-slate-100">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800">
                      <GraduationCap className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>Next Education:</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      {course.furtherStudy.slice(0, 2).join(', ')}
                    </p>
                  </div>

                  <div className="space-y-1 pt-1">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800">
                      <Briefcase className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>Key Careers:</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      {course.relatedCareers.slice(0, 3).join(', ')}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => toggleCompare(course.id)}
                    className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-md border transition-colors cursor-pointer ${
                      isCompared
                        ? 'bg-amber-100 text-amber-900 border-amber-300'
                        : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900'
                    }`}
                  >
                    <Scale className="w-3 h-3" />
                    <span>{isCompared ? 'In Comparison' : 'Compare'}</span>
                  </button>

                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 hover:text-amber-700 transition-colors cursor-pointer"
                  >
                    <span>Full Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <CourseDetailModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        isSaved={true}
        onToggleSave={onToggleSave}
      />

      {showCompare && (
        <CompareModal
          courses={coursesToCompare}
          onClose={() => setShowCompare(false)}
          onRemove={(id) => setCompareList(prev => prev.filter(cId => cId !== id))}
        />
      )}
    </div>
  );
};

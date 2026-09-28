import React, { useState } from 'react';
import { 
  Home, 
  ArrowLeft, 
  Clock, 
  GraduationCap, 
  Briefcase, 
  Search, 
  Bookmark, 
  Sparkles, 
  ChevronRight,
  Filter
} from 'lucide-react';
import { CourseItem, CompletedLevel } from '../types';
import { COURSES_DATABASE } from '../data/coursesData';
import { CourseDetailModal } from './CourseDetailModal';

interface BrowseAllViewProps {
  onHome: () => void;
  onStartGuidance: (level?: CompletedLevel) => void;
  savedCourseIds: string[];
  onToggleSave: (courseId: string) => void;
}

export const BrowseAllView: React.FC<BrowseAllViewProps> = ({
  onHome,
  onStartGuidance,
  savedCourseIds,
  onToggleSave
}) => {
  const [activeTab, setActiveTab] = useState<'10th' | 'Intermediate'>('10th');
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);

  const levelCourses = COURSES_DATABASE.filter(
    c => c.forLevel === activeTab || c.forLevel === 'Both'
  );

  const categories = ['all', ...Array.from(new Set(levelCourses.map(c => c.category)))];

  const filtered = levelCourses.filter(c => {
    const matchCat = categoryFilter === 'all' || c.category === categoryFilter;
    const matchSearch =
      search.trim() === '' ||
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
      c.relatedCareers.some(r => r.toLowerCase().includes(search.toLowerCase()));

    return matchCat && matchSearch;
  });

  return (
    <div className="py-6 sm:py-10 space-y-8 max-w-6xl mx-auto">
      {/* Header and Controls */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200">
        <button
          onClick={onHome}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors cursor-pointer"
        >
          <Home className="w-4 h-4 text-slate-600" />
          <span>Back to Home</span>
        </button>

        <button
          onClick={() => onStartGuidance(activeTab)}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-xs transition-colors cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-200" />
          <span>Take Quiz for {activeTab}</span>
        </button>
      </div>

      <div className="space-y-2">
        <h1 className="font-serif-display text-3xl font-bold text-slate-900">
          Complete Course & Career Directory
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl">
          Browse through all verified career pathways in India after 10th and Intermediate, with duration, higher studies, and job prospects.
        </p>
      </div>

      {/* Level Switcher (10th vs Intermediate) */}
      <div className="flex border-b border-slate-200">
        <button
          onClick={() => {
            setActiveTab('10th');
            setCategoryFilter('all');
          }}
          className={`py-3 px-6 text-sm font-semibold transition-colors cursor-pointer border-b-2 -mb-[2px] ${
            activeTab === '10th'
              ? 'border-amber-600 text-amber-700'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Pathways After 10th Standard (SSC)
        </button>
        <button
          onClick={() => {
            setActiveTab('Intermediate');
            setCategoryFilter('all');
          }}
          className={`py-3 px-6 text-sm font-semibold transition-colors cursor-pointer border-b-2 -mb-[2px] ${
            activeTab === 'Intermediate'
              ? 'border-amber-600 text-amber-700'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Pathways After Intermediate (+2 / 12th)
        </button>
      </div>

      {/* Filter Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100/90 rounded-xl border border-slate-200">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                categoryFilter === cat
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat === 'all' ? 'All' : cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by name or career..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map(course => {
          const isSaved = savedCourseIds.includes(course.id);
          return (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-amber-400 hover:shadow-sm transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="font-semibold text-amber-800">{course.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="inline-flex items-center gap-1 font-medium text-slate-700">
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
                    className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                      isSaved
                        ? 'bg-amber-50 border-amber-300 text-amber-700'
                        : 'bg-white border-slate-200 text-slate-400 hover:text-slate-800'
                    }`}
                  >
                    <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-amber-600' : ''}`} />
                  </button>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {course.shortDescription}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800">
                    <GraduationCap className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Further Study Options:</span>
                  </div>
                  <ul className="space-y-1 pl-1">
                    {course.furtherStudy.slice(0, 3).map((study, idx) => (
                      <li key={idx} className="text-xs text-slate-600 flex items-start gap-1.5">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>{study}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800">
                    <Briefcase className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Related Careers:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {course.relatedCareers.map((career, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md"
                      >
                        {career}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setSelectedCourse(course)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-amber-700 transition-colors cursor-pointer"
                >
                  <span>Explore Full Guide & Exams</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <CourseDetailModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        isSaved={selectedCourse ? savedCourseIds.includes(selectedCourse.id) : false}
        onToggleSave={onToggleSave}
      />
    </div>
  );
};

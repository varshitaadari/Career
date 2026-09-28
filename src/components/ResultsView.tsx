import React, { useState, useMemo } from 'react';
import { 
  Home, 
  ArrowLeft, 
  Clock, 
  GraduationCap, 
  Briefcase, 
  Search, 
  Bookmark, 
  Sparkles, 
  Printer, 
  RotateCcw, 
  ChevronRight, 
  Scale, 
  Check, 
  SlidersHorizontal,
  Compass,
  Layers,
  BookOpen
} from 'lucide-react';
import { UserAnswers, CourseItem, CourseCategory } from '../types';
import { COURSES_DATABASE } from '../data/coursesData';
import { CourseDetailModal } from './CourseDetailModal';
import { CompareModal } from './CompareModal';

interface ResultsViewProps {
  answers: UserAnswers;
  onHome: () => void;
  onBackToQuestions: () => void;
  savedCourseIds: string[];
  onToggleSave: (courseId: string) => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  answers,
  onHome,
  onBackToQuestions,
  savedCourseIds,
  onToggleSave
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeCourseDetail, setActiveCourseDetail] = useState<CourseItem | null>(null);
  const [compareList, setCompareList] = useState<string[]>([]);
  const [showCompareModal, setShowCompareModal] = useState(false);

  // Compute scored courses based on user answers
  const scoredCourses = useMemo(() => {
    const level = answers.completedLevel;
    // Filter level first
    const eligible = COURSES_DATABASE.filter(c => c.forLevel === level || c.forLevel === 'Both');

    // Calculate match score
    return eligible.map(course => {
      let score = 0;
      const matchedInterests = course.matchingInterests.filter(i => answers.interests.includes(i));
      const matchedSubjects = course.matchingSubjects.filter(s => answers.subjects.includes(s));

      score += matchedInterests.length * 30;
      score += matchedSubjects.length * 20;

      // Bonus if primary interest aligns
      if (answers.interests.length > 0 && course.matchingInterests.includes(answers.interests[0])) {
        score += 15;
      }

      const matchPercentage = Math.min(98, Math.max(50, 45 + score));

      return {
        ...course,
        matchScore: score,
        matchPercentage,
        matchedInterests,
        matchedSubjects
      };
    }).sort((a, b) => b.matchScore - a.matchScore);
  }, [answers]);

  // Extract distinct categories available for this level
  const availableCategories = useMemo(() => {
    const cats = Array.from(new Set(scoredCourses.map(c => c.category)));
    return ['all', ...cats];
  }, [scoredCourses]);

  // Filter by category and search
  const filteredCourses = useMemo(() => {
    return scoredCourses.filter(course => {
      const matchesCat = selectedCategory === 'all' || course.category === selectedCategory;
      const matchesSearch = 
        searchQuery.trim() === '' ||
        course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.relatedCareers.some(c => c.toLowerCase().includes(searchQuery.toLowerCase())) ||
        course.furtherStudy.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCat && matchesSearch;
    });
  }, [scoredCourses, selectedCategory, searchQuery]);

  const toggleCompare = (courseId: string) => {
    if (compareList.includes(courseId)) {
      setCompareList(prev => prev.filter(id => id !== courseId));
    } else {
      if (compareList.length >= 3) {
        alert('You can compare up to 3 courses at a time.');
        return;
      }
      setCompareList(prev => [...prev, courseId]);
    }
  };

  const coursesToCompare = useMemo(() => {
    return COURSES_DATABASE.filter(c => compareList.includes(c.id));
  }, [compareList]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-6 sm:py-10 space-y-8 max-w-6xl mx-auto">
      {/* Top Action & Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200 no-print">
        <div className="flex items-center gap-2">
          {/* Home Button */}
          <button
            onClick={onHome}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors cursor-pointer"
          >
            <Home className="w-4 h-4 text-slate-600" />
            <span>Home</span>
          </button>

          {/* Back Button */}
          <button
            onClick={onBackToQuestions}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-slate-600" />
            <span>Back to Questions</span>
          </button>

          <button
            onClick={onBackToQuestions}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Edit Answers</span>
          </button>
        </div>

        <div className="flex items-center gap-2.5">
          {compareList.length > 0 && (
            <button
              onClick={() => setShowCompareModal(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-amber-900 bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded-lg transition-colors cursor-pointer"
            >
              <Scale className="w-3.5 h-3.5" />
              <span>Compare Selected ({compareList.length})</span>
            </button>
          )}

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors cursor-pointer"
            title="Print or Save as PDF"
          >
            <Printer className="w-3.5 h-3.5 text-slate-500" />
            <span className="hidden sm:inline">Print / Save PDF</span>
          </button>
        </div>
      </div>

      {/* Header Banner Summarizing Student Context */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            {/* Zero-Pill Unboxed Clean Text */}
            <div className="flex items-center gap-2 text-xs text-amber-800 font-semibold tracking-wide">
              <span>Personalized Recommendations</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Based on your Profile</span>
            </div>
            <h1 className="font-serif-display text-2xl sm:text-3xl font-bold text-slate-900">
              Career Options After {answers.completedLevel === '10th' ? '10th Standard' : 'Intermediate (+2)'}
            </h1>
            <p className="text-slate-600 text-sm max-w-2xl leading-relaxed">
              Based on your interest in <span className="font-semibold text-slate-800">{answers.interests.join(', ')}</span> and favorite subjects <span className="font-semibold text-slate-800">{answers.subjects.join(', ')}</span>, we found {scoredCourses.length} viable pathways.
            </p>
          </div>

          <div className="shrink-0 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1 max-w-xs">
            <span className="text-[11px] font-semibold text-slate-500 block uppercase">
              Your Selections
            </span>
            <div className="text-slate-700">
              <strong>Level:</strong> {answers.completedLevel}
            </div>
            <div className="text-slate-700 line-clamp-1">
              <strong>Interests:</strong> {answers.interests.slice(0, 2).join(', ')}{answers.interests.length > 2 ? ` +${answers.interests.length - 2}` : ''}
            </div>
            <div className="text-slate-700 line-clamp-1">
              <strong>Subjects:</strong> {answers.subjects.slice(0, 2).join(', ')}{answers.subjects.length > 2 ? ` +${answers.subjects.length - 2}` : ''}
            </div>
          </div>
        </div>

        {/* Level Specific Guidance Note */}
        <div className="pt-3 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-600">
          <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <span>
            {answers.completedLevel === '10th' ? (
              <>
                <strong>Notice for 10th students:</strong> You can choose <strong>Intermediate (2 Years)</strong> for broader higher education, <strong>Polytechnic (3 Years)</strong> for practical engineering with direct lateral entry to 2nd year B.Tech, or <strong>Vocational/ITI courses</strong> for rapid job readiness.
              </>
            ) : (
              <>
                <strong>Notice for Intermediate students:</strong> Explore 3 to 5-year degree pathways across Engineering, Medicine, Commerce, Business, Law, Design, and Armed Forces (NDA). Check entrance exam dates early.
              </>
            )}
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-4 no-print">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100/90 rounded-xl border border-slate-200">
            {availableCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat === 'all' ? 'All Course Types' : cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search courses or careers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600"
            />
          </div>
        </div>

        <div className="text-xs text-slate-500 flex items-center justify-between">
          <span>Showing {filteredCourses.length} of {scoredCourses.length} career options</span>
          {compareList.length > 0 && (
            <span className="text-amber-800 font-medium">
              {compareList.length} course{compareList.length > 1 ? 's' : ''} chosen for comparison
            </span>
          )}
        </div>
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCourses.map(course => {
          const isSaved = savedCourseIds.includes(course.id);
          const isCompared = compareList.includes(course.id);

          return (
            <div
              key={course.id}
              className={`bg-white rounded-2xl border transition-all flex flex-col justify-between overflow-hidden ${
                course.matchScore > 40
                  ? 'border-slate-200 hover:border-amber-400 hover:shadow-md'
                  : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
              }`}
            >
              {/* Card Header & Content */}
              <div className="p-6 space-y-4">
                {/* Unboxed Metadata Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="font-semibold text-amber-800">{course.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="inline-flex items-center gap-1 font-medium text-slate-700">
                        <Clock className="w-3.5 h-3.5 text-amber-600" />
                        {course.duration}
                      </span>
                    </div>

                    <h2 className="font-serif-display text-lg sm:text-xl font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                      {course.name}
                    </h2>
                  </div>

                  {/* Bookmark Button */}
                  <button
                    onClick={() => onToggleSave(course.id)}
                    className={`p-2 rounded-lg border transition-colors cursor-pointer shrink-0 ${
                      isSaved
                        ? 'bg-amber-50 border-amber-300 text-amber-700'
                        : 'bg-white border-slate-200 text-slate-400 hover:text-slate-800'
                    }`}
                    title={isSaved ? 'Remove from Saved' : 'Save this course'}
                    aria-label="Save Course"
                  >
                    <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-amber-600' : ''}`} />
                  </button>
                </div>

                {/* Short Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {course.shortDescription}
                </p>

                {/* Match indicator / Why this matches */}
                {course.matchedInterests.length > 0 && (
                  <div className="bg-amber-50/70 rounded-xl p-3 border border-amber-200/60 text-xs text-amber-950 space-y-1">
                    <div className="flex items-center gap-1.5 font-semibold text-amber-900">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      <span>Why this fits you:</span>
                    </div>
                    <p className="text-[11px] text-amber-900/80 leading-normal">
                      Matches your interest in <strong>{course.matchedInterests.join(', ')}</strong>
                      {course.matchedSubjects.length > 0 && (
                        <> and strength in <strong>{course.matchedSubjects.join(', ')}</strong></>
                      )}.
                    </p>
                  </div>
                )}

                {/* Further Study Options */}
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
                    {course.furtherStudy.length > 3 && (
                      <li className="text-[11px] text-slate-400 pl-3">
                        +{course.furtherStudy.length - 3} more options
                      </li>
                    )}
                  </ul>
                </div>

                {/* Related Career Areas */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800">
                    <Briefcase className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Related Career Areas:</span>
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

                {/* Key Entrance Exams */}
                {course.keyEntranceExams && course.keyEntranceExams.length > 0 && (
                  <div className="text-xs text-slate-500 pt-1">
                    <span className="font-semibold text-slate-700">Entrance Exams: </span>
                    <span>{course.keyEntranceExams.slice(0, 3).join(', ')}</span>
                  </div>
                )}
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 sm:p-5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => toggleCompare(course.id)}
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                    isCompared
                      ? 'bg-amber-100 text-amber-900 border-amber-300'
                      : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900'
                  }`}
                >
                  <Scale className="w-3.5 h-3.5" />
                  <span>{isCompared ? 'Added to Compare' : 'Compare'}</span>
                </button>

                <button
                  onClick={() => setActiveCourseDetail(course)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-amber-700 transition-colors cursor-pointer"
                >
                  <span>View Full Details & Roadmap</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8 space-y-4">
          <p className="text-slate-600 text-sm">
            No course options found matching "{searchQuery}" in this category.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Bottom Navigation Reminder */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-slate-100 rounded-2xl border border-slate-200 no-print">
        <div>
          <h3 className="font-semibold text-slate-900 text-sm">Want to try different interests or subjects?</h3>
          <p className="text-xs text-slate-600 mt-0.5">
            You can retake the questionnaire anytime to see alternative academic pathways.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onHome}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-200 border border-slate-300 rounded-lg transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Go to Home</span>
          </button>

          <button
            onClick={onBackToQuestions}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-xs transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Retake Guidance</span>
          </button>
        </div>
      </div>

      {/* In-depth Course Detail Modal */}
      <CourseDetailModal
        course={activeCourseDetail}
        onClose={() => setActiveCourseDetail(null)}
        isSaved={activeCourseDetail ? savedCourseIds.includes(activeCourseDetail.id) : false}
        onToggleSave={onToggleSave}
      />

      {/* Side-by-Side Comparison Modal */}
      {showCompareModal && (
        <CompareModal
          courses={coursesToCompare}
          onClose={() => setShowCompareModal(false)}
          onRemove={(id) => setCompareList(prev => prev.filter(cId => cId !== id))}
        />
      )}
    </div>
  );
};

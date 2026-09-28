import React from 'react';
import { X, Clock, GraduationCap, Briefcase, CheckCircle2 } from 'lucide-react';
import { CourseItem } from '../types';

interface CompareModalProps {
  courses: CourseItem[];
  onClose: () => void;
  onRemove: (courseId: string) => void;
}

export const CompareModal: React.FC<CompareModalProps> = ({
  courses,
  onClose,
  onRemove
}) => {
  if (courses.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-5xl rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-100 bg-slate-50/70 flex items-center justify-between">
          <div>
            <h2 className="font-serif-display text-xl font-bold text-slate-900">
              Side-by-Side Course Comparison
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Comparing {courses.length} career option{courses.length > 1 ? 's' : ''} to help you make an informed decision
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Table */}
        <div className="overflow-x-auto p-4 sm:p-6">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="py-3 px-3 font-semibold text-slate-400 uppercase tracking-wider w-40">
                  Feature
                </th>
                {courses.map(course => (
                  <th key={course.id} className="py-3 px-3 align-top min-w-[240px]">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[11px] font-medium text-amber-700 block">
                          {course.category}
                        </span>
                        <h3 className="font-serif-display text-base font-bold text-slate-900">
                          {course.name}
                        </h3>
                      </div>
                      <button
                        onClick={() => onRemove(course.id)}
                        className="text-slate-400 hover:text-rose-600 transition-colors cursor-pointer p-1"
                        title="Remove from comparison"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {/* Duration */}
              <tr>
                <td className="py-3 px-3 font-semibold text-slate-600 bg-slate-50/50">
                  Duration
                </td>
                {courses.map(course => (
                  <td key={course.id} className="py-3 px-3 font-medium text-slate-900">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-600" />
                      {course.duration}
                    </span>
                  </td>
                ))}
              </tr>

              {/* Eligibility */}
              <tr>
                <td className="py-3 px-3 font-semibold text-slate-600 bg-slate-50/50">
                  Eligibility
                </td>
                {courses.map(course => (
                  <td key={course.id} className="py-3 px-3 text-slate-600">
                    {course.eligibility}
                  </td>
                ))}
              </tr>

              {/* Description */}
              <tr>
                <td className="py-3 px-3 font-semibold text-slate-600 bg-slate-50/50">
                  Short Description
                </td>
                {courses.map(course => (
                  <td key={course.id} className="py-3 px-3 text-slate-600 leading-relaxed">
                    {course.shortDescription}
                  </td>
                ))}
              </tr>

              {/* Key Entrance Exams */}
              <tr>
                <td className="py-3 px-3 font-semibold text-slate-600 bg-slate-50/50">
                  Entrance Exams
                </td>
                {courses.map(course => (
                  <td key={course.id} className="py-3 px-3 text-slate-700">
                    {course.keyEntranceExams && course.keyEntranceExams.length > 0 ? (
                      <div className="flex flex-wrap gap-1">
                        {course.keyEntranceExams.map((exam, i) => (
                          <span
                            key={i}
                            className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded text-[11px]"
                          >
                            {exam}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="text-slate-400">Merit / Direct Admissions</span>
                    )}
                  </td>
                ))}
              </tr>

              {/* Further Study Options */}
              <tr>
                <td className="py-3 px-3 font-semibold text-slate-600 bg-slate-50/50">
                  Further Study Options
                </td>
                {courses.map(course => (
                  <td key={course.id} className="py-3 px-3 text-slate-600">
                    <ul className="space-y-1">
                      {course.furtherStudy.slice(0, 4).map((f, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-amber-600 font-bold">•</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>

              {/* Related Careers */}
              <tr>
                <td className="py-3 px-3 font-semibold text-slate-600 bg-slate-50/50">
                  Related Career Areas
                </td>
                {courses.map(course => (
                  <td key={course.id} className="py-3 px-3 text-slate-700">
                    <div className="flex flex-wrap gap-1">
                      {course.relatedCareers.map((c, i) => (
                        <span
                          key={i}
                          className="bg-amber-50 text-amber-900 border border-amber-200/60 px-1.5 py-0.5 rounded text-[11px]"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>

              {/* Ideal Candidate */}
              <tr>
                <td className="py-3 px-3 font-semibold text-slate-600 bg-slate-50/50">
                  Ideal For
                </td>
                {courses.map(course => (
                  <td key={course.id} className="py-3 px-3 text-slate-600 leading-relaxed italic">
                    "{course.idealForWho}"
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg cursor-pointer"
          >
            Close Comparison
          </button>
        </div>
      </div>
    </div>
  );
};

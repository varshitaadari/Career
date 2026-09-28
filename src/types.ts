export type CompletedLevel = '10th' | 'Intermediate';

export type InterestArea =
  | 'Computers & Technology'
  | 'Engineering'
  | 'Medicine & Healthcare'
  | 'Business & Commerce'
  | 'Arts & Design'
  | 'Science'
  | 'Government Services'
  | 'Other';

export type SubjectLike =
  | 'Mathematics'
  | 'Science'
  | 'Biology'
  | 'Computer Science'
  | 'Commerce'
  | 'Arts';

export type CourseCategory =
  | 'Intermediate'
  | 'Polytechnic/Diploma'
  | 'Vocational courses'
  | 'Undergraduate Degree'
  | 'Professional Course'
  | 'Government & Defence';

export interface CourseItem {
  id: string;
  name: string;
  category: CourseCategory;
  forLevel: CompletedLevel | 'Both';
  shortDescription: string;
  duration: string;
  furtherStudy: string[];
  relatedCareers: string[];
  matchingInterests: InterestArea[];
  matchingSubjects: SubjectLike[];
  eligibility: string;
  keyEntranceExams?: string[];
  keySubjectsTaught: string[];
  roadmapSteps: string[];
  idealForWho: string;
  difficultyOrPacing: 'Moderate' | 'Demanding' | 'Hands-on / Practical' | 'Rigorous & Competitive';
}

export interface UserAnswers {
  completedLevel: CompletedLevel | null;
  interests: InterestArea[];
  subjects: SubjectLike[];
}

export type ViewState = 'home' | 'guidance' | 'results' | 'browse' | 'saved';

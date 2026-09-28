import { CourseItem } from '../types';

export const COURSES_DATABASE: CourseItem[] = [
  // ==========================================
  // COURSES FOR STUDENTS AFTER 10TH
  // ==========================================
  {
    id: 'inter-mpc',
    name: 'Intermediate - MPC (Maths, Physics, Chemistry)',
    category: 'Intermediate',
    forLevel: '10th',
    shortDescription: 'The premier 2-year higher secondary foundation for careers in engineering, software, physical sciences, and architecture.',
    duration: '2 Years',
    furtherStudy: [
      'B.Tech / B.E in all branches (CSE, AI, ECE, Mech, Civil)',
      'B.Arch (Architecture)',
      'B.Sc in Mathematics, Physics, Statistics, Data Science',
      'Integrated M.Sc at IISc, IISER, NISER, IITs',
      'Commercial Pilot License training (CPL)'
    ],
    relatedCareers: [
      'Software Engineer',
      'Aerospace / Robotics Engineer',
      'Data Scientist',
      'Architect',
      'Defence Technical Officer',
      'Research Scientist'
    ],
    matchingInterests: ['Engineering', 'Computers & Technology', 'Science', 'Government Services'],
    matchingSubjects: ['Mathematics', 'Science', 'Computer Science'],
    eligibility: 'Pass in 10th / SSC / CBSE / ICSE with good marks in Mathematics & Science',
    keyEntranceExams: ['JEE Main', 'JEE Advanced', 'State EAMCET / EAPCET', 'BITSAT', 'NDA Exam'],
    keySubjectsTaught: ['Mathematics (Algebra, Calculus, Trigo)', 'Physics', 'Chemistry', 'English', 'Second Language'],
    roadmapSteps: [
      'Complete 10th Board Exams',
      'Enroll in 2-year Intermediate MPC (Junior & Senior College)',
      'Prepare for Engineering Entrance Exams (JEE, EAPCET)',
      'Join B.Tech / B.Sc / Defence Academy'
    ],
    idealForWho: 'Students who love problem solving, analytical thinking, numbers, and aspire to build software, machines, or scientific solutions.',
    difficultyOrPacing: 'Rigorous & Competitive'
  },
  {
    id: 'inter-bipc',
    name: 'Intermediate - BiPC (Biology, Physics, Chemistry)',
    category: 'Intermediate',
    forLevel: '10th',
    shortDescription: 'The essential 2-year stepping stone for medicine, dentistry, pharmacy, biotechnology, and agricultural sciences.',
    duration: '2 Years',
    furtherStudy: [
      'MBBS (Medicine & Surgery)',
      'BDS (Dental Surgery)',
      'B.Pharm / Pharm.D',
      'B.Sc Nursing',
      'B.Sc Agriculture / Horticulture',
      'B.V.Sc (Veterinary Science)',
      'B.P.T (Physiotherapy)',
      'B.Sc Biotechnology / Genetics'
    ],
    relatedCareers: [
      'Doctor / Medical Specialist',
      'Dental Surgeon',
      'Clinical Pharmacist',
      'Biotech Researcher',
      'Agricultural Officer',
      'Cardiology / Radiology Technologist'
    ],
    matchingInterests: ['Medicine & Healthcare', 'Science', 'Government Services', 'Other'],
    matchingSubjects: ['Biology', 'Science'],
    eligibility: 'Pass in 10th / SSC with strong foundation in Biology / Natural Sciences',
    keyEntranceExams: ['NEET-UG', 'ICAR AIEEA', 'State Paramedical & Agri EAPCET', 'AIIMS Nursing'],
    keySubjectsTaught: ['Botany (Plant Biology)', 'Zoology (Animal Biology & Human Anatomy)', 'Physics', 'Chemistry', 'Languages'],
    roadmapSteps: [
      'Complete 10th class board',
      'Enroll in 2-year Intermediate BiPC stream',
      'Prepare for NEET-UG or Agri/Pharmacy entrance tests',
      'Gain admission into Medical, Dental, or Allied Health programs'
    ],
    idealForWho: 'Students with deep curiosity about human anatomy, living organisms, healthcare, drug research, and helping people heal.',
    difficultyOrPacing: 'Rigorous & Competitive'
  },
  {
    id: 'inter-mec',
    name: 'Intermediate - MEC (Maths, Economics, Commerce)',
    category: 'Intermediate',
    forLevel: '10th',
    shortDescription: 'A dynamic 2-year stream uniting mathematical analytical rigor with financial systems, economics, and business management.',
    duration: '2 Years',
    furtherStudy: [
      'Chartered Accountancy (CA Foundation)',
      'CMA (Cost & Management Accounting)',
      'B.Com (Computers / Honours / Data Analytics)',
      'BBA / BMS (Business Administration)',
      'B.Sc Statistics / Actuarial Science',
      'Integrated 5-Year Law (BA LLB / BBA LLB)'
    ],
    relatedCareers: [
      'Chartered Accountant (CA)',
      'Financial Analyst / Investment Banker',
      'Actuary / Risk Modeler',
      'Corporate Financial Controller',
      'Business Consultant'
    ],
    matchingInterests: ['Business & Commerce', 'Computers & Technology', 'Government Services'],
    matchingSubjects: ['Mathematics', 'Commerce'],
    eligibility: 'Pass in 10th with interest in numerical calculations and business markets',
    keyEntranceExams: ['CA Foundation', 'CUET-UG', 'IPMAT (IIM 5-Year MBA)', 'CLAT (Law)'],
    keySubjectsTaught: ['Mathematics (Commercial & Calculus)', 'Economics (Macro & Micro)', 'Commerce & Accountancy', 'Languages'],
    roadmapSteps: [
      'Pass 10th Class',
      'Complete 2-year Intermediate MEC course',
      'Register for CA Foundation or top University entrance (CUET/IPMAT)',
      'Pursue Professional Finance / Accounting / Business degrees'
    ],
    idealForWho: 'Students who are strong in mathematics but gravitate towards finance, stock markets, banking, and strategic corporate decisions.',
    difficultyOrPacing: 'Demanding'
  },
  {
    id: 'inter-cec',
    name: 'Intermediate - CEC (Commerce, Economics, Civics)',
    category: 'Intermediate',
    forLevel: '10th',
    shortDescription: 'A balanced 2-year commerce and governance curriculum focused on trade, banking, financial accounting, and public administration.',
    duration: '2 Years',
    furtherStudy: [
      'B.Com (General, Taxation, E-Commerce, Banking)',
      'BBA (Management)',
      'Company Secretary (CS Executive Entrance)',
      'Integrated 5-Year Law (BBA LLB / BA LLB)',
      'Civil Services foundation degree'
    ],
    relatedCareers: [
      'Accountant / Tax Consultant',
      'Bank Probationary Officer (PO)',
      'Company Secretary',
      'Corporate Legal Advisor',
      'Retail & Supply Chain Manager'
    ],
    matchingInterests: ['Business & Commerce', 'Government Services', 'Arts & Design'],
    matchingSubjects: ['Commerce', 'Arts'],
    eligibility: 'Pass in 10th / Matriculation from any recognized board',
    keyEntranceExams: ['CUET-UG', 'CSEET (Company Secretary)', 'CLAT / LSAT', 'State Law CET'],
    keySubjectsTaught: ['Accountancy & Bookkeeping', 'Commerce & Business Organisation', 'Economics', 'Civics / Political Science'],
    roadmapSteps: [
      'Pass 10th standard',
      'Enroll in 2-year Intermediate CEC',
      'Clear 12th Board and entrance for B.Com / BBA / Law',
      'Launch accounting practice or prepare for Banking / Govt jobs'
    ],
    idealForWho: 'Students wanting a solid, less math-heavy foundation in commerce, accountancy, banking, and public laws.',
    difficultyOrPacing: 'Moderate'
  },
  {
    id: 'inter-hec',
    name: 'Intermediate - HEC (History, Economics, Civics)',
    category: 'Intermediate',
    forLevel: '10th',
    shortDescription: 'The classical humanities stream providing deep grounding in political systems, historical context, and socioeconomic policy.',
    duration: '2 Years',
    furtherStudy: [
      'BA in Political Science, History, Economics, Sociology',
      'Integrated BA LLB (5 Years Law)',
      'BA Journalism & Mass Communication',
      'Bachelor of Social Work (BSW)',
      'Civil Services IAS / IPS Foundation'
    ],
    relatedCareers: [
      'Civil Services Officer (IAS / IPS / IFS)',
      'Journalist / Editor / Media Anchor',
      'Public Policy Analyst',
      'Advocate / Legal Counsel',
      'Historian / Heritage Curator'
    ],
    matchingInterests: ['Government Services', 'Arts & Design', 'Business & Commerce', 'Other'],
    matchingSubjects: ['Arts'],
    eligibility: 'Pass in 10th standard',
    keyEntranceExams: ['CUET-UG', 'CLAT (Law)', 'UPSC Civil Services (after graduation)', 'State PSC'],
    keySubjectsTaught: ['World & Indian History', 'Civics & Indian Constitution', 'Economics & Public Policy', 'English Literature'],
    roadmapSteps: [
      'Complete 10th class',
      'Enroll in 2-year HEC stream',
      'Complete BA / BA LLB at premier central universities',
      'Appear for UPSC Civil Services or state government recruitment exams'
    ],
    idealForWho: 'Passionate readers and critical thinkers who want to serve the nation, master diplomacy, advocate in court, or write news.',
    difficultyOrPacing: 'Moderate'
  },
  {
    id: 'diploma-cse',
    name: 'Polytechnic Diploma in Computer Engineering',
    category: 'Polytechnic/Diploma',
    forLevel: '10th',
    shortDescription: 'A practical, 3-year hands-on technical diploma in programming, computer hardware, web development, and database administration.',
    duration: '3 Years',
    furtherStudy: [
      'Lateral Entry directly into 2nd Year B.Tech CSE / IT (via ECET exam)',
      'BCA / B.Sc Computer Science',
      'Advanced specialized diplomas in AI / Cyber Security'
    ],
    relatedCareers: [
      'Junior Software Developer',
      'Frontend / Full-stack Web Developer',
      'IT Support & Network Engineer',
      'Database Technician',
      'QA Test Analyst'
    ],
    matchingInterests: ['Computers & Technology', 'Engineering'],
    matchingSubjects: ['Computer Science', 'Mathematics', 'Science'],
    eligibility: 'Pass in 10th with Mathematics and Science',
    keyEntranceExams: ['State POLYCET / Polytechnic Entrance Exams'],
    keySubjectsTaught: ['C / C++ & Python Programming', 'Data Structures', 'Operating Systems', 'Web Tech & DBMS', 'Computer Hardware'],
    roadmapSteps: [
      'Appear for POLYCET after 10th',
      'Complete 3-year Diploma with lab-intensive training & industrial internship',
      'Take ECET to enter 2nd-year B.Tech directly (lateral entry) or enter IT workforce'
    ],
    idealForWho: 'Students eager to jump straight into coding and computers without waiting 2 years in general school intermediate.',
    difficultyOrPacing: 'Hands-on / Practical'
  },
  {
    id: 'diploma-ece',
    name: 'Polytechnic Diploma in Electronics & Communication (ECE)',
    category: 'Polytechnic/Diploma',
    forLevel: '10th',
    shortDescription: '3-year technical program covering semiconductor devices, microcontrollers, embedded IoT systems, and wireless telecommunications.',
    duration: '3 Years',
    furtherStudy: [
      'Direct Lateral Entry into 2nd year B.Tech ECE (via ECET)',
      'B.Tech in Robotics / IoT / Telecommunications',
      'Specialized Embedded Systems certifications'
    ],
    relatedCareers: [
      'Electronics Hardware Technician',
      'Embedded IoT Associate',
      'Telecom Infrastructure Technician',
      'PCB Design Assistant',
      'Defence Electronics Technical Staff'
    ],
    matchingInterests: ['Engineering', 'Computers & Technology', 'Science'],
    matchingSubjects: ['Science', 'Mathematics', 'Computer Science'],
    eligibility: '10th pass with Science and Math',
    keyEntranceExams: ['POLYCET / State Diploma Entrance'],
    keySubjectsTaught: ['Electronic Circuits', 'Digital Electronics', 'Microprocessors & Microcontrollers', 'Communication Systems', 'Sensors & IoT'],
    roadmapSteps: [
      'Join Polytechnic ECE after 10th',
      'Master electronic circuit prototyping and firmware coding',
      'Take lateral entry to B.Tech ECE or take technical jobs in telecom/manufacturing'
    ],
    idealForWho: 'Makers who love gadgets, circuit boards, drones, transmitters, and microcontrollers like Arduino and ESP32.',
    difficultyOrPacing: 'Hands-on / Practical'
  },
  {
    id: 'diploma-mech',
    name: 'Polytechnic Diploma in Mechanical Engineering',
    category: 'Polytechnic/Diploma',
    forLevel: '10th',
    shortDescription: 'Comprehensive 3-year workshop and laboratory training in machine design, CAD/CAM drafting, manufacturing processes, and thermodynamics.',
    duration: '3 Years',
    furtherStudy: [
      'Lateral entry into 2nd year B.Tech Mechanical Engineering',
      'B.Tech in Automobile / Mechatronics / Aerospace',
      'Post-Diploma in CNC Machining / Tool Design'
    ],
    relatedCareers: [
      'Junior Mechanical Engineer',
      'CAD Draftsman / Modeler',
      'Manufacturing Plant Supervisor',
      'Automotive Quality Inspector',
      'Railway Junior Engineer (RRB JE)'
    ],
    matchingInterests: ['Engineering', 'Government Services', 'Science'],
    matchingSubjects: ['Mathematics', 'Science'],
    eligibility: 'Pass in 10th with minimum 35% in Math and Science',
    keyEntranceExams: ['State POLYCET'],
    keySubjectsTaught: ['Engineering Mechanics', 'CAD / SolidWorks', 'Thermodynamics & Fluid Power', 'Manufacturing Technology', 'Automobile Engineering'],
    roadmapSteps: [
      'Clear 10th and get admission through POLYCET',
      'Complete 3-year hands-on curriculum with 6-month industrial training',
      'Opt for lateral entry B.Tech or appear for RRB JE / PSU recruitment'
    ],
    idealForWho: 'Students fascinated by engines, cars, heavy machinery, 3D modeling, and physical fabrication.',
    difficultyOrPacing: 'Hands-on / Practical'
  },
  {
    id: 'diploma-civil',
    name: 'Polytechnic Diploma in Civil Engineering',
    category: 'Polytechnic/Diploma',
    forLevel: '10th',
    shortDescription: '3-year applied engineering training in building construction, land surveying, structural drafting, estimation, and site supervision.',
    duration: '3 Years',
    furtherStudy: [
      'Lateral entry into 2nd year B.Tech Civil Engineering',
      'B.Arch / Diploma in Advanced Surveying / GIS',
      'Government Engineering Service Examinations'
    ],
    relatedCareers: [
      'Construction Site Supervisor',
      'AutoCAD Civil Draftsman',
      'Land Surveyor / Total Station Operator',
      'Building Material Quality Tester',
      'Public Works Department (PWD) Overseer'
    ],
    matchingInterests: ['Engineering', 'Government Services', 'Arts & Design'],
    matchingSubjects: ['Mathematics', 'Science', 'Arts'],
    eligibility: '10th pass with Science and Mathematics',
    keyEntranceExams: ['POLYCET'],
    keySubjectsTaught: ['Surveying & Levelling', 'Building Construction & Materials', 'AutoCAD Civil', 'Structural Mechanics', 'Estimation & Costing'],
    roadmapSteps: [
      'Enroll in 3-year Civil Diploma post-10th',
      'Undertake field surveys and site internships',
      'Join B.Tech Civil directly or work on highway/infrastructure projects'
    ],
    idealForWho: 'Students who enjoy outdoor fieldwork, construction design, map making, and tangible infrastructure building.',
    difficultyOrPacing: 'Hands-on / Practical'
  },
  {
    id: 'diploma-eee',
    name: 'Polytechnic Diploma in Electrical & Electronics Engineering',
    category: 'Polytechnic/Diploma',
    forLevel: '10th',
    shortDescription: 'Practical 3-year training covering electrical power generation, transformers, industrial motors, solar power, and EV charging.',
    duration: '3 Years',
    furtherStudy: [
      'Direct Lateral entry into 2nd year B.Tech EEE',
      'B.Tech in Power Systems / Renewable Energy',
      'Certified Energy Auditor diplomas'
    ],
    relatedCareers: [
      'Electrical Substation Supervisor',
      'Renewable / Solar Energy Technician',
      'Industrial Maintenance Electrician',
      'EV Charging Systems Installer',
      'State Electricity Board Junior Engineer'
    ],
    matchingInterests: ['Engineering', 'Science', 'Government Services'],
    matchingSubjects: ['Mathematics', 'Science'],
    eligibility: '10th pass with Science and Math',
    keyEntranceExams: ['POLYCET'],
    keySubjectsTaught: ['Electrical Circuits', 'AC/DC Machines & Transformers', 'Power Transmission', 'Industrial Automation (PLC)', 'Renewable Power'],
    roadmapSteps: [
      'Join Diploma EEE through POLYCET after 10th',
      'Get hands-on laboratory and transformer substation training',
      'Transfer to B.Tech EEE via ECET or work in power/industrial utilities'
    ],
    idealForWho: 'Students interested in electric power, clean renewable solar/wind energy, electric vehicles, and high-voltage systems.',
    difficultyOrPacing: 'Hands-on / Practical'
  },
  {
    id: 'vocational-copa',
    name: 'Vocational ITI - Computer Operator & Programming Assistant (COPA)',
    category: 'Vocational courses',
    forLevel: '10th',
    shortDescription: '1-year job-ready vocational course offering practical skills in office automation, web page authoring, basic programming, and IT support.',
    duration: '1 Year',
    furtherStudy: [
      'Polytechnic Diploma in Computer Engineering (Lateral entry)',
      'National Apprenticeship Certificate (NAC)',
      'Specialized digital marketing / web frontend bootcamps'
    ],
    relatedCareers: [
      'Computer Operator',
      'Data Entry & MIS Executive',
      'Office IT Assistant',
      'Junior Web Developer',
      'E-Governance Center Operator'
    ],
    matchingInterests: ['Computers & Technology', 'Government Services', 'Other'],
    matchingSubjects: ['Computer Science'],
    eligibility: 'Pass in 10th standard',
    keyEntranceExams: ['State ITI Merit Admission'],
    keySubjectsTaught: ['Computer Basics & OS', 'Office Suites & Accounting Software', 'HTML/CSS & JavaScript Basics', 'Python Fundamentals', 'Cyber Security Basics'],
    roadmapSteps: [
      'Enroll in government or private ITI institute',
      'Complete 1-year training and obtain NCVT National Trade Certificate',
      'Take 1-year paid apprenticeship or pursue polytechnic lateral entry'
    ],
    idealForWho: 'Students looking for a rapid, low-cost, 1-year practical credential to begin earning in IT or administrative roles.',
    difficultyOrPacing: 'Hands-on / Practical'
  },
  {
    id: 'vocational-dmlt',
    name: 'Vocational Diploma in Medical Laboratory Technology (DMLT)',
    category: 'Vocational courses',
    forLevel: '10th',
    shortDescription: '2-year paramedical vocational diploma qualifying candidates to operate clinical diagnostics, blood analysis, pathology, and lab tests.',
    duration: '2 Years',
    furtherStudy: [
      'B.Sc in Medical Laboratory Technology (B.Sc MLT)',
      'Advanced Diploma in Histopathology / Blood Banking',
      'Hospital Quality Management certifications'
    ],
    relatedCareers: [
      'Medical Lab Technician',
      'Pathology Lab Assistant',
      'Blood Bank Phlebotomist',
      'Diagnostic Equipment Operator',
      'Hospital Clinical Assistant'
    ],
    matchingInterests: ['Medicine & Healthcare', 'Science'],
    matchingSubjects: ['Biology', 'Science'],
    eligibility: 'Pass in 10th class with Science',
    keyEntranceExams: ['State Paramedical Board Merit Admissions'],
    keySubjectsTaught: ['Clinical Pathology', 'Hematology & Blood Banking', 'Biochemistry Diagnostics', 'Microbiology & Parasitology', 'Lab Safety'],
    roadmapSteps: [
      'Join Paramedical Board recognized DMLT course after 10th',
      'Complete hospital rotations and clinical specimen testing',
      'Register with State Paramedical Council and work in diagnostic chains or hospitals'
    ],
    idealForWho: 'Students interested in medical science and healthcare who prefer lab work and diagnostics over direct patient surgery.',
    difficultyOrPacing: 'Hands-on / Practical'
  },
  {
    id: 'vocational-electrician',
    name: 'Vocational ITI - Electrician & Wireman',
    category: 'Vocational courses',
    forLevel: '10th',
    shortDescription: '2-year job-ready vocational trade certification in residential wiring, industrial motor maintenance, safety codes, and solar panel setups.',
    duration: '2 Years',
    furtherStudy: [
      'Polytechnic Diploma in Electrical Engineering (Direct 2nd Year Lateral)',
      'National Apprenticeship Certificate (NAC)',
      'Authorized Wireman & Supervisor Electrical License (Grade A/B)'
    ],
    relatedCareers: [
      'Certified Industrial Electrician',
      'Solar Photovoltaic Technician',
      'Railway Traction Technician',
      'Commercial Building Electrical Supervisor',
      'Independent Electrical Contractor'
    ],
    matchingInterests: ['Engineering', 'Government Services', 'Other'],
    matchingSubjects: ['Science', 'Mathematics'],
    eligibility: 'Pass in 10th with Science and Math',
    keyEntranceExams: ['NCVT / State ITI Admissions'],
    keySubjectsTaught: ['Trade Theory & Safety', 'Domestic & Industrial Wiring', 'AC/DC Motors & Starters', 'Earthing & Lightning Arrestors', 'Solar PV Installation'],
    roadmapSteps: [
      'Complete 2-year ITI Electrician course',
      'Complete 1-year apprenticeship in railway, PSU, or manufacturing plant',
      'Earn licensed electrician badge or lateral shift to Diploma EEE'
    ],
    idealForWho: 'Hands-on learners who want dependable trade skills with high demand across construction, railways, and factories.',
    difficultyOrPacing: 'Hands-on / Practical'
  },
  {
    id: 'vocational-design',
    name: 'Vocational Diploma in Graphic Design & Digital Arts',
    category: 'Vocational courses',
    forLevel: '10th',
    shortDescription: '1 to 2-year creative diploma in visual identity, digital typography, vector illustration, video editing, and layout production.',
    duration: '1 - 2 Years',
    furtherStudy: [
      'B.Des (Bachelor of Design) / BFA in Digital Arts',
      'Diploma in 3D Animation & VFX',
      'Advanced UI/UX Design certificates'
    ],
    relatedCareers: [
      'Graphic Designer',
      'Social Media Visual Creator',
      'Packaging / Print Layout Artist',
      'Video Editor & Motion Designer',
      'Freelance Digital Illustrator'
    ],
    matchingInterests: ['Arts & Design', 'Computers & Technology', 'Other'],
    matchingSubjects: ['Arts', 'Computer Science'],
    eligibility: 'Pass in 10th standard; creative portfolio or interest in sketching is helpful',
    keyEntranceExams: ['Institute Creative Aptitude Tests'],
    keySubjectsTaught: ['Design Principles & Color Theory', 'Photoshop & Illustrator', 'Typography & Branding', 'Digital Photography Basics', 'Print Production'],
    roadmapSteps: [
      'Join accredited design vocational program post-10th',
      'Build a strong portfolio of real design assets and brand projects',
      'Begin freelancing, join an advertising studio, or pursue a full B.Des degree'
    ],
    idealForWho: 'Creative students who love drawing, colors, visual storytelling, and digital social media aesthetics.',
    difficultyOrPacing: 'Hands-on / Practical'
  },

  // ==========================================
  // COURSES FOR STUDENTS AFTER INTERMEDIATE
  // ==========================================
  {
    id: 'degree-btech-cse',
    name: 'B.Tech in Computer Science & Engineering (CSE / AI & ML)',
    category: 'Undergraduate Degree',
    forLevel: 'Intermediate',
    shortDescription: 'The foremost 4-year undergraduate degree in software engineering, algorithms, artificial intelligence, cloud architectures, and cybersecurity.',
    duration: '4 Years',
    furtherStudy: [
      'M.Tech in CSE / AI / Cyber Security (via GATE)',
      'MS in Computer Science abroad (USA, Germany, UK)',
      'MBA in Technology Management / Product Leadership',
      'Ph.D. in Computer Science / Artificial Intelligence'
    ],
    relatedCareers: [
      'Software Development Engineer (SDE)',
      'Machine Learning / AI Engineer',
      'Full-Stack Web & Cloud Developer',
      'Data Scientist',
      'Cybersecurity Specialist'
    ],
    matchingInterests: ['Computers & Technology', 'Engineering', 'Science'],
    matchingSubjects: ['Computer Science', 'Mathematics', 'Science'],
    eligibility: 'Pass in Intermediate / 12th with MPC (Maths, Physics, Chemistry) and minimum 50-60%',
    keyEntranceExams: ['JEE Main', 'JEE Advanced', 'BITSAT', 'State EAMCET / KCET / MHT-CET', 'VITEEE', 'SRMJEEE'],
    keySubjectsTaught: ['Data Structures & Algorithms', 'Operating Systems & DBMS', 'AI & Machine Learning', 'Computer Networks', 'Cloud Computing'],
    roadmapSteps: [
      'Clear Intermediate MPC Board',
      'Qualify in JEE Main or State Engineering CET',
      'Complete 4-year B.Tech with project builds, open source, and campus internships',
      'Get placed in top tech companies or pursue MS/M.Tech'
    ],
    idealForWho: 'Students passionate about coding, algorithms, digital products, and building high-impact software systems.',
    difficultyOrPacing: 'Demanding'
  },
  {
    id: 'degree-btech-core',
    name: 'B.Tech in Core Engineering (ECE / Mechanical / Civil / EEE)',
    category: 'Undergraduate Degree',
    forLevel: 'Intermediate',
    shortDescription: '4-year professional engineering degree focused on tangible hardware, physical infrastructure, robotics, energy, and smart manufacturing.',
    duration: '4 Years',
    furtherStudy: [
      'M.Tech in VLSI, Robotics, Structural Eng, Power Systems (GATE)',
      'Public Sector Undertakings (PSUs: ISRO, BHEL, ONGC, NTPC, IOCL)',
      'Indian Engineering Services (UPSC ESE)',
      'MS in Core Engineering abroad'
    ],
    relatedCareers: [
      'Robotics / Automation Engineer',
      'VLSI & Chip Design Engineer',
      'Structural / Infrastructure Engineer',
      'PSU Executive Engineer',
      'Renewable Energy Project Manager'
    ],
    matchingInterests: ['Engineering', 'Science', 'Government Services'],
    matchingSubjects: ['Mathematics', 'Science'],
    eligibility: 'Intermediate MPC with minimum 50% aggregate',
    keyEntranceExams: ['JEE Main', 'State EAPCET / CETs', 'BITSAT', 'UPSC ESE (Post-degree)'],
    keySubjectsTaught: ['Solid Mechanics & Thermodynamics', 'Embedded Systems & VLSI', 'Hydraulics & Structural Design', 'Control Systems', 'Industrial IoT'],
    roadmapSteps: [
      'Join accredited engineering college through competitive entrance',
      'Specialize in core domain labs, CAD/EDA tools, and industry capstones',
      'Crack GATE for PSU recruitment/M.Tech or join leading infrastructure and core tech firms'
    ],
    idealForWho: 'Students fascinated by physical systems, bridges, chips, electric mobility, power plants, and aerospace.',
    difficultyOrPacing: 'Demanding'
  },
  {
    id: 'degree-bca',
    name: 'BCA (Bachelor of Computer Applications)',
    category: 'Undergraduate Degree',
    forLevel: 'Intermediate',
    shortDescription: 'A popular 3-year degree focused on software application development, database management, web frameworks, and corporate IT systems.',
    duration: '3 Years',
    furtherStudy: [
      'MCA (Master of Computer Applications) - equivalent to B.Tech CSE',
      'M.Sc in Information Technology / Data Science',
      'MBA in Systems / IT Management'
    ],
    relatedCareers: [
      'Application Developer',
      'Frontend / Backend Engineer',
      'Database Administrator (DBA)',
      'Software Quality Assurance Tester',
      'Cloud Support Engineer'
    ],
    matchingInterests: ['Computers & Technology', 'Business & Commerce'],
    matchingSubjects: ['Computer Science', 'Mathematics', 'Commerce'],
    eligibility: 'Pass in Intermediate / 12th in any stream (MPC, MEC, or CEC; math/computer preferred in some universities)',
    keyEntranceExams: ['CUET-UG', 'IPU CET', 'NIMCET (for subsequent MCA entry)', 'University Entrance Tests'],
    keySubjectsTaught: ['Object Oriented Programming (Java/Python)', 'Web Technologies', 'Database Systems (SQL)', 'Software Engineering Principles', 'Cloud Basics'],
    roadmapSteps: [
      'Complete 12th / Inter from any recognized board',
      'Enroll in 3-year BCA program',
      'Build portfolio projects and take NIMCET to enter top NITs for MCA or jump into IT jobs'
    ],
    idealForWho: 'Students who want to build a career in software without going through the 4-year engineering entrance grind.',
    difficultyOrPacing: 'Moderate'
  },
  {
    id: 'degree-mbbs',
    name: 'MBBS (Bachelor of Medicine & Bachelor of Surgery)',
    category: 'Professional Course',
    forLevel: 'Intermediate',
    shortDescription: 'The pinnacle 5.5-year medical degree in clinical diagnostics, pharmacology, patient care, pathology, surgery, and public health.',
    duration: '5.5 Years (incl. 1 Yr Internship)',
    furtherStudy: [
      'MD (Doctor of Medicine) / MS (Master of Surgery) via NEET-PG',
      'Super-specialty (DM / MCh) via NEET-SS',
      'Global licensing (USMLE for USA, PLAB/UKMLA for UK)',
      'Hospital Administration (MHA)'
    ],
    relatedCareers: [
      'General Physician / Medical Officer',
      'Specialist Surgeon / Cardiologist / Neurologist',
      'Hospital Clinical Director',
      'Medical Research Scientist',
      'Public Health Officer (WHO / Govt)'
    ],
    matchingInterests: ['Medicine & Healthcare', 'Science', 'Government Services'],
    matchingSubjects: ['Biology', 'Science'],
    eligibility: 'Pass in Intermediate BiPC with at least 50% in PCB and qualifying NEET-UG score',
    keyEntranceExams: ['NEET-UG (National Eligibility cum Entrance Test)'],
    keySubjectsTaught: ['Human Anatomy & Physiology', 'Biochemistry & Pharmacology', 'Pathology & Microbiology', 'General Medicine & Surgery', 'Obstetrics & Gynaecology'],
    roadmapSteps: [
      'Pass Intermediate BiPC with rigorous PCB mastery',
      'Secure top percentile rank in NEET-UG',
      'Complete 4.5 years academic rotations + 1 year mandatory rotatory hospital internship',
      'Register with National Medical Commission (NMC) as licensed doctor'
    ],
    idealForWho: 'Dedicated, resilient students with high empathy who are passionate about healing illnesses and saving lives.',
    difficultyOrPacing: 'Rigorous & Competitive'
  },
  {
    id: 'degree-bds',
    name: 'BDS (Bachelor of Dental Surgery)',
    category: 'Professional Course',
    forLevel: 'Intermediate',
    shortDescription: '5-year professional program in oral anatomy, dental prosthetics, maxillofacial surgery, cosmetic dentistry, and dental health.',
    duration: '5 Years (incl. 1 Yr Internship)',
    furtherStudy: [
      'MDS (Master of Dental Surgery) in Orthodontics, Endodontics, etc.',
      'Aesthetic & Facial Cosmetic Dentistry fellowships',
      'Hospital Dental Department residency'
    ],
    relatedCareers: [
      'Dental Surgeon',
      'Orthodontist / Cosmetic Dentist',
      'Oral & Maxillofacial Specialist',
      'Private Dental Clinic Owner',
      'Dental Research Consultant'
    ],
    matchingInterests: ['Medicine & Healthcare', 'Science'],
    matchingSubjects: ['Biology', 'Science'],
    eligibility: 'Intermediate BiPC with 50% in PCB and NEET-UG qualification',
    keyEntranceExams: ['NEET-UG'],
    keySubjectsTaught: ['Dental Anatomy & Histology', 'General Pathology & Micro', 'Prosthodontics & Orthodontics', 'Oral & Maxillofacial Surgery', 'Periodontology'],
    roadmapSteps: [
      'Score well in NEET-UG after Inter BiPC',
      'Get admission into Dental College',
      'Complete 4 years coursework + 1 year clinical internship',
      'Set up dental clinic or pursue MDS specialization'
    ],
    idealForWho: 'Students wanting a high-earning medical career with predictable clinical working hours and entrepreneurial practice ownership.',
    difficultyOrPacing: 'Demanding'
  },
  {
    id: 'degree-bpharm',
    name: 'B.Pharm (Bachelor of Pharmacy)',
    category: 'Undergraduate Degree',
    forLevel: 'Intermediate',
    shortDescription: '4-year professional program in drug formulation, pharmacology, clinical toxicology, biotechnology synthesis, and pharmaceutical quality.',
    duration: '4 Years',
    furtherStudy: [
      'M.Pharm in Pharmacology, Pharmaceutics, or Regulatory Affairs (GPAT)',
      'Pharm.D (Post-Baccalaureate)',
      'MBA in Pharmaceutical Management',
      'Drug Inspector / Government Analyst Exams'
    ],
    relatedCareers: [
      'Formulation & R&D Scientist',
      'Quality Control & Assurance Officer',
      'Regulatory Affairs Specialist',
      'Government Drug Inspector',
      'Clinical Trial Data Associate'
    ],
    matchingInterests: ['Medicine & Healthcare', 'Science', 'Government Services'],
    matchingSubjects: ['Biology', 'Science', 'Mathematics'],
    eligibility: 'Pass in Intermediate with either BiPC or MPC stream',
    keyEntranceExams: ['State EAPCET / CETs', 'BITSAT (B.Pharm)', 'NEET-UG (in select institutes)'],
    keySubjectsTaught: ['Pharmaceutical Chemistry', 'Pharmacology & Toxicology', 'Pharmaceutics & Drug Delivery', 'Biopharmaceutics', 'Drug Regulatory Science'],
    roadmapSteps: [
      'Complete 12th / Inter (BiPC or MPC)',
      'Clear State Pharmacy CET / EAPCET',
      'Complete 4-year B.Pharm with laboratory synthesis and pilot plant training',
      'Register with State Pharmacy Council and enter pharma giants or regulatory bodies'
    ],
    idealForWho: 'Students intrigued by medicinal chemistry, how vaccines and tablets work, and clinical drug discovery.',
    difficultyOrPacing: 'Demanding'
  },
  {
    id: 'degree-bsc-nursing',
    name: 'B.Sc Nursing',
    category: 'Undergraduate Degree',
    forLevel: 'Intermediate',
    shortDescription: '4-year clinical healthcare degree developing compassionate, expert professionals in critical hospital care and clinical diagnostics.',
    duration: '4 Years',
    furtherStudy: [
      'M.Sc Nursing in Critical Care, Pediatric, or Psychiatric Nursing',
      'Global licensure exams (NCLEX-RN for USA/Canada, OET for UK/Australia)',
      'Hospital Administration / Nursing Superintendent positions'
    ],
    relatedCareers: [
      'Staff Nurse / Critical Care Specialist',
      'International Registered Nurse (USA / UK / Gulf)',
      'Clinical Nurse Educator',
      'Operation Theatre / ICU Manager',
      'Community Health Officer'
    ],
    matchingInterests: ['Medicine & Healthcare', 'Government Services', 'Other'],
    matchingSubjects: ['Biology', 'Science'],
    eligibility: 'Pass in Intermediate BiPC with at least 45-50% in PCB',
    keyEntranceExams: ['NEET-UG (select states)', 'State Nursing Entrance Exams', 'AIIMS Nursing CET'],
    keySubjectsTaught: ['Anatomy & Physiology', 'Medical-Surgical Nursing', 'Pharmacology & Pathology', 'Community Health Nursing', 'Mental Health Nursing'],
    roadmapSteps: [
      'Pass Intermediate BiPC',
      'Qualify in State Nursing CET or AIIMS Nursing Test',
      'Complete 4 years of clinical bedside rotations',
      'Register with State Nursing Council; option to clear NCLEX for lucrative overseas nursing'
    ],
    idealForWho: 'Caring individuals who want an internationally in-demand, highly respected career with almost 100% employment certainty.',
    difficultyOrPacing: 'Demanding'
  },
  {
    id: 'degree-bcom',
    name: 'B.Com (Honours / Computers / Accounting & Finance)',
    category: 'Undergraduate Degree',
    forLevel: 'Intermediate',
    shortDescription: 'The quintessential 3 to 4-year undergraduate commerce program covering corporate accounting, income tax, GST, banking, and financial analysis.',
    duration: '3 - 4 Years',
    furtherStudy: [
      'Chartered Accountancy (CA Inter & Final)',
      'MBA in Finance / Banking',
      'M.Com / CFA (Chartered Financial Analyst)',
      'CMA / ACCA (Global Accounting)'
    ],
    relatedCareers: [
      'Financial Analyst',
      'Corporate Accountant & Auditor',
      'Tax & GST Consultant',
      'Banking Operations Officer',
      'Equity Research Associate'
    ],
    matchingInterests: ['Business & Commerce', 'Government Services'],
    matchingSubjects: ['Commerce', 'Mathematics'],
    eligibility: 'Pass in Intermediate (CEC, MEC, or MPC) with minimum 50%',
    keyEntranceExams: ['CUET-UG (Central Universities)', 'University Merit Admissions'],
    keySubjectsTaught: ['Financial & Cost Accounting', 'Corporate Laws & Governance', 'Direct & Indirect Taxes (GST)', 'Business Analytics & Excel', 'Auditing Principles'],
    roadmapSteps: [
      'Complete Intermediate CEC / MEC',
      'Enroll in B.Com (Honours) at a top university',
      'Concurrently register for CA / CMA / ACCA or prepare for campus corporate placements'
    ],
    idealForWho: 'Students who love analyzing balance sheets, numbers, commercial profit models, and financial statements.',
    difficultyOrPacing: 'Moderate'
  },
  {
    id: 'degree-bba',
    name: 'BBA / BMS (Bachelor of Business Administration)',
    category: 'Undergraduate Degree',
    forLevel: 'Intermediate',
    shortDescription: '3-year dynamic leadership degree in modern business administration, marketing strategy, operations, human resources, and entrepreneurship.',
    duration: '3 Years',
    furtherStudy: [
      'MBA / PGDM at IIMs, XLRI, FMS (via CAT / XAT / GMAT)',
      'Master in Management (MiM) in Europe / UK',
      'Specialized Masters in Digital Marketing / Supply Chain'
    ],
    relatedCareers: [
      'Business Development Manager',
      'Digital Marketing Strategist',
      'Product Operations Associate',
      'Human Resources (HR) Specialist',
      'Startup Founder / Entrepreneur'
    ],
    matchingInterests: ['Business & Commerce', 'Arts & Design', 'Computers & Technology'],
    matchingSubjects: ['Commerce', 'Arts', 'Mathematics'],
    eligibility: 'Pass in 12th / Intermediate in any stream (MEC, CEC, MPC, HEC) with 50%+',
    keyEntranceExams: ['IPMAT (for 5-Year Integrated IIM MBA)', 'CUET-UG', 'NPAT', 'SET'],
    keySubjectsTaught: ['Marketing Management', 'Organizational Behaviour', 'Corporate Finance', 'Strategic Management', 'Business Analytics'],
    roadmapSteps: [
      'Pass Intermediate in any stream',
      'Crack IPMAT for IIMs or top university BBA entrance',
      'Participate in case study competitions, internships, and student leadership clubs',
      'Step into management roles or write CAT for tier-1 MBA'
    ],
    idealForWho: 'Natural communicators, problem solvers, organizers, and aspiring executives and entrepreneurs.',
    difficultyOrPacing: 'Moderate'
  },
  {
    id: 'degree-ca',
    name: 'Chartered Accountancy (CA - ICAI)',
    category: 'Professional Course',
    forLevel: 'Intermediate',
    shortDescription: 'The premier professional credential in India for statutory auditing, taxation, corporate financial consulting, and CFO advisory.',
    duration: '4.5 - 5 Years',
    furtherStudy: [
      'Independent Public Practice (COP)',
      'Insolvency Professional Certification',
      'CPA (USA) / ICAEW (UK) mutual recognition',
      'Corporate Executive Board leadership'
    ],
    relatedCareers: [
      'Chartered Accountant',
      'Chief Financial Officer (CFO)',
      'Statutory & Forensic Auditor',
      'International Tax Advisor',
      'Mergers & Acquisitions Consultant'
    ],
    matchingInterests: ['Business & Commerce', 'Government Services'],
    matchingSubjects: ['Commerce', 'Mathematics'],
    eligibility: 'Pass in Intermediate / 12th in any stream (MEC / CEC / MPC highly advantageous)',
    keyEntranceExams: ['CA Foundation Exam (held by ICAI twice a year)'],
    keySubjectsTaught: ['Advanced Accounting', 'Corporate & Other Laws', 'Direct Tax & GST', 'Strategic Management', 'Auditing & Assurance'],
    roadmapSteps: [
      'Register with ICAI and clear CA Foundation after 12th',
      'Clear CA Intermediate (Group 1 & 2)',
      'Undergo 2 years of mandatory practical Articleship training under a practicing CA',
      'Clear CA Final and obtain ICAI Membership'
    ],
    idealForWho: 'Disciplined, hardworking students who want an elite professional qualification with immense prestige and lucrative earning power.',
    difficultyOrPacing: 'Rigorous & Competitive'
  },
  {
    id: 'degree-bdes',
    name: 'B.Des (Bachelor of Design - UI/UX, Product, Fashion, Communication)',
    category: 'Undergraduate Degree',
    forLevel: 'Intermediate',
    shortDescription: '4-year professional design degree developing creative innovators in digital interface design, smart devices, visual communication, and sustainable fashion.',
    duration: '4 Years',
    furtherStudy: [
      'M.Des (Master of Design) at NID / IITs (via CEED)',
      'Design Management & Creative Direction',
      'Human-Computer Interaction (HCI) degrees abroad'
    ],
    relatedCareers: [
      'UI / UX Designer',
      'Product & Industrial Designer',
      'Brand Identity Director',
      'Design Researcher',
      'Creative Technologist'
    ],
    matchingInterests: ['Arts & Design', 'Computers & Technology', 'Other'],
    matchingSubjects: ['Arts', 'Computer Science'],
    eligibility: 'Pass in 12th / Intermediate in any stream (Arts, Science, or Commerce)',
    keyEntranceExams: ['UCEED (for IITs)', 'NID DAT (National Institute of Design)', 'NIFT Entrance', 'SEED'],
    keySubjectsTaught: ['Design Thinking & Problem Solving', 'Digital Prototyping (Figma / CAD)', 'User Research & Ergonomics', 'Visual Storytelling', 'Material Exploration'],
    roadmapSteps: [
      'Develop creative sketching & conceptual problem-solving skills',
      'Qualify in UCEED / NID DAT entrance test',
      'Complete studio-centric 4-year B.Des with client projects',
      'Land high-paying design roles in tech companies, agencies, or design studios'
    ],
    idealForWho: 'Creative thinkers who love aesthetics, empathy, sketches, technology interfaces, and solving real human problems.',
    difficultyOrPacing: 'Demanding'
  },
  {
    id: 'degree-law',
    name: 'Integrated 5-Year Law (BA LLB / BBA LLB)',
    category: 'Professional Course',
    forLevel: 'Intermediate',
    shortDescription: 'An elite 5-year integrated double degree combining arts/business with comprehensive legal jurisprudence, courtroom advocacy, and corporate law.',
    duration: '5 Years',
    furtherStudy: [
      'LL.M (Master of Laws) in Constitutional or Corporate Law',
      'State Judicial Services Examination (Civil Judge)',
      'Civil Services (UPSC)',
      'Bar Council of India License to practice in Supreme/High Courts'
    ],
    relatedCareers: [
      'Corporate Legal Counsel',
      'Litigation Advocate / Trial Lawyer',
      'Civil Judge / Judicial Magistrate',
      'Legal Compliance & Risk Officer',
      'Arbitration & Dispute Resolution Specialist'
    ],
    matchingInterests: ['Government Services', 'Business & Commerce', 'Arts & Design', 'Other'],
    matchingSubjects: ['Arts', 'Commerce'],
    eligibility: 'Pass in 12th / Intermediate in any stream with minimum 45-50%',
    keyEntranceExams: ['CLAT (Common Law Admission Test for NLUs)', 'AILET (NLU Delhi)', 'SLAT', 'State Law CET'],
    keySubjectsTaught: ['Constitutional Law', 'Criminal Law (IPC/BNS)', 'Corporate & Commercial Laws', 'Intellectual Property Rights', 'Moot Court Advocacy'],
    roadmapSteps: [
      'Prepare for CLAT during 11th and 12th',
      'Crack CLAT and secure admission into a top National Law University (NLU)',
      'Participate in moot courts, legal aid clinics, and corporate law firm internships',
      'Enroll with Bar Council of India to practice or join top tier-1 corporate law firms'
    ],
    idealForWho: 'Students with articulate debate skills, logical reasoning, a keen sense of justice, and interest in laws and governance.',
    difficultyOrPacing: 'Demanding'
  },
  {
    id: 'degree-nda',
    name: 'National Defence Academy (NDA - Army, Navy, Air Force)',
    category: 'Government & Defence',
    forLevel: 'Intermediate',
    shortDescription: 'The premier tri-service military academy training cadets straight out of Intermediate to become Commissioned Officers in the Armed Forces.',
    duration: '3 Years (NDA) + 1 Year (IMA/INA/AFA)',
    furtherStudy: [
      'Commissioned Officer rank (Lieutenant / Flying Officer / Sub-Lieutenant)',
      'Defence Services Staff College (DSSC)',
      'Postgraduate military strategy and aviation degrees'
    ],
    relatedCareers: [
      'Army Officer / Combat Commander',
      'Air Force Fighter Pilot',
      'Naval Warfare Officer',
      'Military Intelligence Leader',
      'Defence Strategist'
    ],
    matchingInterests: ['Government Services', 'Engineering', 'Other'],
    matchingSubjects: ['Mathematics', 'Science', 'Arts'],
    eligibility: 'Unmarried candidates age 16.5-19.5; 12th pass (MPC mandatory for Air Force/Navy; any stream for Army)',
    keyEntranceExams: ['NDA & NA Examination (conducted by UPSC twice a year) + 5-day SSB Interview'],
    keySubjectsTaught: ['Mathematics & General Ability Test (GAT)', 'Military History & Geopolitics', 'Leadership & Tactical Strategy', 'Physical & Weapon Training'],
    roadmapSteps: [
      'Apply for UPSC NDA exam while in 12th or immediately after',
      'Clear the written examination (Maths + GAT)',
      'Clear the 5-day Services Selection Board (SSB) interview and medical fitness test',
      'Train at Khadakwasla, Pune, and pass out as a commissioned officer with full government pride'
    ],
    idealForWho: 'Patriotic, disciplined, adventure-seeking young individuals who desire an honorable life in uniform serving the nation.',
    difficultyOrPacing: 'Rigorous & Competitive'
  },
  {
    id: 'degree-bjmc',
    name: 'BA in Journalism & Mass Communication (BJMC)',
    category: 'Undergraduate Degree',
    forLevel: 'Intermediate',
    shortDescription: '3-year multimedia program covering news reporting, television broadcasting, digital storytelling, public relations, and investigative journalism.',
    duration: '3 Years',
    furtherStudy: [
      'Master in Mass Communication / Digital Media',
      'PG Diploma in Broadcast Journalism (IIMC)',
      'Corporate Communications & PR certifications'
    ],
    relatedCareers: [
      'News Anchor / Broadcast Reporter',
      'Digital Media Content Producer',
      'Public Relations (PR) Specialist',
      'Investigative Journalist',
      'Podcast Producer & Scriptwriter'
    ],
    matchingInterests: ['Arts & Design', 'Government Services', 'Other'],
    matchingSubjects: ['Arts'],
    eligibility: 'Pass in 12th / Intermediate in any stream with good language fluency',
    keyEntranceExams: ['CUET-UG', 'IIMC Entrance Exam (for PG)', 'University Mass Comm Tests'],
    keySubjectsTaught: ['Print & Broadcast Journalism', 'Media Ethics & Indian Constitution', 'Video Editing & Production', 'Public Relations & Advertising', 'Digital Media Reporting'],
    roadmapSteps: [
      'Complete 12th in any stream',
      'Enroll in BJMC degree and work on college media / podcasts / writing',
      'Complete newsroom internships with media houses, TV channels, or digital publishers'
    ],
    idealForWho: 'Curious, outspoken individuals who enjoy asking bold questions, storytelling, video creation, and keeping citizens informed.',
    difficultyOrPacing: 'Moderate'
  },
  {
    id: 'degree-bsc-agri',
    name: 'B.Sc (Hons) in Agriculture',
    category: 'Undergraduate Degree',
    forLevel: 'Intermediate',
    shortDescription: '4-year scientific program in crop genetics, precision farming, organic agriculture, soil science, agricultural economics, and agribusiness.',
    duration: '4 Years',
    furtherStudy: [
      'M.Sc in Agronomy / Plant Genetics / Soil Science (ICAR-AIEEA)',
      'MBA in Agribusiness Management (IIM Ahmedabad / MANAGE)',
      'Agricultural Research Service (ARS / ICAR Scientist)'
    ],
    relatedCareers: [
      'Agriculture Field Officer (IBPS AFO)',
      'Agribusiness Product Manager',
      'Seed & Fertilizer Technical Specialist',
      'Farm Management Consultant',
      'Government Agriculture Extension Officer'
    ],
    matchingInterests: ['Science', 'Government Services', 'Medicine & Healthcare', 'Other'],
    matchingSubjects: ['Biology', 'Science'],
    eligibility: 'Intermediate with BiPC or MPC with minimum 50%',
    keyEntranceExams: ['ICAR AIEEA-UG', 'State Agriculture EAPCET / CETs', 'CUET-UG'],
    keySubjectsTaught: ['Agronomy & Soil Science', 'Plant Pathology & Entomology', 'Genetics & Plant Breeding', 'Horticulture & Farm Machinery', 'Agribusiness & Economics'],
    roadmapSteps: [
      'Appear for State EAPCET / ICAR AIEEA after Inter BiPC/MPC',
      'Complete 4-year degree including rural agricultural work experience (RAWE)',
      'Secure government banking AFO jobs, state department roles, or top corporate agribusiness careers'
    ],
    idealForWho: 'Students passionate about nature, food security, scientific farming, sustainable ecosystems, and rural economic growth.',
    difficultyOrPacing: 'Moderate'
  }
];

export const INTEREST_OPTIONS: { id: CourseItem['matchingInterests'][number]; label: string; icon: string; description: string }[] = [
  {
    id: 'Computers & Technology',
    label: 'Computers & Technology',
    icon: 'Laptop',
    description: 'Software, coding, apps, AI, web development, cybersecurity'
  },
  {
    id: 'Engineering',
    label: 'Engineering',
    icon: 'Cpu',
    description: 'Designing machines, electronics, circuits, bridges, robotics'
  },
  {
    id: 'Medicine & Healthcare',
    label: 'Medicine & Healthcare',
    icon: 'Stethoscope',
    description: 'Doctors, surgery, pharmacy, lab technology, nursing, clinics'
  },
  {
    id: 'Business & Commerce',
    label: 'Business & Commerce',
    icon: 'TrendingUp',
    description: 'Finance, accounting, banking, marketing, entrepreneurship'
  },
  {
    id: 'Arts & Design',
    label: 'Arts & Design',
    icon: 'Palette',
    description: 'UI/UX design, visual media, graphics, literature, journalism'
  },
  {
    id: 'Science',
    label: 'Science',
    icon: 'Atom',
    description: 'Physics, chemistry, genetics, research, space, agriculture'
  },
  {
    id: 'Government Services',
    label: 'Government Services',
    icon: 'Landmark',
    description: 'Civil services (IAS/IPS), defence (NDA), public administration, law'
  },
  {
    id: 'Other',
    label: 'Other / Exploring',
    icon: 'Compass',
    description: 'Multidisciplinary careers, vocational trades, specialized paths'
  }
];

export const SUBJECT_OPTIONS: { id: CourseItem['matchingSubjects'][number]; label: string; icon: string; subtitle: string }[] = [
  { id: 'Mathematics', label: 'Mathematics', icon: 'Binary', subtitle: 'Calculus, algebra, geometry, logic' },
  { id: 'Science', label: 'Science (Physics / Chem)', icon: 'FlaskConical', subtitle: 'Physical laws, reactions, mechanics' },
  { id: 'Biology', label: 'Biology (Botany / Zoo)', icon: 'Dna', subtitle: 'Human body, plants, life sciences' },
  { id: 'Computer Science', label: 'Computer Science', icon: 'Code', subtitle: 'Programming, computers, IT' },
  { id: 'Commerce', label: 'Commerce / Accountancy', icon: 'BadgePercent', subtitle: 'Accounts, economics, trade, finance' },
  { id: 'Arts', label: 'Arts / Social Studies', icon: 'BookOpen', subtitle: 'History, civics, languages, design' }
];

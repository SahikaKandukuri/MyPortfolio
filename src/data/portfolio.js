// ─────────────────────────────────────────────────────────────
// All editable content lives here. Replace placeholder values
// (marked "// EDIT:") with your own details.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Sahika Kandukuri',
  role: 'Computer Science Engineering Student',
  location: 'Warangal, Telangana, India',
  email: 'sahikakandukuri@gmail.com',
  phone: '+91-8978383283', // EDIT: remove if you don't want this public
  github: 'https://github.com/SahikaKandukuri',
  linkedin: 'https://linkedin.com/in/sahika-kandukuri',
  leetcode: 'https://leetcode.com/u/sahika1305/', // EDIT: confirm your LeetCode handle/URL
  resumePath: '/resume.pdf',
}

export const stats = [
  { value: '3', label: 'Projects shipped' },
  { value: '13', label: 'Technologies used' },
  { value: '9.12', label: 'CGPA, CSE (Sem 1–5)' },
  { value: '213', label: 'DSA problems solved' },
]

export const techStack = {
  Languages: [
    { name: 'Java', note: 'OOP, data structures, DSA practice' },
    { name: 'JavaScript', note: 'Application logic, DOM, ES6+' },
    { name: 'Python', note: 'Scripting, automation, CV experiments' },
    { name: 'C', note: 'Systems fundamentals, coursework' },
  ],
  Frontend: [
    { name: 'React', note: 'Component-based UI, hooks' },
    { name: 'HTML', note: 'Semantic, accessible markup' },
    { name: 'CSS', note: 'Layout, responsive design' },
    { name: 'JavaScript', note: 'Interactivity, state, events' },
  ],
  Backend: [
    { name: 'Spring Boot', note: 'REST APIs, service layer' },
    { name: 'Node.js', note: 'Server-side JavaScript' },
    { name: 'Express.js', note: 'Routing, middleware' },
  ],
  Database: [
    { name: 'MySQL', note: 'Relational schema design, queries' },
    { name: 'MongoDB', note: 'Document-based data modeling' },
  ],
  Tools: [
    { name: 'Git', note: 'Version control, branching' },
    { name: 'GitHub', note: 'Collaboration, project hosting' },
    { name: 'REST APIs', note: 'Designing and consuming endpoints' },
    { name: 'VS Code', note: 'Primary editor' },
  ],
}

export const projects = [
  {
    id: 'elms',
    name: 'Employee Leave Management System',
    problem: 'Manual leave requests and approvals slow teams down and lose paper trails.',
    description:
      'A full-stack system with role-based access for employees and administrators. Employees submit and track leave requests; admins review, approve, or reject them from a dedicated dashboard.',
    stack: ['React', 'Spring Boot', 'MySQL', 'REST APIs'],
    features: [
      'Employee dashboard for submitting and tracking leave',
      'Admin dashboard for reviewing and approving requests',
      'Role-based access control',
      'Automated email notifications on status changes',
      'Backend validation to prevent overlapping or invalid requests',
    ],
    caseStudy: {
      approach:
        'Modeled employees, roles, and leave requests as a relational schema in MySQL, then exposed the workflow through REST endpoints built with Spring Boot.',
      result:
        'A working leave workflow that replaces manual tracking with a single system both employees and administrators can rely on.',
    },
    github: 'https://github.com/SahikaKandukuri/employee-leave-management', // EDIT: confirm repo URL
    demo: '', // EDIT: add a live demo URL if deployed
  },
  {
    id: 'idrs',
    name: 'IDRS — Institutional Document & Student Data Retrieval System',
    problem: 'Faculty and students needed a faster way to search and retrieve institutional records.',
    description:
      'Built during a technical internship at KITS, IDRS centralizes academic records and institutional documents so authorized users can search, view, and manage them without manual file lookups.',
    stack: ['MERN Stack', 'MongoDB', 'Express.js', 'React', 'Node.js'],
    features: [
      'Centralized storage for academic records and documents',
      'Secure, role-based access for authorized users',
      'Search and retrieval across structured records',
      'Structured backend for faster data organization',
    ],
    caseStudy: {
      approach:
        'Structured records around clear access roles first, then built retrieval on top so search stayed fast as the record set grew.',
      result:
        'Reduced document lookup to a search query instead of a manual file request, as part of a live technical internship at KITS.',
    },
    github: 'https://github.com/SahikaKandukuri/idrs', // EDIT: confirm repo URL
    demo: '', // EDIT: add a live demo URL if deployed
  },
  {
    id: 'eye-mouse',
    name: 'Eye Cursor Controlled Mouse',
    problem: 'Standard input devices are a barrier for hands-free or accessibility-focused interaction.',
    description:
      'A computer-vision system that tracks eye and facial landmarks through a webcam feed and translates that movement into cursor control, letting a user operate the mouse without touching it.',
    stack: ['Python', 'OpenCV', 'PyAutoGUI'],
    features: [
      'Real-time face and eye landmark detection via webcam',
      'Landmark coordinates mapped to on-screen cursor position',
      'Blink or gaze gesture used to trigger a click event',
      'Runs on a standard webcam with no extra hardware',
    ],
    caseStudy: {
      approach:
        'Used OpenCV to detect facial landmarks frame by frame, smoothed the coordinates to reduce jitter, then mapped them to screen space and drove the cursor with PyAutoGUI.',
      result:
        'A functioning hands-free pointing device, built as an exploration of computer vision applied to accessible interaction.',
    },
    github: 'https://github.com/SahikaKandukuri/eye-cursor-mouse', // EDIT: confirm repo URL
    demo: '',
  },
]

export const leetcodeStats = {
  solved: 213,
  total: 4060,
  easy: { solved: 100, total: 966 },
  medium: { solved: 103, total: 2117 },
  hard: { solved: 10, total: 977 },
  maxStreak: 24,
}

export const dsaTopics = [
  'Arrays', 'Hashing', 'Two Pointers', 'Sliding Window', 'Binary Search',
  'Linked Lists', 'Stacks & Queues', 'Trees', 'Graphs', 'Recursion',
  'Backtracking', 'Tries', 'Dynamic Programming',
]

export const journey = [
  {
    year: '2021',
    title: 'Oxford High School',
    detail: 'Completed secondary education with a 10/10 GPA.',
  },
  {
    year: '2021 – 2024',
    title: 'Diploma in Computer Science Engineering',
    detail: 'Government Polytechnic, Warangal. Graduated with a 9.93 CGPA.',
  },
  {
    year: '2024 – 2027',
    title: 'B.Tech in Computer Science Engineering',
    detail: 'Kakatiya Institute of Technology and Science, Warangal. 9.12 CGPA through 5th semester.',
  },
  {
    year: '2025', // EDIT: confirm year
    title: 'Technical Intern — IDRS Project',
    detail: 'Kakatiya Institute of Technology and Science. Built an institutional document retrieval system used by faculty and students.',
  },
]

export const certifications = [
  { name: 'Programming in Java (Elite, 88%)', issuer: 'NPTEL, IIT Kharagpur' },
  { name: 'Java (Basic) Skills Certification', issuer: 'HackerRank' },
  { name: 'C Programming Basics', issuer: 'Simplilearn SkillUp' },
]

export const achievement = {
  title: 'ECET Rank 74',
  detail: 'Telangana State Engineering Common Entrance Test',
}

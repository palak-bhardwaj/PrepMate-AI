export const PREP_TOPICS = [
  // 🧑‍💻 Programming Languages
  {
    id: 'c',
    category: 'Programming Languages',
    title: 'C Programming',
    description: 'Master procedural programming, memory management, and core logic-building fundamentals with C.',
    tags: ['Syntax', 'Pointers', 'Arrays', 'Structures', 'Functions', 'Memory Allocation', 'Recursion'],
  },
  {
    id: 'cpp',
    category: 'Programming Languages',
    title: 'C++',
    description: 'Extend C with Object-Oriented Programming concepts and explore the Standard Template Library (STL).',
    tags: ['OOPs', 'STL', 'Inheritance', 'Polymorphism', 'Templates', 'Exception Handling', 'File Handling'],
  },
  {
    id: 'java',
    category: 'Programming Languages',
    title: 'Java',
    description: 'Popular language for enterprise applications. Strong OOP support, cross-platform execution using JVM.',
    tags: ['JVM', 'OOPs', 'Collections', 'Threads', 'Interfaces', 'Exception Handling', 'Streams', 'File I/O'],
  },
  {
    id: 'python',
    category: 'Programming Languages',
    title: 'Python',
    description: 'Dynamic, high-level language used in scripting, automation, web, data science, and AI.',
    tags: ['Syntax', 'Functions', 'OOPs', 'Lists & Dicts', 'File Handling', 'Libraries: NumPy, Pandas, Matplotlib'],
  },

  // 💻 Development
  // 📊 DSA
  {
    id: 'dsa',
    category: 'Professional Skill Tracks',
    title: 'Data Structures & Algorithms (DSA)',
    description: 'Master problem-solving techniques, optimize your code, and learn how to use data structures efficiently.',
    tags: ['Arrays', 'Linked List', 'Stacks', 'Queues', 'Trees', 'Binary Search Trees', 'Heaps', 'Graphs', 'Recursion', 'Dynamic Programming', 'Greedy', 'Searching & Sorting', 'Hashing', 'Backtracking', 'Bit Manipulation'],
  },
  {
    id: 'fullstack',
    category: 'Professional Skill Tracks',
    title: 'Full Stack Web Development',
    description: 'Learn frontend and backend development to build complete web applications with modern technologies.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Authentication'],
  },
  {
    id: 'android',
    category: 'Professional Skill Tracks',
    title: 'Android Development',
    description: 'Design and develop Android applications using Kotlin/Java, XML, and Android Studio.',
    tags: ['Kotlin', 'Java', 'XML', 'Activities', 'Fragments', 'Jetpack Components', 'Firebase', 'APIs'],
  },

  {
    id: 'datasci',
    category: 'Professional Skill Tracks',
    title: 'Data Science',
    description: 'Use Python libraries to analyze data, visualize insights, and create predictive models.',
    tags: ['Pandas', 'Numpy', 'Matplotlib', 'Seaborn', 'EDA', 'Data Cleaning', 'Statistics', 'Data Wrangling'],
  },
  {
    id: 'aiml',
    category: 'Professional Skill Tracks',
    title: 'AI / ML',
    description: 'Build intelligent systems using machine learning techniques including supervised and unsupervised learning.',
    tags: ['Linear Regression', 'Logistic Regression', 'SVM', 'Decision Trees', 'Random Forest', 'Clustering', 'NLP', 'Sklearn'],
  },
  {
  id: 'cloud',
  category: 'Professional Skill Tracks',
  title: 'Cloud Computing',
  description: 'Learn how to deploy, manage, and scale applications using cloud services like AWS, Azure, and GCP.',
  tags: [
    'AWS', 'Azure', 'GCP', 'Virtual Machines', 'S3', 'IAM', 
    'Lambda Functions', 'Kubernetes', 'CI/CD', 'Cloud Architecture'
   ],
   },

  // 📚 core cs
  {
    id: 'oops',
    category: 'Core CS Subjects',
    title: 'Object-Oriented Programming (OOPs)',
    description: 'Understand the 4 pillars of OOP and how they improve code modularity and reuse.',
    tags: ['Encapsulation', 'Abstraction', 'Inheritance', 'Polymorphism', 'Classes & Objects', 'Overloading', 'Overriding'],
  },
  {
    id: 'cn',
    category: 'Core CS Subjects',
    title: 'Computer Networks',
    description: 'Explore networking basics including layers, protocols, IP addressing, and security.',
    tags: ['OSI Model', 'TCP/IP', 'HTTP/HTTPS', 'DNS', 'Routing', 'IP Addressing', 'Firewalls', 'Congestion Control'],
  },
  {
    id: 'dbms',
    category: 'Core CS Subjects',
    title: 'Database Management System (DBMS)',
    description: 'Understand database concepts, query optimization, transactions, and normalization.',
    tags: ['ER Diagrams', 'Normalization', 'ACID Properties', 'Indexes', 'Transactions', 'Views', 'Joins', 'Subqueries'],
  },
  {
  id: 'os',
  category: 'Core CS Subjects',
  title: 'Operating System (OS)',
  description: 'Learn the fundamental concepts of operating systems including process management, memory management, scheduling, and synchronization.',
  tags: [
    'Processes & Threads',
    'CPU Scheduling',
    'Memory Management',
    'Paging & Segmentation',
    'Deadlock',
    'Process Synchronization',
    'Semaphores',
    'File Systems',
    'Virtual Memory'
    ],
    },
  {
    id: 'mysql',
    category: 'Core CS Subjects',
    title: 'MySQL',
    description: 'Work with relational databases using SQL. Perform CRUD operations, joins, aggregation, and more.',
    tags: ['SELECT', 'WHERE', 'JOIN', 'GROUP BY', 'ORDER BY', 'Subqueries', 'Indexes', 'Stored Procedures'],
  },
  {
    id: 'se',
    category: 'Core CS Subjects',
    title: 'Software Engineering',
    description: 'Learn how software is planned, developed, and maintained using agile and design principles.',
    tags: ['SDLC', 'Agile', 'Scrum', 'Use Case Diagrams', 'UML', 'Design Patterns', 'Testing', 'Version Control'],
  },

  // ✍️ Aptitude
  {
    id: 'quant',
    category: 'Aptitude',
    title: 'Quantitative Aptitude',
    description: 'Practice mathematical problem-solving for placement and competitive exams.',
    tags: ['Percentages', 'Profit & Loss', 'Time & Work', 'Time-Speed-Distance', 'Ratios', 'Mixtures', 'Averages'],
  },
  {
    id: 'logical',
    category: 'Aptitude',
    title: 'Logical Reasoning',
    description: 'Improve analytical and logical thinking to solve puzzles and pattern-based problems.',
    tags: ['Puzzles', 'Blood Relations', 'Series', 'Direction Sense', 'Coding-Decoding', 'Syllogisms'],
  },
  {
    id: 'verbal',
    category: 'Aptitude',
    title: 'Verbal Ability',
    description: 'Sharpen your English language skills for comprehension and communication.',
    tags: ['Synonyms', 'Antonyms', 'Reading Comprehension', 'Sentence Correction', 'Error Spotting', 'Para Jumbles'],
  },
  {
    id: 'di',
    category: 'Aptitude',
    title: 'Data Interpretation',
    description: 'Interpret and analyze data from charts, tables, and graphs to answer quantitative questions.',
    tags: ['Bar Graphs', 'Pie Charts', 'Tables', 'Line Graphs', 'Caselets', 'Data Sufficiency'],
  }
];

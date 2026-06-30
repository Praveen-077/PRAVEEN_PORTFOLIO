export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  impact: string[];
  tech: string[];
  github?: string;
  demo?: string;
};

export const profile = {
  name: "Praveen Kumar Gorrepati",
  role: "Engineering Data Science Graduate Student | Data Science, ML, AI & Asset Management Analytics",
  location: "Houston, TX",
  email: "kumarpraveengorrepati@gmail.com",
  phone: "+1 (346) 648-4426",
  linkedin: "https://www.linkedin.com/in/praveen-kumar-g-3871482a5/",
  github: "https://github.com/Praveen-077",
  resume: "/Praveen_Resume.pdf",
  summary:
    "I enjoy building data-driven solutions that connect research with real-world operations. My background spans machine learning, AI, data analytics, and full-stack development, with hands-on experience in infrastructure monitoring, oil and gas analytics, and marine asset management work at Port Houston. I focus on turning complex data into reliable systems, models, and insights that support practical decisions.",
  targetRoles: ["Data Scientist", "Data Analyst", "Data Engineer", "Machine Learning Engineer", "AI Engineer"],
};

export const focusAreas = [
  {
    title: "Operational data to decisions",
    text: "Experience structuring inspection findings, maintenance actions, asset information, and data quality requirements for reporting and enterprise asset management readiness."
  },
  {
    title: "Machine learning for real-world signals",
    text: "Projects across computer vision, sensor-driven road quality analysis, offshore well performance, and human activity recognition."
  },
  {
    title: "Research, mentoring, and delivery",
    text: "IEEE publication experience, hackathon participation, and technical support for students and researchers building ML workflows on Python, PyTorch, TensorFlow, and HPC clusters."
  }
];

export const skills = [
  { group: "Programming", items: ["Python", "R", "SQL", "JavaScript", "Bash", "C", "C++", "React"] },
  { group: "Machine Learning & AI", items: ["Scikit-learn", "XGBoost", "PyTorch", "TensorFlow", "CNNs", "YOLOv8", "Regression", "Classification", "Clustering"] },
  { group: "Data Science", items: ["Pandas", "NumPy", "Data Cleaning","Data Wrangling", "Feature Engineering", "EDA", "Data Quality Assurance"] },
  { group: "Deployment & Tools", items: ["Flask", "FastAPI", "Docker", "Git", "Linux", "HPC Clusters"] },
  { group: "Visualization", items: ["Power BI", "Tableau", "Matplotlib", "Excel"] },
];

export const experiences = [
  {
    role: "Asset Management Intern",
    company: "Port Houston",
    location: "Houston, TX",
    period: "May 2026 - Aug 2026",
    bullets: [
      "Structured marine asset inspection follow-up actions into standardized datasets to improve maintenance tracking, backlog visibility, and reporting readiness.",
      "Extracted asset IDs, components, element types, condition findings, priorities, and recommended maintenance actions from baseline and routine inspection reports.",
      "Developed a tracking framework to classify open, carried-forward, partially completed, and pending-verification maintenance issues across inspection cycles.",
      "Explored SQL database tables and supported Power BI and IBM Maximo readiness by aligning inspection findings, maintenance status, asset information, and data quality requirements."
    ]
  },
  {
    role: "Technical Support Associate",
    company: "Hewlett Packard Enterprise Data Science Institute, University of Houston",
    location: "Houston, TX",
    period: "Sep 2025 - May 2026",
    bullets: [
      "Assisted 500+ students and researchers in developing machine learning workflows using Python, Scikit-learn, PyTorch, and TensorFlow.",
      "Provided guidance on data preprocessing, feature engineering, model evaluation, and research-based ML project development.",
      "Supported GPU-based model training on Linux HPC clusters and troubleshot Python dependencies, ML environments, and HPC resources."
    ]
  }
];

export const projects: Project[] = [
  {
    slug: "marine-asset-follow-up-tracker",
    title: "Marine Asset Follow-Up Action Tracker",
    category: "Asset Management Analytics",
    summary:
      "Structured inspection follow-up actions into a lifecycle-ready dataset for maintenance tracking, backlog visibility, and Maximo readiness.",
    problem:
      "Inspection findings are often captured in narrative reports, which makes it difficult to track open issues, repeated findings, partial completions, and reporting needs across inspection cycles.",
    impact: [
      "Created a consistent structure for asset IDs, components, element types, condition summaries, priorities, and recommended actions.",
      "Designed lifecycle logic for open, carried-forward, partially completed, and pending-verification maintenance issues.",
      "Improved readiness for Power BI reporting and enterprise asset management workflows."
    ],
    tech: ["Excel", "Power BI", "SQL", "Data Cleaning", "Asset Management", "Data Quality"]
  },
  {
    slug: "road-infrastructure-monitoring",
    title: "Deep Learning for Road Infrastructure Monitoring",
    category: "Computer Vision",
    summary:
      "Used YOLOv8 and large-scale road imagery to detect potholes and road anomalies for road quality analysis.",
    problem:
      "Manual road condition monitoring can be slow and inconsistent. This project applies computer vision and sensor fusion to identify defects and support road quality scoring.",
    impact: [
      "Collected and annotated 50,000+ road images and 3,000 pothole samples.",
      "Evaluated detection performance with 93.7% precision, 82.9% recall, and 88.2% F1-score.",
      "Built a real-time road quality analysis pipeline using multi-sensor fusion and clustering to compute a Road Traffic Quality Index."
    ],
    tech: ["Python", "YOLOv8", "Computer Vision", "Deep Learning", "Clustering", "Sensor Fusion"]
  },
  {
    slug: "offshore-well-performance",
    title: "Machine Learning Analysis of Offshore Oil & Gas Well Performance",
    category: "Oil & Gas Analytics",
    summary:
      "Analyzed offshore well data and built ML models to predict drilling efficiency and completion time.",
    problem:
      "Operational well data contains patterns that can support better drilling performance decisions when cleaned, engineered, and modeled correctly.",
    impact: [
      "Analyzed 20,000+ wells with 27 features.",
      "Performed preprocessing, Z-score outlier detection, and feature engineering.",
      "Built Random Forest and XGBoost models to identify operational patterns and predict performance outcomes."
    ],
    tech: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Random Forest", "Feature Engineering"]
  },
  {
    slug: "human-activity-recognition",
    title: "Human Activity Recognition",
    category: "Applied Machine Learning",
    summary:
      "Built a machine learning workflow to classify human activities from sensor-based patterns and support context-aware applications.",
    problem:
      "Sensor signals need careful preprocessing and feature extraction before they can be used for reliable activity classification.",
    impact: [
      "Processed time-series sensor data for activity classification.",
      "Applied feature engineering and model evaluation to compare classification performance.",
      "Strengthened experience with end-to-end ML workflows from raw data to model outputs."
    ],
    tech: ["Python", "Machine Learning", "Classification", "Feature Engineering", "Model Evaluation"]
  }
];

export const education = [
  {
    school: "University of Houston",
    degree: "Master's in Engineering Data Science",
    period: "Aug 2025 - May 2027",
    location: "Houston, TX",
    coursework: "Machine Learning, AI Systems, Deep Learning, Probability and Statistics Analysis, Data Mining"
  },
  {
    school: "Indian Institute of Information Technology Sri City",
    degree: "B.Tech in Electronics and Communication Engineering",
    period: "Dec 2021 - May 2025",
    location: "Sri City, India",
    coursework: "Data Structures, Algorithms, Python, Machine Learning, OOP, Computer Networks, Cryptography"
  }
];

export const credentials = [
  "IEEE publication: Design of Efficient RAM Cell using Quantum Dot Cellular Automata, 2024.",
  "IoT and Autonomous Systems certification through British Council and IEEE ITSS.",
  "Smart Mobility Hackathon work in skid detection and pothole detection using IMU sensors.",
  "Full Stack Development certification with hands-on development experience."
];

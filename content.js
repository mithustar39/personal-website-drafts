/* ------------------------------------------------------------------
   content.js — the only file you need to edit for copy changes.
   Both index.html (plain) and terminal.html read from this object,
   so fixing a typo once fixes it everywhere.

   Sources: resume.pdf, repo READMEs, GitHub descriptions.
------------------------------------------------------------------- */

window.SITE = {
  name: "Mithun Dhanasuthan",
  role: "Computer Systems Engineering",
  school: "Carleton University",
  location: "Ottawa, ON",
  email: "dmithun2022@gmail.com",
  github: "https://github.com/mithustar39",
  linkedin: "https://www.linkedin.com/in/mithun-dhanasuthan",
  resume: "https://mithustar39.github.io/resume.pdf",
  updated: "2026.11",

  about: [
    "I'm a first-year Computer Systems Engineering student at Carleton University. I've interned twice \u2014 at a fintech company, working on the data pipelines behind financial data syncing, and at a product development company, building mobile dashboards for connected devices.",
    "For now I'm most interested in software engineering \u2014 still working out which corner of it, but leaning toward the systems side.",
    "Outside of that I read a lot of manhwa and novels. Top three: Omniscient Reader's Viewpoint, Regressor of the Fallen Family, and Star Stellar Swordsmaster."
  ],

  now: "Currently learning how a computer works from the ground up",

  education: {
    school: "Carleton University",
    degree: "B.Eng. \u2014 Computer Systems Engineering",
    when: "Expected 2029",
    where: "Ottawa, ON",
    coursework: [
      "Programming & Data Management",
      "Circuits & Mechatronics",
      "Linear Algebra",
      "Calculus for Engineering"
    ]
  },

  work: [
    {
      role: "Software Engineering Intern",
      org: "CodeWilling",
      where: "Remote",
      when: "Jun \u2013 Aug 2026",
      points: [
        "Investigated and classified data pipeline failures for financial data syncing from on-premises servers to AWS, reviewing 1,000+ files per cycle by auditing Parquet outputs, cloud sync status, Delta transaction logs, and Athena / Databricks row counts.",
        "Resolved server node-limit errors by tracing stale ServerRequest records in MongoDB and updating machine-spawn failure handling so unsuccessful requests transition to terminated.",
        "Built unattended execution and reporting for 50+ Python Selenium UI tests across six product areas, integrating Claude to analyze failure logs and auto-generate email reports."
      ]
    },
    {
      role: "Software Engineer Intern \u2014 Mobile",
      org: "Velavu (Brash Inc.)",
      where: "Ottawa, ON",
      when: "Jul \u2013 Aug 2025",
      points: [
        "Optimized Gateway mobile dashboard load time by refactoring layout styling from positional to transform properties, reducing layout reflows on render.",
        "Integrated JSON-based device telemetry over REST APIs into mobile dashboard views to display hardware status, battery levels, and firmware versions, and trigger audio alerts.",
        "Built mobile dashboards for monitoring networks, floor maps, and site connectivity by translating Figma designs into production React Native interfaces."
      ]
    }
  ],

  projects: [
    {
      slug: "raven-scheduling",
      name: "Raven Scheduling",
      href: "https://github.com/mithustar39/ravennow",
      stack: "Python \u00b7 FastAPI \u00b7 React \u00b7 Docker",
      blurb: "Your Brightspace deadlines, in a browser side panel, kept up to date when profs move them. A Chrome/Edge extension reads the deadlines from pages you're already signed in to, and a FastAPI backend normalizes them and detects when a due date changes.",
      extra: "No account, no personal information \u2014 anonymous device tokens only."
    },
    {
      slug: "iron-ledger",
      name: "Iron Ledger",
      href: "https://github.com/mithustar39/iron-ledger",
      stack: "PWA \u00b7 Supabase",
      blurb: "Local-first workout tracker for iPhone Safari and desktop. Dashboard, live session with a rest timer, saved routines, and weight / TDEE trend stats \u2014 with optional cloud sync.",
      extra: ""
    },
    {
      slug: "basketball-analytics",
      name: "Basketball Position Analytics",
      href: "https://github.com/mithustar39/Basketball-Position-Analytics",
      stack: "Python \u00b7 Flask \u00b7 SQLAlchemy \u00b7 pandas \u00b7 NumPy \u00b7 Chart.js",
      blurb: "Flask app that processes NBA player stats into per-36 numbers, true-shooting percentage, and position averages. Submit your own attributes and it scores the closest professional match, then hands you a training roadmap.",
      extra: "Flask-Login auth with Werkzeug hashing, deployed to Render with Gunicorn."
    },
    {
      slug: "zeez-sleep-watch",
      name: "ZeeZ (Sleep Watch)",
      href: "https://github.com/mithustar39/Sleep-Tracker-Hack-the-Hill---Mithun-Surya-Henry-Ryan",
      stack: "Arduino \u00b7 Node \u00b7 Express \u00b7 MongoDB \u00b7 React \u00b7 Groq",
      blurb: "Hack the Hill II. An Arduino Nano 33 BLE and a MAX30102 pulse oximeter measure heart rate in real time; sensor readings flow through Express and MongoDB into a React dashboard that graphs the night and suggests recovery.",
      extra: ""
    }
  ],

  skills: [
    { k: "Languages",  v: ["Python", "JavaScript", "HTML/CSS"] },
    { k: "Frameworks", v: ["FastAPI", "Flask", "React", "React Native", "Selenium", "pandas", "NumPy"] },
    { k: "Tools",      v: ["Git", "Docker", "AWS (Athena, EC2)", "MongoDB", "SQLite", "Linux", "Figma", "Arduino"] }
  ]
};

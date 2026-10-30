/* ------------------------------------------------------------------
   content.js — the only file you need to edit for copy changes.
   Both index.html (quiet) and terminal.html read from this object,
   so fixing a typo once fixes it everywhere.

   Sources: resume.pdf (pdftotext), repo READMEs, GitHub descriptions.
   Anything marked TODO needs your eyes.
------------------------------------------------------------------- */

window.SITE = {
  name: "Mithun Dhanasuthan",
  role: "computer systems engineering",
  school: "Carleton University",
  location: "ottawa, on",
  email: "dmithun2022@gmail.com",
  github: "https://github.com/mithustar39",
  linkedin: "https://www.linkedin.com/in/mithun-dhanasuthan",
  resume: "https://mithustar39.github.io/resume.pdf",
  updated: "2026.10",

  about: [
    "I pull things apart to see how they work, then put them back together a little better. Usually that ends up as a small tool that fixes something that was bugging me.",
    "Carleton's due dates are unreadable, so I wrote a tracker. I wanted to know which players actually play like me, so I built one that says so."
  ],

  now: "software engineering intern @ codewilling \u00b7 prev mobile intern @ velavu",

  education: {
    school: "Carleton University",
    degree: "B.Eng. \u2014 Computer Systems Engineering",
    when: "expected apr 2030",
    where: "ottawa, on"
  },

  work: [
    {
      role: "Software Engineering Intern",
      org: "CodeWilling",
      where: "remote",
      when: "jun \u2013 aug 2026",
      points: [
        "Investigated and classified data pipeline failures for financial data syncing from on-premises servers to AWS, reviewing 1,000+ files per cycle by auditing Parquet outputs, cloud sync status, Delta transaction logs, and Athena / Databricks row counts.",
        "Resolved server node-limit errors by tracing stale ServerRequest records in MongoDB and updating machine-spawn failure handling so unsuccessful requests transition to terminated.",
        "Built unattended execution and reporting for 50+ Python Selenium UI tests across six product areas, integrating Claude to analyze failure logs and auto-generate email reports."
      ]
    },
    {
      role: "Software Engineer Intern \u2014 Mobile",
      org: "Velavu (Brash Inc.)",
      where: "ottawa, on",
      when: "jul \u2013 aug 2025",
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
      stack: "python \u00b7 fastapi \u00b7 react \u00b7 docker",
      blurb: "Your Brightspace deadlines, in a browser side panel, kept up to date when profs move them. A Chrome/Edge extension reads the deadlines from pages you're already signed in to, and a FastAPI backend normalizes them and detects when a due date changes.",
      extra: "No account, no personal information \u2014 anonymous device tokens only."
    },
    {
      slug: "iron-ledger",
      name: "Iron Ledger",
      href: "https://github.com/mithustar39/iron-ledger",
      stack: "pwa \u00b7 supabase",
      blurb: "Local-first workout tracker for iPhone Safari and desktop. Dashboard, live session with a rest timer, saved routines, and weight / TDEE trend stats \u2014 with optional cloud sync.",
      extra: ""
    },
    {
      slug: "basketball-analytics",
      name: "Basketball Position Analytics",
      href: "https://github.com/mithustar39/Basketball-Position-Analytics",
      stack: "python \u00b7 flask \u00b7 sqlalchemy \u00b7 pandas \u00b7 numpy \u00b7 chart.js",
      blurb: "Flask app that processes NBA player stats into per-36 numbers, true-shooting percentage, and position averages. Submit your own attributes and it scores the closest professional match, then hands you a training roadmap.",
      extra: "Flask-Login auth with Werkzeug hashing, deployed to Render with Gunicorn."
    },
    {
      slug: "zeez-sleep-watch",
      name: "ZeeZ (Sleep Watch)",
      href: "https://github.com/mithustar39/Sleep-Tracker-Hack-the-Hill---Mithun-Surya-Henry-Ryan",
      stack: "arduino \u00b7 node \u00b7 express \u00b7 mongodb \u00b7 react \u00b7 groq",
      blurb: "Hack the Hill II. An Arduino Nano 33 BLE and a MAX30102 pulse oximeter measure heart rate in real time; sensor readings flow through Express and MongoDB into a React dashboard that graphs the night and suggests recovery.",
      extra: ""
    },
    {
      // TODO: confirm this belongs here — it's a fork of CPRT/rover. Delete if you're not on the team.
      slug: "cprt-rover",
      name: "CPRT Rover",
      href: "https://github.com/CPRT/rover",
      stack: "docker \u00b7 wsl \u00b7 embedded",
      blurb: "On-board software for Carleton's Planetary Robotics Team rover, developed against a Docker dev container.",
      extra: ""
    }
  ],

  skills: [
    { k: "languages",  v: ["python", "javascript", "html/css"] },
    { k: "frameworks", v: ["fastapi", "flask", "react", "react native", "selenium", "pandas", "numpy"] },
    { k: "tools",      v: ["git", "docker", "aws (athena, ec2)", "mongodb", "sqlite", "linux", "figma", "arduino"] }
  ]
};

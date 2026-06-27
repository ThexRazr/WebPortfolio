// src/data/projects.js

export const projects = [
  {
    id: 1,
    title: "Athlete Tracking System",
    tagline: "Real-time player positioning via trilateration using UWB anchors.",
    category: "embedded",
    image: "/images/athlete-tracking.png",
    stack: ["ESP32", "Python", "UWB"],
    detail: {
      problem:
        "Coaches needed a way to track athlete positions on a field in real time without relying on GPS, which lacks the precision required for close-range sport analytics.",
      solution:
        "Built a UWB-based trilateration system using ESP32 modules as anchors and a central Python backend to compute and visualize player coordinates in real time.",
      architecture:
        "Three UWB anchor nodes communicate with a tag worn by the athlete. Time-difference-of-arrival data is sent over serial to a Python script that calculates X/Y position and plots it on a live field map.",
      challenges:
        "Synchronizing the anchor clocks was the hardest part — even small drift caused significant position error. Solved by implementing a two-way ranging protocol to measure and correct for offset.",
      improvements:
        "Would add more anchors for 3D positioning, and build a cleaner real-time dashboard with historical heatmap overlays for coaching review.",
    },
  },
  {
    id: 2,
    title: "Pickleball Tournament App",
    tagline: "End-to-end tournament management for 40+ players.",
    category: "software",
    image: "/images/pickleball-app.png",
    stack: ["Flask", "Python", "SQLite"],
    detail: {
      problem:
        "Managing brackets, scheduling, and score tracking for a large pickleball tournament was being done manually on spreadsheets, causing errors and confusion.",
      solution:
        "Built a full-stack Flask web app that handles player registration, automatic bracket generation, live score entry, and standings — all in one interface.",
      architecture:
        "Python/Flask backend with SQLite for persistence. Jinja2-templated frontend with dynamic bracket rendering. Hosted locally for tournament-day use.",
      challenges:
        "Generating balanced brackets dynamically for an odd number of players required handling byes gracefully. Also had to design the UI to be usable on phones since referees were entering scores courtside.",
      improvements:
        "Would migrate to a real database like PostgreSQL, add user authentication for referees vs. admins, and deploy it publicly so future tournaments can reuse it.",
    },
  },
  {
    id: 3,
    title: "MIPS Microprocessor",
    tagline: "Custom 32-bit CPU built from scratch on an FPGA.",
    category: "hardware",
    image: "/images/mips-cpu.png",
    stack: ["VHDL", "FPGA", "Quartus"],
    detail: {
      problem:
        "As part of computer architecture coursework, the goal was to deeply understand CPU design by implementing a working MIPS processor rather than just studying one.",
      solution:
        "Designed and implemented a 32-bit MIPS processor in VHDL, including the ALU, register file, control unit, and a 5-stage pipeline, synthesized and tested on a physical FPGA board.",
      architecture:
        "Five-stage pipeline: IF → ID → EX → MEM → WB. Separate instruction and data memory. Forwarding unit to handle data hazards. Branch prediction defaulting to not-taken.",
      challenges:
        "Handling pipeline hazards — especially load-use hazards — required careful stall and forwarding logic. Debugging on hardware using SignalTap logic analyzer was time-consuming but revealing.",
      improvements:
        "Would add a cache layer, extend the instruction set to include floating point operations, and implement a proper branch predictor with a BTB.",
    },
  },
  {
    id: 4,
    title: "NBA Fan App",
    tagline: "Full-stack sports app with live ESPN data and user accounts.",
    category: "software",
    image: "/images/nba-app.png",
    stack: ["React", "Node.js", "MySQL"],
    detail: {
      problem:
        "Existing NBA apps are bloated and ad-heavy. Wanted to build a clean, fast fan app that pulls live game data and lets users track their favorite teams and players.",
      solution:
        "Built a full-stack app with a React frontend, Node/Express API layer, and MySQL database. Pulls live scores and stats from the ESPN API and lets users save favorites with a persistent account.",
      architecture:
        "React SPA communicates with a RESTful Express backend. MySQL stores user profiles and saved preferences. ESPN's undocumented API polled on a schedule for live game data.",
      challenges:
        "ESPN's API is undocumented and occasionally changes its response structure, which caused silent data failures. Added a validation layer to catch schema mismatches before they hit the UI.",
      improvements:
        "Would add WebSocket support for truly live score updates instead of polling, and rebuild the auth system using JWTs with refresh tokens for better security.",
    },
  },
]
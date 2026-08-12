import type { Quiz } from "../types";

export const quizzes: Quiz[] = [
  {
    id: "day-1",
    title: "Computers, Internet & Cloud Quiz",
    description:
      "Test your understanding of computers, networking basics, and cloud concepts.",
    questions: [
      {
        id: "q1",
        question:
          "What does CPU stand for?",
        options: [
          "Central Processing Unit",
          "Cloud Processing Unit",
          "Computer Program Utility",
          "Core Processing User",
        ],
        answer: 0,
      },
      {
        id: "q2",
        question:
          "What is the main purpose of an operating system?",
        options: [
          "Manage hardware and software resources",
          "Create websites",
          "Replace the CPU",
          "Provide internet access only",
        ],
        answer: 0,
      },
      {
        id: "q3",
        question:
          "What does DNS translate?",
        options: [
          "Passwords into usernames",
          "Domain names into IP addresses",
          "Files into folders",
          "Code into applications",
        ],
        answer: 1,
      },
    ],
  },

  {
    id: "day-2",
    title: "Linux Fundamentals Quiz",
    description:
      "Test your understanding of Linux commands, filesystem, permissions, and SSH.",
    questions: [
      {
        id: "q1",
        question:
          "Which command is used to list files in Linux?",
        options: [
          "cd",
          "ls",
          "mkdir",
          "pwd",
        ],
        answer: 1,
      },
      {
        id: "q2",
        question:
          "What does SSH allow you to do?",
        options: [
          "Securely connect to a remote machine",
          "Create a database",
          "Install Windows",
          "Monitor CPU temperature",
        ],
        answer: 0,
      },
      {
        id: "q3",
        question:
          "Which command shows the current directory?",
        options: [
          "pwd",
          "rm",
          "touch",
          "nano",
        ],
        answer: 0,
      },
    ],
  },

  {
    id: "day-3",
    title: "Networking Fundamentals Quiz",
    description:
      "Test your understanding of networking, TCP/IP, DNS, routing, and subnetting.",
    questions: [
      {
        id: "q1",
        question:
          "What does IP stand for?",
        options: [
          "Internet Protocol",
          "Internal Process",
          "Internet Program",
          "Interface Port",
        ],
        answer: 0,
      },
      {
        id: "q2",
        question:
          "What is the purpose of a subnet mask?",
        options: [
          "Identify network and host portions of an IP address",
          "Encrypt network traffic",
          "Create DNS records",
          "Store application files",
        ],
        answer: 0,
      },
      {
        id: "q3",
        question:
          "Which service translates domain names into IP addresses?",
        options: [
          "DHCP",
          "DNS",
          "FTP",
          "SSH",
        ],
        answer: 1,
      },
    ],
  },

  {
  id: "day-4",
  title: "Git & GitHub Fundamentals Quiz",
  description:
    "Test your understanding of Git, repositories, commits, branches, and GitHub workflows.",
  questions: [
    {
      id: "q1",
      question:
        "What is Git?",
      options: [
        "A distributed version control system",
        "A cloud storage platform",
        "A programming language",
        "A database system",
      ],
      answer: 0,
    },

    {
      id: "q2",
      question:
        "Which command stages files before committing?",
      options: [
        "git push",
        "git add",
        "git clone",
        "git merge",
      ],
      answer: 1,
    },

    {
      id: "q3",
      question:
        "What is the purpose of a Git branch?",
      options: [
        "Delete repository history",
        "Create an isolated workspace for changes",
        "Upload files to GitHub",
        "Install Git",
      ],
      answer: 1,
    },

    {
      id: "q4",
      question:
        "Which command uploads local commits to GitHub?",
      options: [
        "git pull",
        "git init",
        "git push",
        "git status",
      ],
      answer: 2,
    },

    {
      id: "q5",
      question:
        "What is a Pull Request used for?",
      options: [
        "Review and merge code changes",
        "Delete branches",
        "Install dependencies",
        "Create local repositories",
      ],
      answer: 0,
    },
  ],
},
];
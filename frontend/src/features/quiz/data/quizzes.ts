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
];
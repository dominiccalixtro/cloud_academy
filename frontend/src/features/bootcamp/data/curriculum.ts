import type { Module } from "../types";

export const curriculum: Module[] = [
  {
    id: "module-1",
    title: "Cloud Engineering Foundations",
    description:
      "Build the core knowledge every cloud engineer needs before working with AWS.",
    lessons: [
      {
        id: "day-1",
        week: 1,
        day: 1,
        title: "Computers, Internet & Cloud",
        duration: "2-3 Hours",
        description:
          "Learn how computers communicate, how the Internet works, what servers are, and how cloud computing changed modern IT.",
        objectives: [
          "Understand how computers work",
          "Explain how the Internet works",
          "Differentiate physical and virtual servers",
          "Understand cloud computing concepts",
        ],
        presentation:
          "/course-content/day-1/lesson.pdf",
        powerpoint:
          "/course-content/day-1/lesson.pptx",
        status: "available",
      },

      {
        id: "day-2",
        week: 1,
        day: 2,
        title: "Linux Fundamentals",
        duration: "3 Hours",
        description:
          "Learn Linux commands, file systems, permissions, processes, and SSH fundamentals.",
        objectives: [
          "Navigate the Linux filesystem",
          "Understand file permissions",
          "Use common Linux commands",
          "Connect using SSH",
        ],
        presentation:
          "/course-content/day-2/lesson.pdf",
        powerpoint:
          "/course-content/day-2/lesson.pptx",
        status: "available",
      },

      {
        id: "day-3",
        week: 1,
        day: 3,
        title: "Networking Fundamentals",
        duration: "3 Hours",
        description:
          "Learn networking fundamentals including the OSI Model, TCP/IP, subnetting, routing, DNS, and AWS networking concepts.",
        objectives: [
          "Understand computer networking",
          "Explain the OSI Model",
          "Understand the TCP/IP Model",
          "Learn IPv4 addressing",
          "Understand subnetting",
          "Explain DNS",
          "Understand routing",
        ],
        presentation:
          "/course-content/day-3/lesson.pdf",
        powerpoint:
          "/course-content/day-3/lesson.pptx",
        status: "available",
      },
    ],
  },
];
import type { Module } from "../types";

const s3BaseUrl =
  "https://cloud-academy-content-042972420563-ap-southeast-1-an.s3.ap-southeast-1.amazonaws.com";

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
        difficulty: "Beginner",
        objectives: [
          "Understand how computers work",
          "Explain how the Internet works",
          "Differentiate physical and virtual servers",
          "Understand cloud computing concepts",
        ],
        presentation:
          `${s3BaseUrl}/course-content/week-1/day-1/lesson.pdf`,
        powerpoint:
          `${s3BaseUrl}/course-content/week-1/day-1/lesson.pptx`,
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
        difficulty: "Beginner",
        objectives: [
          "Navigate the Linux filesystem",
          "Understand file permissions",
          "Use common Linux commands",
          "Connect using SSH",
        ],
        presentation:
          `${s3BaseUrl}/course-content/week-1/day-2/lesson.pdf`,
        powerpoint:
          `${s3BaseUrl}/course-content/week-1/day-2/lesson.pptx`,
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
        difficulty: "Beginner",
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
          `${s3BaseUrl}/course-content/week-1/day-3/lesson.pdf`,
        powerpoint:
          `${s3BaseUrl}/course-content/week-1/day-3/lesson.pptx`,
        status: "available",
      },

      {
        id: "day-4",
        week: 1,
        day: 4,
        title: "Git & GitHub Fundamentals",
        duration: "3 Hours",
        description:
          "Learn version control fundamentals using Git, manage repositories, create commits and branches, collaborate using GitHub, and understand modern development workflows.",
        difficulty: "Beginner",
        objectives: [
          "Understand version control and why Git exists",
          "Create repositories and manage commits",
          "Understand Git staging and workflow",
          "Create and merge branches",
          "Resolve basic merge conflicts",
          "Use GitHub repositories with push, pull, and clone",
          "Understand pull requests and team collaboration",
        ],
        presentation:
          `${s3BaseUrl}/course-content/week-1/day-4/lesson.pdf`,
        powerpoint:
          `${s3BaseUrl}/course-content/week-1/day-4/lesson.pptx`,
        status: "available",
      },
    ],
  },
];
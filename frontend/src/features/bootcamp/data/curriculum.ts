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
        status: "completed",
      },
      {
        id: "day-2",
        week: 1,
        day: 2,
        title: "Linux Fundamentals",
        duration: "3 Hours",
        status: "completed",
      },
      {
        id: "day-3",
        week: 1,
        day: 3,
        title: "Networking Fundamentals",
        duration: "3 Hours",
        status: "available",
      },
    ],
  },
];
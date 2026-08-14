export type LessonStatus = "completed" | "available" | "locked";

export interface Lesson {

    id: string;

    week: number;

    day: number;

    title: string;

    duration: string;

    description: string;

    difficulty?: "Beginner" | "Intermediate" | "Advanced";

    objectives: string[];

    presentation: string;

    powerpoint: string;

    status: LessonStatus;
}

export interface Module {

    id: string;

    title: string;

    description: string;

    lessons: Lesson[];
}
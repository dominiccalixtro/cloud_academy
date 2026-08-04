import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  getCompletedLessons,
  toggleLessonCompletion,
} from "../services/progress.service";

interface ProgressContextType {
  completedLessons: string[];
  isCompleted: (lessonId: string) => boolean;
  toggleCompleted: (lessonId: string) => void;
}

const ProgressContext = createContext<ProgressContextType | null>(null);

interface ProgressProviderProps {
  children: ReactNode;
}

export function ProgressProvider({
  children,
}: ProgressProviderProps) {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  useEffect(() => {
    setCompletedLessons(getCompletedLessons());
  }, []);

  function toggleCompleted(lessonId: string) {
    toggleLessonCompletion(lessonId);

    setCompletedLessons(getCompletedLessons());
  }

  const value = useMemo(
    () => ({
      completedLessons,

      isCompleted: (lessonId: string) =>
        completedLessons.includes(lessonId),

      toggleCompleted,
    }),
    [completedLessons]
  );

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);

  if (!context) {
    throw new Error(
      "useProgress must be used inside ProgressProvider"
    );
  }

  return context;
}
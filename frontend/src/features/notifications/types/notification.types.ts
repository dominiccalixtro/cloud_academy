export interface Notification {
  id: string;
  title: string;
  message: string;
  type:
  | "lesson"
  | "quiz";
  read: boolean;
  createdAt: string;
}
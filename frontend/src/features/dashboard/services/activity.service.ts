const STORAGE_KEY =
  "cloud-academy-activity";

export interface Activity {
  id: string;
  type:
    | "lesson_complete"
    | "quiz_complete";
  title: string;
  description: string;
  date: string;
}

function getActivities(): Activity[] {
  const data =
    localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return [];
  }

  return JSON.parse(data);
}


function saveActivities(
  activities: Activity[]
) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(activities)
  );
}


export function addActivity(
  activity: Omit<Activity, "id" | "date">
) {
  const activities =
    getActivities();

  const newActivity: Activity = {
    ...activity,
    id: crypto.randomUUID(),
    date: new Date().toISOString(),
  };


  saveActivities([
    newActivity,
    ...activities,
  ]);
}


export function getRecentActivities() {
  return getActivities().slice(0, 5);
}


export function clearActivities() {
  localStorage.removeItem(
    STORAGE_KEY
  );
}
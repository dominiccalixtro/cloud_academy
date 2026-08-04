import { WelcomeCard } from "../components/WelcomeCard";
import { ProgressCard } from "../components/ProgressCard";
import { ContinueLearningCard } from "../components/ContinueLearningCard";
import { RecentQuizCard } from "../components/RecentQuizCard";
import { AnnouncementCard } from "../components/AnnouncementCard";

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <WelcomeCard />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ProgressCard />
        <ContinueLearningCard />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <RecentQuizCard />
        <AnnouncementCard />
      </div>
    </div>
  );
}
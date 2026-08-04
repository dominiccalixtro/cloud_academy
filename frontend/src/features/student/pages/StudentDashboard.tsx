import { WelcomeCard } from "../../dashboard/components/WelcomeCard";
import { LearningStatsCard } from "../../dashboard/components/LearningStatsCard";
import { ContinueLearningCard } from "../../dashboard/components/ContinueLearningCard";
import { ProgressCard } from "../../dashboard/components/ProgressCard";
import { RecentQuizCard } from "../../dashboard/components/RecentQuizCard";
import { AchievementCard } from "../../dashboard/components/AchievementCard";
import { ActivityCard } from "../../dashboard/components/ActivityCard";
import { AnnouncementCard } from "../../dashboard/components/AnnouncementCard";


export function StudentDashboard() {

  return (

    <div className="space-y-6">


      <WelcomeCard />



      <div className="
        grid
        grid-cols-1
        gap-6
        lg:grid-cols-2
      ">

        <LearningStatsCard />

        <ContinueLearningCard />

      </div>




      <div className="
        grid
        grid-cols-1
        gap-6
        lg:grid-cols-2
      ">

        <ProgressCard />

        <RecentQuizCard />

      </div>




      <AchievementCard />

      <ActivityCard />

      <AnnouncementCard />


    </div>

  );
}
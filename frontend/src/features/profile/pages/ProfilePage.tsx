import { useAuth } from "../../auth/context/AuthContext";
import { InstructorPage } from "../../instructor/pages/InstructorPage";
import { ProfileHeader } from "../components/ProfileHeader";
import { ProfileStats } from "../components/ProfileStats";
import { CertificateCard } from "../components/CertificateCard";

export function ProfilePage() {
  const { user } = useAuth();

  if (user?.role === "instructor") {
    return <InstructorPage />;
  }

  return (
    <div className="space-y-8">
      <ProfileHeader />

      <div>
        <h2 className="mb-4 text-2xl font-bold">Learning Overview</h2>
        <ProfileStats />
      </div>

      <CertificateCard />
    </div>
  );
}
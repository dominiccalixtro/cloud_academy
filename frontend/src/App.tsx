import { AppLayout } from "./layouts/AppLayout";
import { DashboardPage } from "./features/dashboard/pages/DashboardPage";

function App() {
  return (
    <AppLayout>
      <DashboardPage />
    </AppLayout>
  );
}

export default App;
import SideBar from "../../components/sideBar/sideBar";
import TopBar from "../../components/topbar/topbar.component";

import "./dashboard-page.style.scss";

const DashboardPage = () => {
  return (
    <div className="dashboardPage">
      <TopBar />
      <SideBar />
    </div>
  );
};

export default DashboardPage;

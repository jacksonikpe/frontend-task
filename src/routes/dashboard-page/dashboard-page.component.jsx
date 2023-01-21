import DashboardBody from "../../components/dashboardBody/dashboardBody.component";
import SideBar from "../../components/sideBar/sideBar";
import TopBar from "../../components/topbar/topbar.component";

import "./dashboard-page.style.scss";

const DashboardPage = () => {
  return (
    <div className="dashboardPage">
      <TopBar />
      <SideBar />
      <DashboardBody />
    </div>
  );
};

export default DashboardPage;

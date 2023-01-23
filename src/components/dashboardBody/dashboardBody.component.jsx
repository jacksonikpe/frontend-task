import AccountDashboard from "../accountDashboard/accountDashboard.component";
import ActivityFeed from "../activityFeed/activityFeed";
import DashboardHeadingTopRow from "../dashboardHeadingTopRow/dashboardHeadingTopRow.component";
import DashboardInfo from "../dashboardInfo/dashboardInfo.component";
import "./dashboardBody.style.scss";

import { SelectedRowProvider } from "../../context.js";

const DashboardBody = () => {
  return (
    <SelectedRowProvider>
      <div className="bodyContainer">
        <DashboardHeadingTopRow />
        <div className="leftRightSection">
          <div className="leftSection">
            <DashboardInfo />
            <AccountDashboard />
          </div>
          <div className="rightSection">
            <ActivityFeed />
          </div>
        </div>
      </div>
    </SelectedRowProvider>
  );
};

export default DashboardBody;

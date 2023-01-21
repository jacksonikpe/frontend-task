import DashboardHeadingTopRow from "../dashboardHeadingTopRow/dashboardHeadingTopRow.component";
import DashboardInfo from "../dashboardInfo/dashboardInfo.component";
import "./dashboardBody.style.scss";

const DashboardBody = () => {
  return (
    <div className="bodyContainer">
      <DashboardHeadingTopRow />
      <div className="leftRightSection">
        <div className="leftSection">
          <DashboardInfo />
        </div>
        <div className="rightSection">right</div>
      </div>
    </div>
  );
};

export default DashboardBody;

import "./dashboardHeadingTopRowstyle.scss";
import { ReactComponent as CreateNewBranchIcon } from "./../../assets/img/createNewBranchIcon.svg";
import { ReactComponent as CreateVirtualAccountIcon } from "./../../assets/img/createVirtualAccountIcon.svg";

const DashboardHeadingTopRow = () => {
  return (
    <div className="firstRow">
      <div className="heading">Virtual Account Dashboard</div>
      <div className="buttons">
        <button className="button leftBtn">
          <CreateNewBranchIcon />
          <span>Create New Branch</span>
        </button>
        <button className="button rightBtn">
          <CreateVirtualAccountIcon />
          <span>Create Virtual Account</span>
        </button>
      </div>
    </div>
  );
};

export default DashboardHeadingTopRow;

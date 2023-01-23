import "./accountDashboard.style.scss";
import { ReactComponent as ScreenLayout1 } from "./../../assets/img/screenLayout1.svg";
import { ReactComponent as ScreenLayout2 } from "./../../assets/img/screenLayout2.svg";
import { ReactComponent as ManageSettings } from "./../../assets/img/manageSettings.svg";
import AccountTable from "../accountTable/accountTable";

const AccountDashboard = ({ onRowClick }) => {
  return (
    <div className="accountCard">
      <div className="heading">
        <div className="headText">Your Virtual Account</div>
        <div className="layoutIcons">
          <span style={{ marginRight: "0.6em" }}>
            <ScreenLayout1 />
          </span>
          <ScreenLayout2 />
        </div>
      </div>
      <div className="lineBreak"></div>

      <div className="searchRow">
        <div className="branchButton">Branch</div>
        <div className="searchandicon">
          <input
            className="searchButton"
            type="text"
            placeholder="Search for virtual account"
          />
        </div>
      </div>
      <div className="lineBreak"></div>

      <div className="settingsRow">
        <div className="location">Lekki II</div>
        <div className="settings">
          <div className="manage">Manage</div>
          <ManageSettings />
        </div>
      </div>
      <AccountTable onRowClick={onRowClick} />
    </div>
  );
};

export default AccountDashboard;

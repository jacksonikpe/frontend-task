import { useContext } from "react";
import ActivityFeedTable from "../activityFeedTable/activityFeedTable";
import Location from "../locationBadge/locationBadge";
import { SelectedRowContext } from "../../context.js";
import "./activityFeed.scss";

import {
  FirstBankFeed,
  GtBankFeed,
  PolarisFeed,
  ProvidusFeed,
} from "../../utils/data/transactions";

const ActivityFeed = () => {
  const { selectedRowId } = useContext(SelectedRowContext);

  let accountFeed;
  switch (selectedRowId) {
    case "Gtbank":
      accountFeed = GtBankFeed;
      break;
    case "Polaris":
      accountFeed = PolarisFeed;
      break;
    case "ProviduceBank":
      accountFeed = ProvidusFeed;
      break;
    case "FirstBank":
      accountFeed = FirstBankFeed;
      break;
    default:
      accountFeed = "Polaris";
  }
  return (
    <div className="activityFeedContainer">
      <div className="activityFeedHeader">
        <div className="activityHeading">
          Activity Feed - <span>{accountFeed.name}</span>
        </div>
        <div className="status">
          <div className="active">Active</div>
          <div className="created">
            <div></div>Created 16 days ago
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="infoHeader">
        <div className="BankDetails">
          <div className="bankName">{accountFeed.fullname}</div>
          <div className="bankNo">{accountFeed.accountNo}</div>
        </div>
        <button className="accountViewButton">Go to Account View</button>
      </div>
      <div className="lineDivider"></div>
      <div className="feedDetails">
        <div className="totalFlow">
          <div className="text">Total Inflow</div>
          <div className="fig">{accountFeed.totalInflow}</div>
        </div>
        <div className="lastActivity">
          <div className="text">Last Activity Date</div>
          <div className="fig">{accountFeed.lastActivityDate}</div>
        </div>
        <div className="branch">
          <div className="text">Linked Branch</div>
          <Location color={accountFeed.linkedBranch} name={"Lekki II"} />
        </div>
      </div>
      <div className="lineDivider"></div>

      <ActivityFeedTable />
    </div>
  );
};

export default ActivityFeed;

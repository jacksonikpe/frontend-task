import "./dashboardInfo.style.scss";

const DashboardInfo = () => {
  return (
    <div className="card">
      <div className="cardInfo" style={{ marginLeft: "0" }}>
        <div className="infoTop">Total Credits</div>
        <div className="infoButtom">
          NGN 3,287,902.<small>00</small>
        </div>
      </div>
      <div className="cardInfo">
        <div className="infoTop">Total Transfer Settlements</div>
        <div className="infoButtom">81 Settlement</div>
      </div>
      <div className="cardInfo">
        <div className="infoTop">Generated Accounts</div>
        <div className="infoButtom">12Accounts</div>
      </div>
    </div>
  );
};

export default DashboardInfo;

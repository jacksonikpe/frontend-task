import { useContext, useEffect } from "react";

import "./activityFeedTable.scss";
import { SelectedRowContext } from "../../context.js";

import {
  Gtbank,
  Polaris,
  ProviduceBank,
  irstBank,
} from "../../utils/data/transactions";

const ActivityFeedTable = () => {
  const { selectedRowId } = useContext(SelectedRowContext);

  let bankData;
  switch (selectedRowId) {
    case "Gtbank":
      bankData = Gtbank;
      break;
    case "Polaris":
      bankData = Polaris;
      break;
    case "ProviduceBank":
      bankData = ProviduceBank;
      break;
    case "FirstBank":
      bankData = irstBank;
      break;
    default:
      bankData = Polaris;
  }
  return (
    <table className="activityFeedTable">
      <thead>
        <tr>
          <th>Transaction Details</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {bankData.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.details}</td>
            <td>{transaction.amount}</td>
            <td className="date">{transaction.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ActivityFeedTable;

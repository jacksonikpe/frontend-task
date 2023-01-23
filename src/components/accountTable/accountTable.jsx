import { useState, useEffect, useContext } from "react";
import { SelectedRowContext } from "../../context.js";

import "./accountTable.scss";
import { ReactComponent as Polaris } from "../../assets/img/polarisBank.svg";
import { ReactComponent as Gtbank } from "../../assets/img/gtbank.svg";
import { ReactComponent as ProviduceBank } from "../../assets/img/providuceBank.svg";
import { ReactComponent as FirstBank } from "../../assets/img/firstBank.svg";
import { ReactComponent as CopyImg } from "../../assets/img/copyicon.svg";
import { ReactComponent as Option } from "../../assets/img/optionsimg.svg";
import Location from "../locationBadge/locationBadge";

const AccountTable = () => {
  const { selectedRowId, setSelectedRowId } = useContext(SelectedRowContext);

  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (event) => {
    setSelectedRow(event.currentTarget);
    setSelectedRowId(event.currentTarget.id);
    console.log(selectedRowId);
  };

  useEffect(() => {
    if (selectedRow) {
      selectedRow.classList.add("selected");
    }
    return () => {
      if (selectedRow) {
        selectedRow.classList.remove("selected");
      }
    };
  }, [selectedRow]);
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Bank Name</th>
          <th></th>
          <th>Account Number</th>
          <th></th>
          <th></th>
          <th>Total info</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr onClick={handleRowClick} id="Polaris">
          <td>
            <Polaris />
          </td>
          <td>Polaris Bank Limited</td>
          <td>08023221144</td>
          <td>
            <CopyImg />
          </td>
          <td>
            <Location color={"blue"} name={"Ikeja"} />
          </td>
          <td>NGN100,000.00</td>
          <td>
            <Option />
          </td>
        </tr>
        <tr onClick={handleRowClick} id="Gtbank">
          <td>
            <Gtbank />
          </td>
          <td>Guranty Trust Holding</td>
          <td>08023221144</td>
          <td style={{ color: "#5444F2" }}>Copied</td>
          <td>
            <Location color={"yellow"} name={"Lekki II"} />
          </td>
          <td>NGN100,000.00</td>
          <td>
            <Option />
          </td>
        </tr>
        <tr onClick={handleRowClick} id="ProviduceBank">
          <td>
            <ProviduceBank />
          </td>
          <td>Providus Bank</td>
          <td>08023221144</td>
          <CopyImg />
          <td>
            <Location color={"yellow"} name={"Lekki II"} />
          </td>
          <td>NGN100,000.00</td>
          <td>
            <Option />
          </td>
        </tr>
        <tr onClick={handleRowClick} id="FirstBank">
          <td>
            <FirstBank />
          </td>
          <td>First Bank of Nigeria</td>
          <td>08023221144</td>
          <CopyImg />
          <td>
            <Location color={"purple"} name={"Abuja"} />
          </td>
          <td>NGN100,000.00</td>
          <td>
            <Option />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default AccountTable;

import "./sideBar.scss";

import { ReactComponent as Welcome } from "../../assets/img/welcome.svg";
import { ReactComponent as Compliance } from "../../assets/img/compliance.svg";
import { ReactComponent as Overview } from "../../assets/img/overview.svg";
import { ReactComponent as Products } from "../../assets/img/products.svg";
import { ReactComponent as Customers } from "../../assets/img/customers.svg";
import { ReactComponent as Orders } from "../../assets/img/orders.svg";
import { ReactComponent as Wallets } from "../../assets/img/wallets.svg";
import { ReactComponent as Transactions } from "../../assets/img/transactions.svg";
import { ReactComponent as VirtualAccount } from "../../assets/img/virtual-account.svg";

import { useState } from "react";
import { RxSwitch } from "react-icons/rx";
import { RiSettings4Line } from "react-icons/ri";
import { CiServer } from "react-icons/ci";

function SideBar() {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpaned] = useState(true);

  return (
    <div className="sideBar">
      <div className="menu">
        <ul>
          <li>
            <a href="#" className="menuItem">
              <span>
                <Welcome />
              </span>
              <span className="menuText">Welcome</span>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#" className="menuItem">
              <span>
                <Compliance />
              </span>
              <span className="menuText">Compliance</span>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#" className="menuItem">
              <span>
                <Overview />
              </span>
              <span className="menuText">Overview</span>
            </a>
          </li>
        </ul>

        <h2 className="menuHeadering">Business</h2>

        <ul>
          <li>
            <a href="#" className="menuItem">
              <span>
                <Products />
              </span>
              <span className="menuText">Products</span>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#" className="menuItem">
              <span>
                <Customers />
              </span>
              <span className="menuText">Customers</span>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#" className="menuItem">
              <span>
                <Orders />
              </span>
              <span className="menuText">Orders</span>
            </a>
          </li>
        </ul>

        <h2 className="menuHeadering">Payments</h2>

        <ul>
          <li>
            <a href="#" className="menuItem">
              <span>
                <Wallets />
              </span>
              <span className="menuText">Wallets</span>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#" className="menuItem">
              <span>
                <Transactions />
              </span>
              <span className="menuText">Transactions</span>
            </a>
          </li>
        </ul>
        <ul style={{ marginBottom: "0" }}>
          <li>
            <a href="#" className="menuItem">
              <span>
                <VirtualAccount />
              </span>
              <span className="menuText" style={{ color: "#5444F2" }}>
                VirtualAccount
              </span>
            </a>
          </li>
        </ul>
        <small className="new">New</small>
      </div>
      {/* Configure menu */}

      <div className="menu configure">
        <div className="configureDivider"></div>
        <ul>
          <li>
            <a href="#" className="menuItem">
              <span>
                <RxSwitch className="configureIcons" />
              </span>
              <span className="menuText">Live mode</span>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#" className="menuItem">
              <span>
                <RiSettings4Line className="configureIcons" />
              </span>
              <span className="menuText">Settings</span>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#" className="menuItem">
              <span>
                <CiServer className="configureIcons" />
              </span>
              <span className="menuText">Audit logs</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;

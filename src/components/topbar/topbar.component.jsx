import "./topbar.style.scss";
import { ReactComponent as LogoImg } from "../../assets/img/logo-img.svg";
import { ReactComponent as LogoText } from "../../assets/img/logo-text.svg";
import { ReactComponent as NotificationBell } from "../../assets/img/notificationBell.svg";
import { ReactComponent as InfoDropDownIcon } from "../../assets/img/infoDropDownIcon.svg";

const TopBar = () => {
  return (
    <div className="topBar">
      <div className="topBarWrapper">
        <div className="topLeft">
          <span>
            <LogoImg />
          </span>
          <span className="logoText">
            <LogoText />
          </span>
        </div>
        <div className="topRight">
          <div className="notificationBell">
            <NotificationBell />
          </div>
          <div className="profileInfoDropdown">
            <div className="initials">JT</div>
            <div className="dropdown">
              <div className="companyName">JT Industry Limit..</div>
              <div className="companyEmail">JamesT@gmail.com</div>
            </div>
            <InfoDropDownIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

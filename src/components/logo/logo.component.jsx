import { ReactComponent as ImgLogo } from "../../assets/img/logo-img.svg";
import { ReactComponent as TextLogo } from "../../assets/img/logo-text.svg";

import "./logo.style.scss";

function Logo() {
  return (
    <div className="logoGroup">
      <span className="rightLogo">
        <ImgLogo />
      </span>
      <span className="leftLogo">
        <TextLogo />
      </span>
    </div>
  );
}

export default Logo;

import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Header.moudule.scss";
import images from "~/assets/images/logo.svg";
import {
  faCircle,
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function Header() {
  console.log("dsa", images);

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images} alt="Tiktok" />
        </div>
        <div className={cx("search")}>
          <input
            placeholder="Search accounts and videos"
            type="text"
            spellCheck={false}
          ></input>
          <button className={cx("clear")}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <FontAwesomeIcon icon={faSpinner} className={cx("loading")} />
          <button className={cx("search-btn")}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              
            />
          </button>
        </div>
        <div className={cx("actions")}></div>
      </div>
    </header>
  );
}

export default Header;

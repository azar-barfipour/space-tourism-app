import classes from "./Header.module.css";
import { ReactComponent as Logo } from "../../assets/shared/logo.svg";
import { ReactComponent as Nav } from "../../assets/shared/icon-hamburger.svg";
import { useState } from "react";
const Header = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const navOpenHandler = () => {
    setIsOpenNav(!isOpenNav);
  };
  return (
    <div className={classes["header-wrapper"]}>
      <Logo className={classes["logo-wrapper"]} />
      <div className={classes["nav__wrapper"]}>
        <Nav onClick={navOpenHandler} />
        <ul
          className={`${classes["nav__items"]}  ${
            isOpenNav ? classes["nav--open"] : ""
          }`}
        >
          <li className={classes["nav__item"]}>HOME</li>
          <li className={classes["nav__item"]}>DESTINATION</li>
          <li className={classes["nav__item"]}>CREW</li>
          <li className={classes["nav__item"]}>TECHNOLOGY</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;

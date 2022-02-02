import classes from "./Header.module.css";
import { ReactComponent as Logo } from "../../assets/shared/logo.svg";
import { ReactComponent as Nav } from "../../assets/shared/icon-hamburger.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const navOpenHandler = (e) => {
    e.preventDefault();
    setIsOpenNav(!isOpenNav);
  };
  return (
    <div className={classes["header-wrapper"]}>
      <Logo className={classes["logo-wrapper"]} />
      <div className={classes["nav__wrapper"]}>
        <Nav onClick={navOpenHandler} className={classes["nav"]} />
        <ul
          className={`${classes["nav__items"]}  ${
            isOpenNav ? classes["nav--open"] : ""
          }`}
        >
          <li className={classes["nav__item"]}>
            <NavLink
              className={(nav) => (nav.isActive ? classes.active : "")}
              to="/home"
            >
              HOME
            </NavLink>
          </li>

          <li className={classes["nav__item"]}>
            {" "}
            <NavLink
              className={(nav) => (nav.isActive ? classes.active : "")}
              to="/destination"
            >
              DESTINATION
            </NavLink>
          </li>

          <li className={classes["nav__item"]}>
            <NavLink
              className={(nav) => (nav.isActive ? classes.active : "")}
              to="/crew"
            >
              CREW
            </NavLink>
          </li>

          <li className={classes["nav__item"]}>
            <NavLink
              className={(nav) => (nav.isActive ? classes.active : "")}
              to="/technology"
            >
              TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;

import { Fragment } from "react";
import Logo from '../../assests/Images/logo.png';
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <img src={Logo} />
        <nav className={classes['main-nav']}>
          <ul className={classes['main-nav__items']}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Board</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Photos</a>
            </li>
            <li>
              <a href="#">Reports</a>
            </li>
            <li className={classes['nav_item--cta']}>
              <a href="#" >Become a member</a>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;

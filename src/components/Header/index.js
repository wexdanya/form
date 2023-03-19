import React from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className={styles.header_wraper}>
      <NavLink to="/">
        <img src="./static/images/logo.webp" alt="logo squadhelp" />
      </NavLink>
      {pathname === "/login" ? (
        <NavLink to="/signup" className={styles.header_button}>Signup</NavLink>
      ) : (
        <NavLink to="/login" className={styles.header_button}>Login</NavLink>
      )}
    </header>
  );
};

export default Header;

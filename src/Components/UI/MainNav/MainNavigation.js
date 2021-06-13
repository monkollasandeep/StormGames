import React from "react";
import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  const logoutHandler = () => {
    props.setisLoggedin(false);
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Storm Games</div>
      <nav className={styles.nav}>
        <ul>
          {props.isLoggedin && (
            <li>
              <Link to="/home">Home</Link>
            </li>
          )}
          {props.isLoggedin && (
            <li>
              <Link to="/games">Games</Link>
            </li>
          )}
          {props.isLoggedin && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {!props.isLoggedin && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {!props.isLoggedin && (
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          )}
          {props.isLoggedin && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

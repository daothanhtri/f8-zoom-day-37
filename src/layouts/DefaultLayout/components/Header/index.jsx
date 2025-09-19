
import React from "react";
import AppLogo from "../AppLogo";
import SearchForm from "../SearchForm";
import Courses from "../Courses";
import Notification from "../Notification";
import UserMenu from "../UserMenu";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <AppLogo />
      </div>
      <div className={styles.center}>
        <SearchForm />
      </div>
      <div className={styles.right}>
        <Courses />
        <Notification />
        <UserMenu />
      </div>
    </header>
  );
}

export default Header;

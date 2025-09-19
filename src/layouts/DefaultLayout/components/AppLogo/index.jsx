
import React from "react";
import { Link } from "react-router-dom";
import F8Logo from "../../../../assets/images/logo_F8.png";
import styles from "./AppLogo.module.scss";

function AppLogo() {
  return (
    <Link to="/" className={styles.logoLink}>
      <img src={F8Logo} alt="F8 Logo" />
      <span>Học Lập Trình Để Đi Làm</span>
    </Link>
  );
}

export default AppLogo;

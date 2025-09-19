// src/pages/Home/index.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

function HomePage() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Chào mừng đến với F8 Zoom Day 37!</h1>
      <div className={styles.buttonGroup}>
        <Link to="/profile">
          <button>Profile</button>
        </Link>
        <Link to="/modal-demo">
          <button>Demo Modal</button>
        </Link>
        <Link to="/scroll-demo">
          <button>Demo Scroll</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;

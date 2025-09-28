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
        <Link to="/performance-demo">
          <button>Demo Performance</button>
        </Link>
        <Link to="/focus-demo">
          <button>Demo Focus</button>
        </Link>
        <Link to="/hoc-demo">
          <button>Demo HOC</button>
        </Link>
        <Link to="/render-props-demo">
          <button>Demo Render Props</button>
        </Link>
        <Link to="/custom-hooks-demo">
          <button>Demo Custom Hooks</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;

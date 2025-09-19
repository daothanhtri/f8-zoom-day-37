
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import styles from "./DefaultLayout.module.scss";

function DefaultLayout() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}

export default DefaultLayout;

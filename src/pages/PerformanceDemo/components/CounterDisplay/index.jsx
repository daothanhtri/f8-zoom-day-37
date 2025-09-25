import React from "react";
import styles from "./CounterDisplay.module.scss";

function CounterDisplay({ count }) {
  console.log("CounterDisplay re-rendered");
  return <div className={styles.display}>Count: {count}</div>;
}

export default React.memo(CounterDisplay);

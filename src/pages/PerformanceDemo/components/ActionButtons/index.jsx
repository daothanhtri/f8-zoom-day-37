import React from "react";
import styles from "./ActionButtons.module.scss";

function ActionButtons({ onIncrement, onReset }) {
  console.log("ActionButtons re-rendered");
  return (
    <div className={styles.buttonsWrapper}>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onReset} className={styles.resetButton}>
        Reset
      </button>
    </div>
  );
}

export default React.memo(ActionButtons);

import React, { useState, useCallback, useMemo } from "react";
import styles from "./PerformanceDemo.module.scss";
import CounterDisplay from "./components/CounterDisplay";
import ActionButtons from "./components/ActionButtons";
import ExpensiveChild from "./components/ExpensiveChild";

function PerformanceDemoPage() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("World");
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState("");

  console.log("PerformanceDemoPage re-rendered");

  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); 


  const handleReset = useCallback(() => {
    setCount(0);
  }, []);

  const handleChangeName = () => {
    setName(name === "World" ? "React User" : "World");
  };

  const handleAddItem = () => {
    if (newItemName.trim() === "") return;
    setItems((prevItems) => [
      ...prevItems,
      { id: Date.now(), name: newItemName },
    ]);
    setNewItemName("");
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Performance Optimization Demo</h1>

      <div className={styles.section}>
        <h3>Parent Component State</h3>
        <p>Current Count: {count}</p>
        <p>User Name: {name}</p>
        <button onClick={handleIncrement}>Increment Count</button>
        <button onClick={handleChangeName}>Change Name</button>
        <div style={{ marginTop: "1rem" }}>
          <input
            type="text"
            className={styles.itemInput}
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            placeholder="Add new item name"
          />
          <button onClick={handleAddItem} style={{ marginLeft: "10px" }}>
            Add Item
          </button>
        </div>
      </div>

      <CounterDisplay count={count} />
      <ActionButtons onIncrement={handleIncrement} onReset={handleReset} />
      <ExpensiveChild items={items} />

      <p
        style={{
          marginTop: "2rem",
          textAlign: "center",
          color: "var(--text-light-color)",
        }}
      >
        Kiểm tra console log để xem các component nào re-render.
      </p>
    </div>
  );
}

export default PerformanceDemoPage;

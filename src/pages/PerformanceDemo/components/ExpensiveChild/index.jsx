import React, { useMemo } from "react";
import styles from "./ExpensiveChild.module.scss";

function ExpensiveChild({ items }) {
  console.log("ExpensiveChild re-rendered");

  // Tính toán nặng: tìm item có tên dài nhất
  // Sử dụng useMemo để chỉ tính toán lại khi `items` thay đổi
  const expensiveCalculation = useMemo(() => {
    console.log("Calculating longest name..."); // Log này chỉ chạy khi items thay đổi
    let longest = { name: "" };
    items.forEach((item) => {
      // Thêm delay giả lập tính toán nặng
      // for(let i = 0; i < 100000; i++) {} // Giả lập delay
      if (item.name.length > longest.name.length) {
        longest = item;
      }
    });
    return longest.name;
  }, [items]); // Dependency array: chỉ re-calculate khi `items` thay đổi

  return (
    <div className={styles.wrapper}>
      <h4>Expensive Child Component</h4>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <p>Total items: {items.length}</p>
      <p className={styles.calculationResult}>
        Longest item name (expensive calculation):{" "}
        <strong>{expensiveCalculation}</strong>
      </p>
    </div>
  );
}

export default React.memo(ExpensiveChild);

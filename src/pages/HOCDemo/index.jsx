import React, { useState } from "react";
import UserProfile from "../../components/UserProfile";
import ProductList from "../../components/ProductList";
import styles from "./HOCDemo.module.scss";

function HOCDemoPage() {
  const [userLoading, setUserLoading] = useState(true);
  const [productLoading, setProductLoading] = useState(false);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>HOC Pattern Demo - withLoading</h1>

      <div className={styles.section}>
        <h3>User Profile with HOC</h3>
        <p>The UserProfile component is wrapped with `withLoading` HOC.</p>
        <div className={styles.buttonGroup}>
          <button onClick={() => setUserLoading((prev) => !prev)}>
            Toggle User Loading ({userLoading ? "ON" : "OFF"})
          </button>
        </div>
        <div className={styles.componentContainer}>
          <p className={styles.componentTitle}>User Profile:</p>
          <UserProfile isLoading={userLoading} />
        </div>
      </div>

      <div className={styles.section}>
        <h3>Product List with HOC</h3>
        <p>The ProductList component is wrapped with `withLoading` HOC.</p>
        <div className={styles.buttonGroup}>
          <button onClick={() => setProductLoading((prev) => !prev)}>
            Toggle Product Loading ({productLoading ? "ON" : "OFF"})
          </button>
        </div>
        <div className={styles.componentContainer}>
          <p className={styles.componentTitle}>Product List:</p>
          <ProductList isLoading={productLoading} />
        </div>
      </div>
    </div>
  );
}

export default HOCDemoPage;

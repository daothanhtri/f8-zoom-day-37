import React from "react";
import DataFetcher from "../../components/DataFetcher";
import styles from "./RenderPropsDemo.module.scss";

function RenderPropsDemoPage() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Render Props Pattern Demo - DataFetcher</h1>

      <div className={styles.section}>
        <h3>Posts List</h3>
        <p>Fetching posts using `DataFetcher` with Render Props.</p>
        <DataFetcher url="https://jsonplaceholder.typicode.com/posts?_limit=5">
          {({ data, loading, error }) => {
            if (loading)
              return <div className={styles.loading}>Loading posts...</div>;
            if (error)
              return <div className={styles.error}>Error: {error}</div>;
            return (
              <div>
                {data?.map((post) => (
                  <div key={post.id}>{post.title}</div>
                ))}
              </div>
            );
          }}
        </DataFetcher>
      </div>

      <div className={styles.section}>
        <h3>Users List</h3>
        <p>Fetching users using `DataFetcher` with Render Props.</p>
        <DataFetcher url="https://jsonplaceholder.typicode.com/users?_limit=5">
          {({ data, loading, error }) => {
            if (loading)
              return <div className={styles.loading}>Loading users...</div>;
            if (error)
              return <div className={styles.error}>Error: {error}</div>;
            return (
              <div>
                {data?.map((user) => (
                  <div key={user.id}>
                    <span className={styles.name}>{user.name}</span>{" "}
                    <span className={styles.dot}>•</span>
                    <span className={styles.email}>{user.email}</span>
                  </div>
                ))}
              </div>
            );
          }}
        </DataFetcher>
      </div>
    </div>
  );
}

export default RenderPropsDemoPage;

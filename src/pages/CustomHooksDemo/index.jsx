import React from "react";
import useApi from "../../hooks/useApi";
import useToggle from "../../hooks/useToggle";
import styles from "./CustomHooksDemo.module.scss";

function CustomHooksDemoPage() {
  const {
    data: posts,
    loading: postsLoading,
    error: postsError,
    refetch: refetchPosts,
  } = useApi("https://jsonplaceholder.typicode.com/posts?_limit=7");
  const {
    data: users,
    loading: usersLoading,
    error: usersError,
    refetch: refetchUsers,
  } = useApi("https://jsonplaceholder.typicode.com/users?_limit=5");

  const [showPosts, toggleShowPosts] = useToggle(true);
  const [showUsers, toggleShowUsers, setShowUsers] = useToggle(false);
  const [isDarkMode, toggleDarkMode, setDarkMode] = useToggle(false);

  React.useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkMode);
    if (isDarkMode) {
      document.documentElement.style.setProperty("--text-color", "#f0f0f0");
      document.documentElement.style.setProperty("--bg-dark-gray", "#333");
      document.documentElement.style.setProperty("--bg-light-gray", "#444");
      document.documentElement.style.setProperty("--border-color", "#555");
    } else {
      document.documentElement.style.setProperty("--text-color", "#292929");
      document.documentElement.style.setProperty("--bg-dark-gray", "#f0f2f5");
      document.documentElement.style.setProperty("--bg-light-gray", "#f6f6f6");
      document.documentElement.style.setProperty("--border-color", "#e8e8e8");
    }
  }, [isDarkMode]);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Custom Hooks Demo</h1>
      <p>
        Trang này minh họa cách sử dụng các custom hooks `useApi` và
        `useToggle`.
      </p>

      {/* Demo useApi: Posts List */}
      <div className={styles.section}>
        <h3>Posts List (useApi)</h3>
        <div className={styles.buttonGroup}>
          <button onClick={refetchPosts}>Refetch Posts</button>
          <button onClick={toggleShowPosts}>
            {showPosts ? "Hide Posts" : "Show Posts"}
          </button>
        </div>

        {showPosts &&
          (postsLoading ? (
            <div className={styles.loading}>Loading posts...</div>
          ) : postsError ? (
            <div className={styles.error}>Error: {postsError}</div>
          ) : (
            <ul>
              {posts?.map((post) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          ))}
      </div>

      {/* Demo useApi: Users List */}
      <div className={styles.section}>
        <h3>Users List (useApi)</h3>
        <div className={styles.buttonGroup}>
          <button onClick={refetchUsers}>Refetch Users</button>
          <button onClick={toggleShowUsers}>
            {showUsers ? "Hide Users" : "Show Users"}
          </button>
          <button onClick={() => setShowUsers(true)}>Force Show Users</button>
        </div>

        {showUsers &&
          (usersLoading ? (
            <div className={styles.loading}>Loading users...</div>
          ) : usersError ? (
            <div className={styles.error}>Error: {usersError}</div>
          ) : (
            <ul>
              {users?.map((user) => (
                <li key={user.id}>
                  {user.name} - {user.email}
                </li>
              ))}
            </ul>
          ))}
      </div>

      {/* Demo useToggle: Dark/Light Theme */}
      <div className={styles.section}>
        <h3>Theme Toggle (useToggle)</h3>
        <p>
          Current Theme: <strong>{isDarkMode ? "Dark" : "Light"}</strong>
        </p>
        <div className={styles.buttonGroup}>
          <button onClick={toggleDarkMode} className={styles.toggleThemeButton}>
            Toggle Theme
          </button>
          <button
            onClick={() => setDarkMode(true)}
            className={styles.toggleThemeButton}
          >
            Force Dark
          </button>
          <button
            onClick={() => setDarkMode(false)}
            className={styles.toggleThemeButton}
          >
            Force Light
          </button>
        </div>
        {isDarkMode && (
          <div className={styles.toggleContent}>
            Đây là nội dung hiển thị trong chế độ Dark Mode.
          </div>
        )}
        {!isDarkMode && (
          <div
            className={styles.toggleContent}
            style={{ backgroundColor: "#fff", color: "var(--text-color)" }}
          >
            Đây là nội dung hiển thị trong chế độ Light Mode.
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomHooksDemoPage;

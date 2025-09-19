import React, { useState, useEffect, useCallback } from "react";
import styles from "./GoToTop.module.scss";

function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <button
      className={`${styles.goToTopButton} ${isVisible ? styles.visible : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <img
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxOCAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkgMC4yNUM0LjAwNzgxIDAuMjUgMCA0LjI5Mjk3IDAgOS4yNUMwIDE0LjI0MjIgNC4wMDc4MSAxOC4yNSA5IDE4LjI1QzEzLjk1NyAxOC4yNSAxOCAxNC4yNDIyIDE4IDkuMjVDMTggNC4yOTI5NyAxMy45NTcgMC4yNSA5IDAuMjVaTTEzLjQyOTcgOS4yMTQ4NEMxMy4wMDc4IDkuNjcxODggMTIuMjY5NSA5LjY3MTg4IDExLjg0NzcgOS4yMTQ4NEwxMC4xMjUgNy40OTIxOVYxMy43NUMxMC4xMjUgMTQuMzgyOCA5LjU5NzY2IDE0Ljg3NSA5IDE0Ljg3NUM4LjM2NzE5IDE0Ljg3NSA3Ljg3NSAxNC4zODI4IDcuODc1IDEzLjc1VjcuNDkyMTlMNi4xMTcxOSA5LjIxNDg0QzUuNjk1MzEgOS42NzE4OCA0Ljk1NzAzIDkuNjcxODggNC41MzUxNiA5LjIxNDg0QzQuMDc4MTIgOC43OTI5NyA0LjA3ODEyIDguMDU0NjkgNC41MzUxNiA3LjYzMjgxTDguMTU2MjUgNC4wMTE3MkM4LjQ3MjY2IDMuNjk1MzEgOC44MjQyMiAzLjYyNSA5IDMuNjI1QzkuMTQwNjIgMy42MjUgOS40OTIxOSAzLjY5NTMxIDkuNzczNDQgMy45NzY1NkwxMy4zOTQ1IDcuNTk3NjZDMTMuODg2NyA4LjA1NDY5IDEzLjg4NjcgOC43OTI5NyAxMy40Mjk3IDkuMjE0ODRaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfNDUxNV8xOTQ4NykiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl80NTE1XzE5NDg3IiB4MT0iLTMiIHkxPSItMyIgeDI9Ii0zIiB5Mj0iMjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzVFQkJGRiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNBMTc0RkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"
        alt="to top"
      />
    </button>
  );
}

export default GoToTop;

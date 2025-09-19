import React, { useState, useEffect, useRef } from "react";
import styles from "./SearchForm.module.scss";

function SearchForm() {
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);

  const fakeSearchResults = {
    courses: [
      {
        id: 1,
        icon: "📚",
        title: "Khóa học JavaScript cơ bản",
        desc: "Học JavaScript từ đầu...",
      },
      {
        id: 2,
        icon: "💡",
        title: "JavaScript nâng cao",
        desc: "Thành thạo các kỹ thuật JS hiện đại...",
      },
      {
        id: 3,
        icon: "⚛️",
        title: "ReactJS cho người mới bắt đầu",
        desc: "Xây dựng giao diện với React...",
      },
    ],
    articles: [
      {
        id: 4,
        icon: "📝",
        title: "10 mẹo JavaScript hay",
        desc: "Tối ưu code của bạn...",
      },
      {
        id: 5,
        icon: "✍️",
        title: "Hiểu về Closures trong JS",
        desc: "Khám phá sức mạnh của Closures...",
      },
      {
        id: 6,
        icon: "📰",
        title: "Async/Await trong JavaScript",
        desc: "Cách xử lý bất đồng bộ hiệu quả...",
      },
    ],
    videos: [
      {
        id: 7,
        icon: "▶️",
        title: "Video: Giới thiệu ES6",
        desc: "Các tính năng mới nhất của JS...",
      },
      {
        id: 8,
        icon: "🎬",
        title: "Video: Hướng dẫn Debug JS",
        desc: "Tìm và sửa lỗi hiệu quả...",
      },
    ],
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.wrapper} ref={searchRef}>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          placeholder="Tìm kiếm khóa học"
          onFocus={() => setIsOpen(true)}
        />
      </div>

      {isOpen && (
        <div
          className={`${styles.searchResults} ${
            isOpen ? styles.searchResults + " " + styles.show : ""
          }`}
        >
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Khóa học</h4>
            {fakeSearchResults.courses.map((item) => (
              <a href="#" key={item.id} className={styles.resultItem}>
                <span className={styles.itemIcon}>{item.icon}</span>
                <div className={styles.itemContent}>
                  <p className={styles.itemTitle}>{item.title}</p>
                  <p className={styles.itemDescription}>{item.desc}</p>
                </div>
              </a>
            ))}
            <a href="#" className={styles.viewMore}>
              Xem thêm khóa học
            </a>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Bài viết</h4>
            {fakeSearchResults.articles.map((item) => (
              <a href="#" key={item.id} className={styles.resultItem}>
                <span className={styles.itemIcon}>{item.icon}</span>
                <div className={styles.itemContent}>
                  <p className={styles.itemTitle}>{item.title}</p>
                  <p className={styles.itemDescription}>{item.desc}</p>
                </div>
              </a>
            ))}
            <a href="#" className={styles.viewMore}>
              Xem thêm bài viết
            </a>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Video</h4>
            {fakeSearchResults.videos.map((item) => (
              <a href="#" key={item.id} className={styles.resultItem}>
                <span className={styles.itemIcon}>{item.icon}</span>
                <div className={styles.itemContent}>
                  <p className={styles.itemTitle}>{item.title}</p>
                  <p className={styles.itemDescription}>{item.desc}</p>
                </div>
              </a>
            ))}
            <a href="#" className={styles.viewMore}>
              Xem thêm video
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchForm;

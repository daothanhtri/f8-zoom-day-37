import React, { useState, useEffect, useRef } from "react";
import styles from "./Notification.module.scss";

function Notification() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const fakeNotifications = [
    {
      id: 1,
      title: "Bài học Tìm hiểu về Closure mới được thêm vào.",
      time: "1 giờ trước",
    },
    {
      id: 2,
      title: "Bài học Tìm hiểu về Garbage Collection mới được thêm vào.",
      time: "3 giờ trước",
    },
    {
      id: 3,
      title: "Vũ Quốc Dũng đã nhắc tới bạn trong một bình luận.",
      time: "1 ngày trước",
    },
    {
      id: 4,
      title: "Bài học Tìm hiểu Set và WeakSet mới được thêm vào.",
      time: "2 ngày trước",
    },
    {
      id: 5,
      title: "Bài học Tìm hiểu Map và WeakMap mới được thêm vào.",
      time: "3 ngày trước",
    },
  ];

  const unreadCount = fakeNotifications.length;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.wrapper} ref={dropdownRef}>
      <button className={styles.toggle} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.bellIcon}>🔔</span>
        {unreadCount > 0 && <span className={styles.badge}>{unreadCount}</span>}
      </button>

      {isOpen && (
        <div className={`${styles.dropdownMenu} ${isOpen ? styles.show : ""}`}>
          {fakeNotifications.map((notification) => (
            <a
              href="#"
              key={notification.id}
              className={styles.notificationItem}
            >
              <span className={styles.itemIcon}>{notification.icon}</span>
              <div className={styles.itemContent}>
                <p className={styles.itemTitle}>{notification.title}</p>
                <p className={styles.itemTime}>{notification.time}</p>
              </div>
            </a>
          ))}
          <a href="#" className={styles.viewMore}>
            Xem tất cả thông báo
          </a>
        </div>
      )}
    </div>
  );
}

export default Notification;

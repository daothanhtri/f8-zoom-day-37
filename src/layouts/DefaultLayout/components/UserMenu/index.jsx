import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./UserMenu.module.scss";
import DefaultAvatar from "../../../../assets/images/avatar.png";

function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const user = {
    avatar: DefaultAvatar,
  };

  const menuItems = [
    { id: 1, icon: "👤", text: "Trang cá nhân", path: "/profile" },
    { id: 2, icon: "⚙️", text: "Cài đặt", path: "/settings" },
    { id: 3, icon: "📚", text: "Khóa học đã mua", path: "/my-courses" },
    { id: 4, icon: "🚪", text: "Đăng xuất", path: "/logout" },
  ];

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
      <button
        className={`${styles.toggle} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={user.avatar} alt="User Avatar" className={styles.avatar} />
        <span className={styles.userName}>{user.name}</span>
      </button>

      {isOpen && (
        <div className={`${styles.dropdownMenu} ${isOpen ? styles.show : ""}`}>
          {menuItems.map((item) => (
            <Link
              to={item.path}
              key={item.id}
              className={styles.menuItem}
              onClick={() => setIsOpen(false)}
            >
              <span className={styles.itemIcon}>{item.icon}</span>
              <span className={styles.itemText}>{item.text}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserMenu;

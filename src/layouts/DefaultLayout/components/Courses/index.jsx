import React, { useState, useEffect, useRef } from "react";
import styles from "./Courses.module.scss";
import CourseImage from "../../../../assets/images/logo_F8.png";

function Courses() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const fakeCourses = [
    { id: 1, title: "HTML CSS từ Zero đến Hero", image: CourseImage },
    { id: 2, title: "Lập Trình JavaScript Nâng Cao", image: CourseImage },
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
        <span>Khóa học của tôi</span>
      </button>

      {isOpen && (
        <div className={`${styles.dropdownMenu} ${isOpen ? styles.show : ""}`}>
          {fakeCourses.map((course) => (
            <a href="#" key={course.id} className={styles.courseItem}>
              <img src={course.image} alt={course.title} />
              <span className={styles.courseTitle}>{course.title}</span>
            </a>
          ))}
          <a href="#" className={styles.viewMore}>
            Xem tất cả khóa học
          </a>
        </div>
      )}
    </div>
  );
}

export default Courses;


import React, { useState, useEffect, useRef } from "react";
import styles from "./Profile.module.scss";
import DefaultAvatar from "../../assets/images/avatar.png";

function ProfilePage() {
  const [avatar, setAvatar] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    return () => {
      if (avatar) {
        URL.revokeObjectURL(avatar);
        console.log("Revoked old avatar URL:", avatar);
      }
    };
  }, [avatar]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const newAvatarUrl = URL.createObjectURL(file);
      setAvatar(newAvatarUrl);
      console.log("Created new avatar URL:", newAvatarUrl);
    } else {
      setAvatar(null);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Trang cá nhân</h1>

      <div className={styles.avatarSection}>
        <img
          src={avatar || DefaultAvatar}
          alt="Avatar Preview"
          className={styles.avatarPreview}
        />
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className={styles.fileInput}
        />
        <button onClick={handleUploadClick} className={styles.uploadButton}>
          Chọn ảnh đại diện
        </button>
        {avatar && (
          <button
            onClick={() => {
              setAvatar(null);
              if (fileInputRef.current) fileInputRef.current.value = "";
            }}
            className="button"
            style={{
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
            }}
          >
            Xóa ảnh
          </button>
        )}

        <h2 className={styles.userName}>Tên Người Dùng</h2>
        <p className={styles.userEmail}>user.email@example.com</p>
      </div>
    </div>
  );
}

export default ProfilePage;

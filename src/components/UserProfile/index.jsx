import React from "react";
import withLoading from "../../hoc/withLoading";

function UserProfile() {
  return (
    <div
      style={{
        padding: "1.5rem",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h3>User Profile</h3>
      <p>
        <strong>Name:</strong> Dao Thanh Tri
      </p>
      <p>
        <strong>Email:</strong> daothanhtri@example.com
      </p>
      <p>
        <strong>Bio:</strong> tui là Dao Thanh Tri
      </p>
    </div>
  );
}

export default withLoading(UserProfile);

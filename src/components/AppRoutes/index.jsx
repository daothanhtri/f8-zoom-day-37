
import React from "react";
import { Routes, Route } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayout";
import HomePage from "../../pages/Home";
import ProfilePage from "../../pages/Profile";
import ModalDemoPage from "../../pages/ModalDemo";
import ScrollDemoPage from "../../pages/ScrollDemo";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/modal-demo" element={<ModalDemoPage />} />
        <Route path="/scroll-demo" element={<ScrollDemoPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;

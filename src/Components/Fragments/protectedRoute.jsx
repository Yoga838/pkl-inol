import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const authEmail = localStorage.getItem("auth_email");
  const loginTime = localStorage.getItem("tipe_time");

  useEffect(() => {
    if (loginTime) {
      const loginDate = new Date(loginTime);
      const now = new Date();

      // Hitung selisih waktu dalam ms
      const diff = now - loginDate;
      const sevenDays = 7 * 24 * 60 * 60 * 1000; // 7 hari

      if (diff >= sevenDays) {
        // Expired → hapus data login
        localStorage.clear();
        alert("Sesi login Anda telah kedaluwarsa. Silakan login kembali.");
        window.location.href = "/"; // redirect manual
      }
    }
  }, [loginTime]);

  if (!authEmail) {
    alert("Anda harus login terlebih dahulu!");
    return <Navigate to="/" replace />;
  }

  return children;
}

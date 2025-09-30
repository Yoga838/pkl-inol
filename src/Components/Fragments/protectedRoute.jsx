import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("auth_fullname");

  // Kalau belum login → redirect ke /login
  if (!isLoggedIn) {
    alert("⚠️ Anda harus login dulu untuk mengakses halaman ini!");
    return<Navigate to="/" replace />;
  }

  // Kalau login → render halaman aslinya
  return children;
}

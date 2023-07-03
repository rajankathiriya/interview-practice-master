import { Navigate } from "react-router-dom";

export default function Auth({ children }) {
  const data = localStorage.getItem("allUser");
  return data ? children : <Navigate to="/" replace />;
}

import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./routes/AppRoutes.jsx";
import { AuthProvider, AuthStore } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider value={<AuthStore />}>
    <AppRoutes />
  </AuthProvider>,
);

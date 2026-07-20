import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TestComponent from "./components/TestComponent.jsx";

createRoot(document.getElementById("root")).render(<TestComponent />);
